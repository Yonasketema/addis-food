import React from "react";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const Rating = ({ value, text, color = "#fcc419", size }) => {
  return (
    <div className="rating">
      {value >= 1 ? (
        <IoIosStar color={color} size={size} />
      ) : value >= 0.5 ? (
        <IoIosStarHalf color={color} size={size} />
      ) : (
        <IoIosStar size={size} color="#e5e7eb" />
      )}

      {value >= 2 ? (
        <IoIosStar color={color} size={size} />
      ) : value >= 1.5 ? (
        <IoIosStarHalf color={color} size={size} />
      ) : (
        <IoIosStar size={size} color="#e5e7eb" />
      )}

      {value >= 3 ? (
        <IoIosStar color={color} size={size} />
      ) : value >= 2.5 ? (
        <IoIosStarHalf color={color} size={size} />
      ) : (
        <IoIosStar size={size} color="#e5e7eb" />
      )}

      {value >= 4 ? (
        <IoIosStar color={color} size={size} />
      ) : value >= 3.5 ? (
        <IoIosStarHalf color={color} size={size} />
      ) : (
        <IoIosStar size={size} color="#e5e7eb" />
      )}
      {value >= 5 ? (
        <IoIosStar color={color} size={size} />
      ) : value >= 4.5 ? (
        <IoIosStarHalf color={color} size={size} />
      ) : (
        <IoIosStar size={size} color="#e5e7eb" />
      )}
    </div>
  );
};

export default Rating;
