/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useVideos } from "../main";

export const VideoCard = ({
  video,
  likedPage,
  watchLaterPage,
  videoDetailsPage,
}) => {
  const { isLoading, addToLiked, addToWatchLater } = useVideos();
  const { id, title, description, thumbnail, duration, liked, watchLater } =
    video;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <li key={id}>
        <img src={thumbnail} />
        <p>{title}</p>
        <p>
          <NavLink to={`/videos/${id}`}>Watch here</NavLink>
        </p>
        {videoDetailsPage && (
          <div>
            <p>
              <strong>Description: {description}</strong>
            </p>
            <p className="duration">Duration: {duration}</p>
          </div>
        )}
        {!likedPage && (
          <button disabled={liked} onClick={() => addToLiked(video)}>
            {liked ? "Liked" : "Like"}
          </button>
        )}
        {!watchLaterPage && (
          <button disabled={watchLater} onClick={() => addToWatchLater(video)}>
            {watchLater ? "Added" : "Add"} to Watch Later
          </button>
        )}
      </li>
    </>
  );
};
