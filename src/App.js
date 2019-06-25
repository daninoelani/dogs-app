import React from 'react';
import { Router, Link } from "@reach/router";
import Home from './components/Home';
import Form from './components/Form';
import Dogs from './components/Dogs';
import './App.css';

export default () => {
  return (
    <>
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="/dogs">Dogs</Link>{' '}
        <Link to="/form">Add New</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Form path="/form" />
        <Dogs path="/dogs" />
      </Router>
      </div>
    </>
  )
}