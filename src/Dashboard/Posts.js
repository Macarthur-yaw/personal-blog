import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const Posts = () => {
const submitForm=()=>{
}
    return (
        <div>
        
        <form>
            <div>
<h4>Title</h4>
            <input type="text" placeholder="What's the Title" name="title"/>

            </div>

            <br>
            </br>
            <div>
<h4>Content</h4>
            <input type="text" placeholder="Content" name="content"/>

            </div>
            <div>
<h4>Source</h4>
            <input type="text" placeholder="Source of News" name="source"/>

            </div>

            <div>
<h4>Time of Publishing</h4>
            <input type="date" placeholder="Time of Publishing" name="date"/>

            </div>
            <div>
<h4>Image to be attached</h4>
            <input type="file" name="imgPath" />

            </div>
<br></br>

<button onClick={submitForm}>Post</button>
        </form>
        

         
        </div>
      );
}
 
export default Posts;