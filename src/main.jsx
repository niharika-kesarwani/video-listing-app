import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import { VideosProvider, useVideos } from "./context/videos-context.jsx";

export { useVideos };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <App />
      </VideosProvider>
    </Router>
  </React.StrictMode>
);
