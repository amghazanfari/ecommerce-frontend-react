import { logout } from "../../utils/auth";
import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    logout();
  });
  return <div>Logout</div>;
}

export default Logout;
