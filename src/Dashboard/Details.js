import { useState, useEffect } from "react";

const Details = () => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = "http://localhost/Posts/index.php";

    fetch(url)
      .then(response => response.json())
      .then(data => setInfo(data))
      .catch(error => console.log(error));
  }, []);

  const getData = info.map((content, index) => (
    <tr key={index}>
      <td>{content.Title}</td>
      <td>{content.Content}</td>
      <td>{content.Date}</td>
      <td>{content.Source}</td>
    </tr>
  ));

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Content
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Source
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{getData}</tbody>
      </table>
    </div>
  );
};

export default Details;
