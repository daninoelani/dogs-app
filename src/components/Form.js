import React, { useState } from 'react';
import { navigate } from '@reach/router';
// import Images from './Images';

export default () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  // const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({name, breed, age})
    await fetch('http://localhost:4000/', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      } 
    })
    navigate('/dogs')
  }

  return (
    <>
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <input type="text" className="form-control" id="breed" placeholder="Breed" value={breed} onChange={e => setBreed(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAge">Age</label>
          <input type="number" className="form-control" id="exampleInputAge" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        {/* <Images /> */}
        {/* <div className="form-group">
          <label htmlFor="exampleInputPhoto">Photo File</label>
          <input type="text" className="form-control" id="exampleInputPhoto" placeholder="Photo" value={photo} onChange={e => setPhoto(e.target.value)} />
        </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
          </button>

      </form>
    </div>
    </>
  );
}
