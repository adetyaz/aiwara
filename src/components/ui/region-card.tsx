import React from "react";

export const RegionCard = ({
  image,
  title,
  story,
}: {
  image: string;
  title: string;
  story: string;
}) => {
  return (
    <div
      className="grid place-content-end w-full rounded h-1/3 bg-cover bg-center bg-no-repeat shadow-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3>{title}</h3>
      <p>{story}</p>
    </div>
  );
};
