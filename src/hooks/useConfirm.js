// src/hooks/useConfirm.js
import { useState, useRef } from "react";

export const useConfirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const resolveRef = useRef(null);

  const confirm = (msg) => {
    setMessage(msg);
    setIsOpen(true);

    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  };

  const handleConfirm = () => {
    setIsOpen(false);
    resolveRef.current(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
    resolveRef.current(false);
  };

  return {
    confirm,
    isOpen,
    message,
    handleConfirm,
    handleCancel
  };
};
