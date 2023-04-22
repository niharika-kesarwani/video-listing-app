import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Videos } from "./pages/Videos";
import { LikedVideos } from "./pages/LikedVideos";
import { WatchLater } from "./pages/WatchLater";
import { VideoDetails } from "./components/VideoDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:videoID" element={<VideoDetails />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </>
  );
}

export default App;
