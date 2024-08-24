import React from "react";

type Props = { subheading: string };

const SubHeader = ({ subheading }: Props) => {
  return (
    <h2 className="text-center text-3xl my-10 sm:text-4xl md:text-5xl  flex  justify-center w-[90%] max-w-[750px]">
      {subheading}
    </h2>
  );
};

export default SubHeader;
