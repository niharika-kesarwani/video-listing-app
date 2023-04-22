/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/videosDB";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const [videosList, setVideosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVideos = async () => {
    try {
      setIsLoading(true);
      const {
        status,
        data: { videos },
      } = await fakeFetch("https://example.com/api/videos");
      setIsLoading(false);
      if (status === 200) {
        setVideosList(videos);
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const addToLiked = (selectedVideo) =>
    setVideosList((videosList) =>
      videosList?.map((video) =>
        video.id === selectedVideo.id ? { ...video, liked: true } : video
      )
    );

  const likedVideos = videosList?.filter(({ liked }) => liked);

  const addToWatchLater = (selectedVideo) =>
    setVideosList((videosList) =>
      videosList?.map((video) =>
        video.id === selectedVideo.id ? { ...video, watchLater: true } : video
      )
    );

  const watchLaterVideos = videosList?.filter(({ watchLater }) => watchLater);

  return (
    <VideosContext.Provider
      value={{
        isLoading,
        videosList,
        addToLiked,
        likedVideos,
        addToWatchLater,
        watchLaterVideos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
