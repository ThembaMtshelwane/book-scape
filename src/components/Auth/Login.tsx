import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/dashboard`);
  };
  return (
    <section
      className="h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(login.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <section className="auth-container">
        <h1 className="text-5xl  mb-8">BookScape</h1>
        <form onSubmit={handleLogin} className="auth-form">
          <label className="my-2" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 mb-2"
            type="email"
            required
            id="email"
            name="email"
            placeholder="Email"
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
            placeholder="Password"
          />
          <button className="my-2  button p-2" type="submit">
            Login
          </button>
        </form>
        <p className="w-[80%] text-center">
          Don't have an account yet? Create one{" "}
          <Link className="underline" to="/signup">
            SignUp
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
