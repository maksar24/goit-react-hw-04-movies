import React from "react";

export const Trailer = ({ trailer }) => {
  return (
    <ul>
      {trailer.map(({ key }) => (
        <li key={key}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </li>
      ))}
    </ul>
  );
};
