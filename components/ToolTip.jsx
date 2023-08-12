import React from "react";
import { useEffect } from "react";

const ToolTip = ({
  isOpen,
  setIsOpen,
  onOverlayClick = console.log,
  className = "",
  children,
}) => {

  return (
    <>

      <div
        onClick={(e) => {
          if (e && typeof e.target.className === "string" && e.target.className.includes("tooltip")) {
            e.stopPropagation();
            onOverlayClick();
            setIsOpen(false);
          }
        }}
        className={`tooltip watcher ${!isOpen ? "hidden" : ""}`}
      >
        <div
          className={`tooltipContainer animationScaleUpTwo border-2 border-main-silver shadow-2xl ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ToolTip;
