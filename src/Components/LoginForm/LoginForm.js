import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormContainer from "../FormContainer/FormContainer";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage } from "@hookform/error-message";
// import axios from "axios";
// import axios from "../../api.js";

const eye = <FontAwesomeIcon icon={faEye} />;

const LoginForm = () => {
  const style = {
    height: "400px",
  };
  const [passwordState, setPasswordState] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordState(passwordState ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    reset,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const history = useHistory();
  const onLogin = async (data) => {
    console.log(data);
    // await axios.post("login", { data });
    history.push("/dashboard");
    reset();
  };
  return (
    <FormContainer style={style} onSubmit={handleSubmit(onLogin)}>
      <div className="width">
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) => {
            console.log(messages);
            return messages
              ? Object.entries(messages).map(([type, value]) => (
                  <small key={type}>{value}</small>
                ))
              : null;
          }}
        />
        <Input
          label="Email Address"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Email address is not valid",
            },
          })}
          type="email"
          placeholder="Kingsleyomin@letshego.com"
        />
      </div>
      <div className="width relative">
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) => {
            console.log(messages);
            return messages
              ? Object.entries(messages).map(([type, value]) => (
                  <small key={type}>{value}</small>
                ))
              : null;
          }}
        />
        <Input
          label="Password"
          {...register("password", {
            required: "This field is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password cannot be less than 8 characters and must contain at least one uppercase letter, one lowercase letter, one special character and a number",
            },
          })}
          type={passwordState ? "text" : "password"}
          placeholder="•••••••••"
        ></Input>
        <i className="password-icon" onClick={togglePasswordVisibility}>
          {eye}
        </i>
      </div>
      <div className="width mb-24">
        <span className="span-signup">
          <Link to="/forgot-password">Forgot Password?</Link>
        </span>
      </div>
      <div className="width">
        <Button
          type="submit"
          title="Log In"
          disabled={!isValid || !isDirty}
          loading={isSubmitting}
        />
      </div>
      <div className="width">
        <p className="small-signup mb-0">
          Don't have an account?{" "}
          <span className="span-signup">
            <Link to="/">Register Now</Link>
          </span>
        </p>
      </div>
    </FormContainer>
  );
};

export default LoginForm;
