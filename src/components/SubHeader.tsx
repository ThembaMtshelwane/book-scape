type Props = { subheading: string };

const SubHeader = ({ subheading }: Props) => {
  return (
    <h2 className="border-2 border-red-500 text-center text-3xl my-10 w-full sm:text-4xl md:text-5xl  flex  justify-center">
      {subheading}
    </h2>
  );
};

export default SubHeader;
