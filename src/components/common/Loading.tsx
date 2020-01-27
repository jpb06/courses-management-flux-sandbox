import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="d-flex justify-content-center m-5">
      <div
        className="spinner-grow text-success"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
