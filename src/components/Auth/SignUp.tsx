import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(`/dashboard`);
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
      <section className="auth-container ">
        <h1 className="text-5xl mb-8">BookScape</h1>
        <form onSubmit={handleSignUp} className="auth-form">
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
          <label className="my-2" htmlFor="username">
            Username
          </label>
          <input
            className="p-2 mb-2"
            type="text"
            required
            id="username"
            name="username"
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

          <button className="my-2 button p-2" type="submit">
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
