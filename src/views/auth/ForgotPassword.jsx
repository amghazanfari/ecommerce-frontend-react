import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import apiInstance from "../../utils/axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  });

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    apiInstance
      .get(`user/password-reset/${email}`)
      .then(() => {
        alert("an email has been sent to you");
      })
      .catch(() => {
        alert("email does not exist");
      });
    setIsLoading(true);
  };

  return (
    <div>
      <h2>welcome back</h2>
      <p>login to continue</p>
      <form onSubmit={handleResetPassword}>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
