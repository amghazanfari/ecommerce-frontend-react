import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import apiInstance from "../../utils/axios";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const otp = searchParam.get("otp");
  const uidb64 = searchParam.get("uidb64");

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
    } else {
      const formData = new FormData();

      formData.append("password", password);
      formData.append("otp", otp);
      formData.append("uidb64", uidb64);
      try {
        await apiInstance
          .post(`user/password-change/`, formData)
          .then((res) => {
            console.log(res.data);
            alert("password changed successfully");
            navigate("/login");
          });
      } catch (error) {
        alert("error happend");
      }
    }
  };
  return (
    <div>
      <h1>create new password</h1>
      <form onSubmit={handlePasswordSubmit}>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="repeat new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <br />
        <button type="submit">save new password</button>
      </form>
    </div>
  );
}

export default CreatePassword;
