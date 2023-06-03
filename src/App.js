import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Dashboard from "./Dashboard/Dashboard";
import DashHome from "./Dashboard/HomeDash";
import Post from "./Dashboard/Post";
import Details from "./Dashboard/Details";
import Homes from "./Dashboard/Home";
import Display from './Display';
import { useEffect } from 'react';
import { useState } from 'react';
// import DataContext from './DataContext';
import { DataContextProvider } from './DataContext';

function App() {
  // const [error, setError] = useState(false);
  // const [details, setDetails] = useState(false);

  return (
    <>
      <div className="App">
        <DataContextProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path='Form' element={<Form />} />
            <Route path='Dashboard' element={<Dashboard />}>
              <Route path='Details' element={<Details />} />
              <Route path='Post' element={<Post />} />
              <Route index element={<DashHome />} />
              <Route path='Home' element={<Homes />} />
            </Route>
            <Route path='Display/:id' element={<Display />} />
            <Route path='*' element={<p>404 Error!</p>} />
          </Routes>
        </DataContextProvider>
      </div>
    </>
  );
}

export default App;
