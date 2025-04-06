import React from 'react';

const HeaderModal = ({ children, close }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000096] bg-opacity-50"
      onClick={() => {
        document.body.style.overflowX = 'auto';
        close(false);
      }}
    >
      <div
        className="max-w-lg w-full shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default HeaderModal;
