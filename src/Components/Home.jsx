import { Outlet, Link } from 'react-router-dom';
import Business from './Business';
import Entertainment from './Entertainment';
import Body from './Body';
import { useState } from 'react';


const Home = () => {
  

  
  return (
    <div>
      <ul>


        <li>
          <Link to="/Home/Business" className='sublink'>Business</Link>
        </li>
        <li>
          <Link to="/Home/Entertainment" className='sublink'>Entertainment</Link>
        </li>

     
      </ul>
<Outlet/>
     
     {/* <Body/> */}

    
    </div>
  );
}

export default Home;
