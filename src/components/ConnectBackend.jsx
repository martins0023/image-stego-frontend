import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import Navbar from "./Navbar";
//import './style.css';

const App = () => {
  const [embedFile, setEmbedFile] = useState(null);
  const [embedImage, setEmbedImage] = useState(null);
  const [embedPassword, setEmbedPassword] = useState("");
  const [embedMode, setEmbedMode] = useState("lsb");
  const [embeddedImage, setEmbeddedImage] = useState(null);

  const [extractImage, setExtractImage] = useState(null);
  const [extractPassword, setExtractPassword] = useState("");
  const [extractedData, setExtractedData] = useState(null);
  const [plainTextData, setPlainTextData] = useState(null);
  const [extractMessage, setExtractMessage] = useState("");

  const handleEmbed = async () => {
    const formData = new FormData();
    formData.append("file", embedFile);
    formData.append("image", embedImage);
    formData.append("password", embedPassword);
    formData.append("mode", embedMode);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/embed",
        formData
      );
      setEmbeddedImage(`data:image/png;base64,${response.data.image}`);
      toast.success("File successfully embedded!");
    } catch (error) {
      console.error("Error embedding file:", error);
      toast.error("Failed to embed file.");
    }
  };

  const handleExtract = async () => {
    const formData = new FormData();
    formData.append("image", extractImage);
    formData.append("password", extractPassword);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/extract",
        formData
      );
      setExtractMessage(response.data.message);
      setExtractedData(response.data.data);
      setPlainTextData(response.data.plain_text_data);
      toast.success("File successfully extracted!");
    } catch (error) {
      setExtractMessage("No hidden file found or decryption failed.");
      console.error("Error extracting file:", error);
      toast.error("Failed to extract file.");
    }
  };

  return (
    <section>
    <div className="">
      
    </div>
    <div className={`${styles.padding} relative z-0 bg-primary `}>
      <div>
        <h1 className={styles.sectionSubText}>
          Steganography Tool Using AES Encryption
        </h1>
        <h2 className={styles.sectionHeadText}>Embed File in Image</h2>
        <div className="mt-12 flex flex-col gap-8">
          <div>
            <span className="text-white">Upload a file</span><br />
          <input
            className="mt-1 rounded-2xl"
            type="file"
            onChange={(e) => setEmbedFile(e.target.files[0])}
            placeholder="input file"
          />
          </div>
          <div>
          <span className="text-white">Upload an image</span><br />
          <input
            type="file"
            onChange={(e) => setEmbedImage(e.target.files[0])}
            placeholder="input image"
            className="mt-1 rounded-2xl"
          />
          </div>
          <input
            className=" border-white border-[1px] py-4 px-6 
            placeholder:text-white
            text-white rounded-full outlined-none
            font-light"
            type="password"
            placeholder="Encrypt with Password (optional)"
            onChange={(e) => setEmbedPassword(e.target.value)}
          />
          <select
            onChange={(e) => setEmbedMode(e.target.value)}
            value={embedMode}
            className="bg-black py-3 px-6
          placeholder:text-secondary
          text-white rounded-2xl outlined-none
          border-none font-medium"
          >
            <option value="lsb">LSB Mode</option>
            <option value="endian">Endian Mode</option>
          </select>
          <button
            className="bg-black py-3 px-20 outline-none border 
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-3xl"
            onClick={handleEmbed}
          >
            Embed
          </button>
          {embeddedImage && (
            <div>
              <h3>Embedded Image:</h3>
              <img src={embeddedImage} alt="Embedded" />
            </div>
          )}
        </div>

        <hr className="mt-12 bg-[#000000]" />

        <div className="mt-12 flex flex-col gap-8">
          <h2 className={styles.sectionHeadText}>Extract File from Image</h2>
          <input
            type="file"
            className="rounded-2xl"
            onChange={(e) => setExtractImage(e.target.files[0])}
          />
          <input
            className=" border-white border-[1px] py-4 px-6 
            placeholder:text-white
            text-white rounded-full outlined-none
            font-light"
            type="password"
            placeholder="Password (optional)"
            onChange={(e) => setExtractPassword(e.target.value)}
          />
          <div className="items-center justify-center">
            <button
              className="bg-black py-3 px-20 outline-none border
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-3xl"
              onClick={handleExtract}
            >
              Extract
            </button>
          </div>

          {extractMessage && (
            <div className="message-container">{extractMessage}</div>
          )}
          {extractedData && (
            <div>
              <h3 className="">Extracted Data (Base64):</h3>
              <textarea className="w-full h-[200px]" readOnly value={extractedData}></textarea>
            </div>
          )}
          {plainTextData && (
            <div>
              <h3>Extracted Data (Plain Text):</h3>
              <textarea className="w-full h-[200px]" readOnly value={plainTextData}></textarea>
            </div>
          )}
        </div>
      </div>
      <StarsCanvas />
      <EarthCanvas />
      <ToastContainer />
    </div>
    </section>
  );
};

export default App;
