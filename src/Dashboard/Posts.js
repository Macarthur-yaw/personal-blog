import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const Posts = () => {
const submitForm=()=>{
}
    return (
        <div>
        
        <form className="articles">
            <div >
<h4>Title</h4>
            <input type="text" className="title" placeholder="What's the Title" name="title"/>

            </div>

            <br>
            </br>
            <div>
<h4>Content</h4>
            <textarea placeholder="Content" name="content" className="content"></textarea>

            </div>
         
            <div>
<h4>Source</h4>
            <input type="text" placeholder="Source of News" className="title" name="source"/>

            </div>

            <div>
<h4>Time of Publishing</h4>
            <input type="date" className="dates"  placeholder="Time of Publishing" name="date"/>

            </div>
            <div>
<h4>Image to be attached</h4>
            <input type="file" className="imageToAttach" name="imgPath" />

            </div>
<br></br>

<button onClick={submitForm} className="btnPost">Post</button>
        </form>
        

         
        </div>
      );
}
 
export default Posts;