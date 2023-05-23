// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Entertainment from "./Pages/Entertainment";
import Business from "./Pages/Business";
import Political from "./Pages/Political";
import International from "./Pages/International";
import Signin from "./Components/Signin";
import Dashboard from './Dashboard/Dashboard';
import Posts from './Dashboard/Posts';
import HomeDashboard from "./Dashboard/HomeDashboard";
import AdminSign from "./Components/AdminSign";
import Articles from './Dashboard/Articles';
import User from './Dashboard/User';

function App() {
  return (
    <>

 <div className="App">
  
  <Navbar/>
 

<Routes>
  <Route path="Home" element={<Home/>}/>
  <Route path="Business" element={<Business/>}/>
  <Route path="Entertainment" element={<Entertainment/>}/>
  <Route path="Political" element={<Political/>}/>
  <Route path="International" element={<International/>}/>
<Route path="Sign" element={<Signin/>}>

</Route>

<Route path="Dashboard" element={<Dashboard/>}>
<Route path="/Dashboard/Home" element={<HomeDashboard/>}/>
  <Route path="/Dashboard/Post" element={<Posts/>}/>
 <Route path="/Dashboard/Articles" element={<Articles/>}/>
 <Route path="/Dashboard/User" element={<User/>}/>
  </Route>
  <Route path="Admin" element={<AdminSign/>}/>
  <Route path="*" element={<p>404!</p>}/>
</Routes>
<Footer/>
    </div>
    </>
    );
}

export default App;
