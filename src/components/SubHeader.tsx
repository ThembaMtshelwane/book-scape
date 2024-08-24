type Props = { subheading: string };

const SubHeader = ({ subheading }: Props) => {
  return (
    <h2 className=" text-center text-3xl my-10 w-full sm:text-5xl md:text-6xl  flex  justify-center">
      {subheading}
    </h2>
  );
};

export default SubHeader;
