import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Scroll from "./Scroll";
import { BrowserRouter, Routes, Route, useNavigate, Link, useParams } from "react-router-dom";
import Card from "./Card";

function Robot1() {

  let robots = [];
  const { id } = useParams();

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => { return response.json() })
    .then(users => { robots = users })



  return (
    <>
      <Scroll>
        <div>
          <img alt="Robot" src={`https://robohash.org/${id}?200x200`}></img>
          <h3>ID = {id} </h3>
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


export default Robot1;