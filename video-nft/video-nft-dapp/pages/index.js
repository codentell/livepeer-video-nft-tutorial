
import React, { useState } from "react";


const Video = ({ video }) => {
  return <video width='500' height='500' controls>
    <source src={video}></source>
  </video>
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [video, setVideo] = useState("")

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


    console.log(data);
    const ipfs = await fetch(`https://ipfs.io/${data.data.replace(":", "")}`);
    const nftMetadata = await ipfs.json()
    console.log(nftMetadata);
    setVideo(`https://ipfs.io/${nftMetadata.properties.video.replace(":", "")}`)
    setLoading(false)
  }

  return (
    <div>
      {loading ? "Loading..." : <Video video={video}/>
      }
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
