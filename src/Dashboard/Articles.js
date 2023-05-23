import { useState, useEffect } from "react";
import HomeDashboard from "./HomeDashboard";

const Articles = () => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = "http://localhost/Posts/index.php";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data.result));
  }, []);

  const gainInfo = info.map((content) => (


<tr key={content.id}>
      <td>{content.title}</td>
      <td>{content.content}</td>
      <td>{content.source}</td>
      <td>{content.date}</td>
    </tr>

  ));


  return (
    <div style={{padding:"10px"}}>
      <table className="articles-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Source</th>
            <th>Time of Publishing</th>
          </tr>
        </thead>
        <tbody>{gainInfo}</tbody>
      </table>
    </div>
  );
};

export default Articles;
