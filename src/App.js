import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login"
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Orders from "./Orders";

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
       dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
      
      
      
      
          <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/header" element={<Header />} />
         <Route path="/home" element={<Home />} />
         <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
       </div>
      </BrowserRouter>
  );
}



export default App;