import React from "react";
import "./modal.css";
import close from "../../assets/Close.svg";

const Modal = (props) => {
  const { children, title, showModal, setShowModal, ...rest } = props;
  function closeModal(params) {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <div className="modal-main">
          <div className="inner-modal flex" {...rest}>
            <div className="top-header">
              <div>
                <h3>{title}</h3>
              </div>
              <div id="close-overlay" onClick={closeModal}>
                <img src={close} alt=""></img>
              </div>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
