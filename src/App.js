import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Search from './components/Search';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/users";

// useContext
const data = createContext()
const data1 = createContext()

function App() {
  const [userData, setUserData] = useState()
  const name = "React JS Developer!"
  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setUserData(response)
      })
  }, [])
  return (
    <div className="App">
      <Navbar />
      <data.Provider value={userData}>
        <data1.Provider value={name}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </data1.Provider>
      </data.Provider>
    </div >
  );
}

export default App;
export { data, data1 }
