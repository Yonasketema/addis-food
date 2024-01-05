import React from "react";

function PlaceMenu({ onClose }) {
  return (
    <div>
      <button className="btn-back" onClick={onClose}>
        &larr;
      </button>
      PlaceMenu
    </div>
  );
}

export default PlaceMenu;
