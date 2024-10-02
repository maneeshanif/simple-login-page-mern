import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Call backend to clear the cookie
    const logoutUser = async () => {
      try {
        await axios.post("/api/users/logout");
        // After logout, redirect to home page
        navigate("/");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#ADD899]">
      <h1 className="text-3xl text-white">Logging you out...</h1>
    </div>
  );
}

export default Logout;
