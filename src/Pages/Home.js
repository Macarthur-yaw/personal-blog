import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import DataContext from "../DataContext";
import { DataContext } from "../DataContext";

const Home = () => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false);
  const[details,setDetails]=useState(false);
const data=useContext(DataContext);

  // useEffect(() => {
  //   const url = "http://localhost/Posts/Display.php";

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setInfo(data));
  // }, []);
  

  return (
    <>
      <Navbar />

     {/* <Display Data={info} /> */}
      <div className="container p-2 mx-auto w-full lg:w-1/2  flex flex-col gap-4  py-2">
    
       {data.map((content) => (
          <div
            key={content.id}
            className=""
          >
            
           <img
              src={`http://localhost/Posts/${content.ImgPath}`}
              alt="topic"
              className="w-auto mx-auto mb-4"
            />
            <div className="flex flex-row justify-between items-center ">
              <h2 className="text-2xl font-bold mb-2">{content.Title}</h2>
           
            <p className="">
              <Link className="underline" to={`/Display/${content.id}`}>Read More</Link>
            </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
