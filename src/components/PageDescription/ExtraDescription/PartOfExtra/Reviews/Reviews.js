import React from "react";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map((el) => (
          <li key={el.id}>
            <p>{el.author}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
