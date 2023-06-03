import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useReducer } from "react";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
const[congrat,setCongrat]=useState(false);

  const [imgPath, setImgPath] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tData = new FormData();
    tData.append("Title", title);
    tData.append("Content", content);
    tData.append("Source", source);
    tData.append("Date", date);
    tData.append("ImgPath", imgPath);
    const url = "http://localhost/Posts/File.php";

    axios
      .post(url, tData)
      .then((response) => {console.log(response.data)
      setCongrat(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-2  flex flex-col gap-2">
        <div>
          
          <input
            type="text"
            className="border-2 text-center w-64 rounded p-2"
            placeholder="What's the Title"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </div>
        <div>
          {/* <h4>Content</h4> */}
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            name="content"
            className="border-2 w-96  h-64 rounded p-2"
          ></textarea>
        </div>
        <div>
          {/* <h4>Source</h4> */}
          <input
            type="text"
            onChange={(e) => setSource(e.target.value)}
            placeholder="Source of News"
            className="border-2 text-center w-64 p-2 rounded"
            name="source"
          />
        </div>
        <div>
          {/* <h4>Time of Publishing</h4> */}
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="border-2"
            placeholder="Time of Publishing"
            name="date"
          />
        </div>
        <div>
          {/* <h4>Image to be attached</h4> */}
          <input
            type="file"
            onChange={(e) => setImgPath(e.target.files[0])}
            className="border-2 w-auto"
            name="ImgPath"
          />
        </div>
        <br />
        <button className="border-2 w-48 rounded border-slate-700">Post</button>
      </form>
   
      {congrat && (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-md absolute inset-0"></div>
    <div className="bg-white p-6 rounded shadow-lg relative">
      <h3 className="text-lg font-semibold mb-2">Success!</h3>
      <p>You have successfully added this.</p>
      <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4" onClick={() => setCongrat(false)}>Close</button>
    </div>
  </div>
)}



   </div>
  );
};

export default Posts;
