import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(`/dashbaord`);
  };
  return (
    <section
      className="h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(signup.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <section className="h-[60%] bg-backgroundColour w-full max-w-[650px] flex flex-col items-center justify-center">
        <h1 className="text-5xl border-2 border-black mb-8">BookScape</h1>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col border-2 border-black w-[80%]"
        >
          <label className="my-2" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 mb-2"
            type="email"
            required
            id="email"
            name="email"
          />
          <label className="my-2" htmlFor="password">
            Password
          </label>
          <input
            className="p-2 mb-2"
            type="password"
            required
            id="password"
            name="password"
          />

          <label className="my-2" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="p-2 mb-2"
            type="password"
            required
            id="password"
            name="password"
          />

          <button className="my-2 border-2 border-black p-2" type="submit">
            Sign Up
          </button>
        </form>
        <p className="w-[80%] text-center">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>
      </section>
    </section>
  );
};

export default SignUp;
