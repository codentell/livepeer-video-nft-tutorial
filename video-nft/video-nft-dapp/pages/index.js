
import React, { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [name, setName] = useState("");

  const videoUpload = async () => {
    const formData = new FormData();
    console.log(selectedFile)
    formData.append(
      "fileName",
      selectedFile,
      selectedFile.name
    );
    setLoading(true)
    const response = await fetch('http://localhost:3001/upload', { method: "POST", body: formData, mode: "cors" });
    const data = await response.json();
    setLoading(false)
    console.log(data);
  }

  return (
    <div>
      {loading ? "Loading...": ""}
      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <button onClick={videoUpload}>
        Upload!
      </button>
    </div>
  )
}
