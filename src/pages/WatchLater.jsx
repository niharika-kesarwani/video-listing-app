/* eslint-disable react/jsx-key */
import { VideoCard } from "../components/VideoCard";
import { useVideos } from "../main";

export const WatchLater = () => {
  const { isLoading, watchLaterVideos } = useVideos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Watch Later</h1>
      <ul>
        {watchLaterVideos?.map((video) => (
          <VideoCard video={video} watchLaterPage />
        ))}
      </ul>
    </>
  );
};
