import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();
    const cekLogin = true;

    if (cekLogin) {
      navigate("/dashboard");
    }
  }

  return (
    <form onSubmit={loginHandler}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button>Login</button>
    </form>
  );
}
