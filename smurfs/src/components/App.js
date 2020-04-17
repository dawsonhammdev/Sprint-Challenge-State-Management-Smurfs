import React, { Component } from "react";
import "./App.css";

//components imports
import SmurfList from '../components/SmurfList'
import SmurfForm from '../components/SmurfForm'


export default function App() {
  return (
    <div className="App">
    <h1>Smurf Village</h1>
    <SmurfList />
    <SmurfForm />
    
    </div>
  )
}


