import React from 'react';
import { Link } from "react-router-dom";
import photo from './kiawe-football.jpg';

function Dogs() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>{' '}
      <Link to='/form'>Form</Link>
      <h1>Hi from Dogs!</h1>
      <img src={photo} alt="Kiawe with football" width='500px' />
    </div>
  );
}

export default Dogs;