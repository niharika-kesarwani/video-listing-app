import { useParams } from "react-router";
import { useVideos } from "../main";
import { VideoCard } from "./VideoCard";

export const VideoDetails = () => {
  const { videoID } = useParams();
  const { isLoading, videosList } = useVideos();
  const selectedVideo = videosList?.find(({ id }) => id === Number(videoID));

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {selectedVideo === undefined ? (
        <h1>Error...</h1>
      ) : (
        <div>
          <h2>{selectedVideo?.title}</h2>
          <ul>
            <VideoCard video={selectedVideo} videoDetailsPage />
          </ul>
        </div>
      )}
    </>
  );
};
