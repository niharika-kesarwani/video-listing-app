import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Welcome to Video Library</h1>
      <h2>
        To browse all videos, click the below button or go to the videos page
      </h2>
      <button>
        <NavLink to="/videos">Explore Videos</NavLink>
      </button>
    </>
  );
};
