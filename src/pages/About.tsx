import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <section className="flex flex-col items-center h-full my-10">
      <SubHeader subheading="About Us" />
      <section className="flex flex-col my-5 items-center sm:flex-row sm:items-center border-2 border-yellowGreen">
        <img
          src="/logo.jpg"
          alt=""
          className="h-[450px] object-cover object-center w-full sm:w-[50%] sm:h-full sm:max-h-screen"
        />

        <section className="p-3 w-[90%]  flex flex-col gap-3 sm:ml-4  sm:justify-center sm:w-[50%] sm:h-full md:w-[500px]">
          <h2 className="text-4xl mb-7">BookScape</h2>
          <p className="w-[90%] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            sunt molestiae. Similique et sequi animi corporis! Amet, ipsa
            cupiditate, odio ullam assumenda minima, sint quae at commodi nemo
            incidunt dolore. Molestias, autem nesciunt vel illo aut consequuntur
            molestiae odit ab quae ex soluta dicta perspiciatis illum, corrupti
            rerum magnam minus.
          </p>
        </section>
      </section>
    </section>
  );
};

export default About;
