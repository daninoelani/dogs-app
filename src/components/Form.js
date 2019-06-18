import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Form() {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <Link to='/'>Home</Link>{' '}
      <Link to='/dogs'>Dogs</Link>
      <h1>Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control-lg" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <input type="text" className="form-control-lg" id="breed" placeholder="Breed" value={breed} onChange={e => setBreed(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">I'm not a robot</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;