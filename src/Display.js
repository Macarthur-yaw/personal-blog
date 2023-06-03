import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataContext";
// import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';



function Display() {
  const {id: getID } = useParams();
  const info = useContext(DataContext);

  const contextItem = info.find(item => item.id === getID);

console.log("hdhhd"+getID);
 
  if (!contextItem) {
    return <p>Content not found</p>;
  }

  

  return (
    <div className="py-2  w-1/2 mx-auto p-2 ">

        <img src={`http://localhost/Posts/${contextItem.ImgPath}`} alt="welcome"/>
    
    <div className="flex flex-col   p-2"> 
           <div className="font-semibold"> {contextItem.Title}
           <p className="text-gray-500 mb-4">{contextItem.Date}</p>
           
           </div> 

           <div className="text-xl border-2 p-2 bg-black text-white rounded">
  {contextItem.Content}
  </div>
  </div>
    {/* Render other properties of the contextItem */}
    </div>
  );
}

export default Display;
