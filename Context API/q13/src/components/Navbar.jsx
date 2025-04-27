import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isloggedIn, setLoggedIn } = useAuth();

  const handleLoggedIn = () => {
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
  };
  return (
    <div
      style={{
        backgroundColor: "beige",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <button onClick={handleLoggedIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Navbar;
