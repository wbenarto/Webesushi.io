import React from "react";
import {ModalBackground1, ModalContainer1} from './ModalElements'

function Modal({ handleClose }) {
  return (
    <ModalBackground1>
      <ModalContainer1>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              handleClose(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              handleClose(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </ModalContainer1>
    </ModalBackground1>
  );
}

export default Modal;