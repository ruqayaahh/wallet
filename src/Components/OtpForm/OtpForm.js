import React from "react";
import "./otp-form.css";
import FormContainer from "../FormContainer/FormContainer";
import { useEffect, useState } from "react";
import ReactCodeInput from "react-verification-code-input";
import axios from "../../api.js";
import { useHistory } from "react-router";
// import ReactDOM from 'react-dom';

const OtpForm = () => {
  const style = {
    height: "290px",
  };

  let [email, setEmail] = useState("");
  let [timer, setTimer] = useState(60);
  const [opt, setOpt] = useState([]);
  const history = useHistory();

  const tick = () => {
    return (timer -= 1);
  };

  const timeCountdown = async () => {
    setInterval(() => {
      tick();
      setTimer(timer);
    }, 1000);
    if (timer === 0) {
      const userEmail = localStorage.getItem("userEmail");
      await axios
        .post("otp_reset", userEmail)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    timeCountdown();
  });

  const onSubmit = async (data) => {
    if (data && data.length === 4) {
      data = Number(data);
      const userEmail = localStorage.getItem("userEmail");
      console.log(data);
      setEmail((email = userEmail));
      const payload = [email, data];
      await axios
        .post("verify", { payload })
        .then((res) => {
          if (res.data.message === "User account verified") {
            console.log(res.data.message);
            alert(res.data.message);
            history.push("/login");
            return;
          }
          alert(res.data.message);
        })
        .catch((err) => console.log(err));
    }
  };

  const resend = async () => {
    const userEmail = localStorage.getItem("userEmail");
    setEmail((email = userEmail));
    await axios
      .post("resend", email)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <FormContainer style={style}>
      <div>
        <h3 className="otp-title">
          Kindly enter your OTP to <br></br>
          verify account
        </h3>
      </div>
      <ReactCodeInput
        type="number"
        autofocus="true"
        fields={4}
        value={opt}
        onComplete={onSubmit}
        onChange={(e) => setOpt([e])}
      />
      <div>
        <p className="small-otp">
          {/* eslint-disable-next-line */}
          Didn't get the code?{" "}
          <a className="span-otp" onClick={resend}>
            Resend
          </a>
        </p>
        <p className="otp-timer">00:{timer}</p>
      </div>
    </FormContainer>
  );
};

export default OtpForm;
