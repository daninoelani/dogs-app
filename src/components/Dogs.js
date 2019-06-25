import React, { useState, useEffect } from 'react';
// import { navigate } from '@reach/router';


function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [id, setID] = useState('')

  const fetchDogs = async () => {
     fetch('http://localhost:4000')
    .then((res) => res.json())
    .then((dogs) => setDogs(dogs))
  }

  useEffect(() => {
    fetchDogs()
  }, []);

  const handleForm = (dog) => {
      setName(dog.name)
      setBreed(dog.breed)
      setAge(dog.age)
      setID(dog._id)
  }

  const handleDelete = async id => {
    await fetch('http://localhost:4000/' + id, {
      method: 'DELETE',
    })
    fetchDogs()
  }

  const handleEdit = async (e, id) => {
    e.preventDefault()
    await fetch('http://localhost:4000/' + id, {
      method: "PUT",
      body: JSON.stringify({ name, breed, age }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    fetchDogs()
    document.querySelector('.close').click();
  }

  return (
    <div className="App">
      <h1>Hi from Dogs!</h1>
      {dogs.map((dog) => (
        <div className='border' key={dog._id}>
          <h3>{dog.name}</h3>
          <p>{dog.breed}</p>
          <p>{dog.age}</p>
          {/* <img src={photoKiawe} alt="Kiawe with football" width='500px' />
          <img src={photoTiki} alt="Kiawe with football" width='500px' /> */}

          {/* <button type="button" className="btn btn-success" onClick={async e => { navigate('/edit/' + dog._id) }}>
            Edit
          </button> */}

          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={e => handleForm(dog)}>
            Edit
          </button>

          <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit Dogs</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={e => handleEdit(e, id)}>
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
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-danger"
            onClick={e => handleDelete(dog._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dogs;