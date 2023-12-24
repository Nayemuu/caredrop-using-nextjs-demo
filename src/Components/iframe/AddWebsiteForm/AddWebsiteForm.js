"use client";
import React, { useState } from "react";
import "./AddWebsiteForm.css";
import IframeModal from "./IframeModal";

function AddWebsiteForm() {
  const [url, setUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    // console.log("url = ", url);
    if (!url.trim()) {
      alert("provide a url");
    }
    setIsSubmitted(true);
    setShowModal(true);
  };

  return (
    <>
      <div className="formContainer">
        <h2 style={{ textAlign: "center" }} className="text-2xl font-bold">
          Enter Your Website url
        </h2>

        <div className="flex justify-center">
          <form className="myform" onSubmit={formHandler}>
            <input
              type="text"
              placeholder="url"
              required
              className="finput"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <input type="submit" value="submit" className="fsubmitButton" />
          </form>
        </div>
      </div>

      {/* {url && isSubmitted && (
        <div className="formContainer mt-5">
          <div className="mb-[40px]">
            <div
              className="fcloseButton"
              onClick={() => {
                setUrl("");
                setIsSubmitted("");
              }}
            >
              close
            </div>
          </div>

          <iframe src={url} className="w-[40vw] h-[70vh]"></iframe>
        </div>
      )} */}

      {url && isSubmitted && (
        <IframeModal
          showModal={showModal}
          setShowModal={setShowModal}
          url={url}
          setUrl={setUrl}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </>
  );
}

export default AddWebsiteForm;
