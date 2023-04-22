import { NavLink } from "react-router-dom";
import { useVideos } from "../main";

export const Header = () => {
  const { likedVideos, watchLaterVideos } = useVideos();

  return (
    <>
      <div>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/videos">
          Videos
        </NavLink>
        <NavLink className="navlink" to="/liked-videos">
          Liked Videos ({likedVideos.length})
        </NavLink>
        <NavLink className="navlink" to="/watch-later">
          Watch Later ({watchLaterVideos.length})
        </NavLink>
      </div>
    </>
  );
};
