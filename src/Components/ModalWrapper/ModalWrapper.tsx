import React, { useEffect, useRef } from "react";

interface ModalWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWrapper = ({ onClose, children }: ModalWrapperProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div ref={modalRef}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
