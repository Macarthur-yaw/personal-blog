import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

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
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="articles-form">
        <div>
          <h4>Title</h4>
          <input
            type="text"
            className="title-input"
            placeholder="What's the Title"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </div>
        <div>
          <h4>Content</h4>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            name="content"
            className="content-input"
          ></textarea>
        </div>
        <div>
          <h4>Source</h4>
          <input
            type="text"
            onChange={(e) => setSource(e.target.value)}
            placeholder="Source of News"
            className="source-input"
            name="source"
          />
        </div>
        <div>
          <h4>Time of Publishing</h4>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="date-input"
            placeholder="Time of Publishing"
            name="date"
          />
        </div>
        <div>
          <h4>Image to be attached</h4>
          <input
            type="file"
            onChange={(e) => setImgPath(e.target.files[0])}
            className="image-input"
            name="ImgPath"
          />
        </div>
        <br />
        <button className="btn-post">Post</button>
      </form>
   
      {congrat && (
        <div className="dialogue-box">
          <div className="dialogue-content">
            <h3>Success!</h3>
            <p>You have successfully added this.</p>
            <button className="dialogue-close" onClick={() => setCongrat(false)}>Close</button>
          </div>
        </div>
      )}
   </div>
  );
};

export default Posts;
