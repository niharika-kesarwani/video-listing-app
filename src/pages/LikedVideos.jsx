/* eslint-disable react/jsx-key */
import { VideoCard } from "../components/VideoCard";
import { useVideos } from "../main";

export const LikedVideos = () => {
  const { isLoading, likedVideos } = useVideos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Liked Videos</h1>
      <ul>
        {likedVideos?.map((video) => (
          <VideoCard video={video} likedPage />
        ))}
      </ul>
    </>
  );
};
