import { useState, useEffect } from "react";
import { register } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  });

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = register(fullName, email, phone, password, password2);
    if (error) {
      alert(error);
    } else {
      navigate("/");
      resetForm();
    }
    setIsLoading(true);
  };

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password2"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <br />
        <button type="submit">register</button>
      </form>
    </>
  );
}

export default Register;
