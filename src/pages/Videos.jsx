/* eslint-disable react/jsx-key */
import { useVideos } from "../main";
import { VideoCard } from "../components/VideoCard";

export const Videos = () => {
  const { isLoading, videosList } = useVideos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>All Videos</h1>
      <ul>
        {videosList?.map((video) => (
          <VideoCard video={video} />
        ))}
      </ul>
    </>
  );
};
