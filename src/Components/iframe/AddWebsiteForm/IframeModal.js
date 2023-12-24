import React from "react";

function IframeModal({ showModal, setShowModal, setIsSubmitted, setUrl, url }) {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className={`fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-50 ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="container mt-[50px] bg-white h-[70vh] relative">
          <div className="absolute right-0">
            <div
              className="fcloseButton"
              onClick={() => {
                setUrl("");
                setIsSubmitted("");
                setShowModal(false);
              }}
            >
              close
            </div>
          </div>
          <iframe src={url} className="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  );
}

export default IframeModal;
