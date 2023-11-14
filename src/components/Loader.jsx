import React from "react";

function Loader() {
  return (
    <div className="flex items-center mb-6 justify-end">
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}

export default Loader;
