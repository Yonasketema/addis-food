import React from "react";
import StarRating from "./StarRating";

function FoodCard({ name, price, discountPrice, owner, description, rate }) {
  //   console.log(description.split(" ").join("."));
  return (
    <div
      style={{
        display: "flex",
        gap: "1.2rem",
        // borderTop: "1.7px solid #ddd",
        // borderBottom: "1.7px solid #ddd",
        padding: "2rem 1rem",

        backgroundColor: "var(--color-grey-00)",
        border: "1px solid #eee",

        margin: "10px",
      }}
    >
      <img
        src="img-6.jpg"
        alt=""
        style={{
          height: "14rem",
          borderRadius: "7px",
        }}
      />
      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "var( --color-grey-700)",
            fontWeight: "500",
            fontSize: "2rem",
            marginBottom: "1rem",
          }}
        >
          {name}
        </h2>
        <p
          style={{
            color: "var( --color-grey-500)",
            fontSize: "1.5rem",
          }}
        >
          {owner}
        </p>
        <p
          style={{
            color: "var( --color-grey-500)",
            fontSize: "1.5rem",
            marginBottom: ".7rem",
          }}
        >
          &bull; {description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: ".5rem",
            }}
          >
            <StarRating size={20} />
            <h4>{rate}</h4>
            <p
              style={{
                fontWeight: "lighter",
                color: "var( --color-grey-400)",
              }}
            >
              (200 reviews)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".7rem",
            }}
          >
            {discountPrice && (
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  textDecoration: "line-through",
                  fontWeight: "bold",
                  color: "var(--color-grey-600)",
                }}
              >
                <h4>{price}</h4>
                <small>Birr</small>
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontWeight: "bold",
                color: "var(--color-grey-900)",
              }}
            >
              <h4>{discountPrice || price}</h4>
              <small>Birr</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
