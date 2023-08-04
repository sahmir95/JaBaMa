import React from "react";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  setIsOpen,
  onOverlayClick = console.log,
  className = "",
  children,
}) => {

  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <div
      onClick={(e) => {
        if (e && e.target.className.includes("overlay")) {
          e.stopPropagation();
          onOverlayClick();
          setIsOpen(false);
        }
      }}
      className={`overlay ${!isOpen ? "hidden" : ""}`}
    >
      <div
        className={`bodyContainer ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
