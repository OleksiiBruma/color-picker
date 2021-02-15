import React, { useRef } from "react";
import { useOnClickOutside } from "Hooks/useOnClickOutside";
import { ModalBackground } from "Components/Modal/styles";
import { func, bool, number, oneOfType, arrayOf, node } from "prop-types";

export const Modal = ({ isOpen, toggle, position, children }) => {
  const ref = useRef();
  useOnClickOutside(ref, toggle);

  return (
    isOpen && (
      <ModalBackground position={position} ref={ref}>
        {children}
      </ModalBackground>
    )
  );
};

Modal.defaultProps = {
  isOpen: false,
  toggle: null,
  position: 1,
  children: null,
};
Modal.propTypes = {
  isOpen: bool.isRequired,
  toggle: func.isRequired,
  position: number.isRequired,
  children: oneOfType([arrayOf(node), node]),
};
