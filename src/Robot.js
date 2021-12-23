import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import Scroll from "./Scroll";
import { BrowserRouter, Routes, Route, useNavigate, Link, useParams } from "react-router-dom";
import Card from "./Card";
import './Robot.css';

function Robot() {

  var robots = [];
  const { id } = useParams();
  const [Robot, setRobot] = useState([]);

  useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => { return response.json() })
    // .then(users => {robots.push(users)})
    .then(data => {setRobot(data)})
    // .then(res => {console.log(res);})
  })
  



  return (
    <>
      <Scroll>
        <div className="fechrout">
          <img alt="Robot" src={`https://robohash.org/${id}?200x200`}></img>
          <h3>ID = {id} </h3>
          <h3>NAME = {Robot.name}</h3>
          <h3>USERNAME = {Robot.username}</h3>
          <h3>EMAIL = {Robot.email}</h3>
          {/* <h3>ADDRESS = {Robot.address.street} ({Robot.address.zipcode}) </h3> */}
          {/* <h3>PHONE-NUMBER = {Robot.phone}</h3> */}
        </div>
      </Scroll>
      {/* <Routes>
          <Route path="/:id" element={< />}></Route>
          <Route path="/Home " element={<Home />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes> */}
    </>

  )
}


export default Robot;




