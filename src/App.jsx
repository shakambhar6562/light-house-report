import React, { useState } from "react";
import axios from "axios";
import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const runLighthouse = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/run-lighthouse",
        { url }
      );
      setReport(response.data);
    } catch (error) {
      console.error("Error running Lighthouse:", error);
    }
    setLoading(false);
  };

  return <RouterProvider router={router} />;
}

export default App;
