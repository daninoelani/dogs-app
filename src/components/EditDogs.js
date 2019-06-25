import React, { useState, useEffect } from 'react'
// import { navigate } from '@reach/router'

function EditDogs(props) {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')

  const getDog = async id => {
    await fetch('http://localhost.4000' + id, {
      method: 'GET',
    }).then(res => res.json())
  }
  
  const handleEdit = async (id) => {
    const update = JSON.stringify({ name, breed, age })
    await fetch('http://localhost:4000/' + id, {
      method: "PUT",
      body: update,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
  }

  useEffect(() => {
    getDog(props.id).then(dog => {
      setName(dog.name)
      setBreed(dog.breed)
      setAge(dog.age)
    })
  }, [props.id])

  return (
    <>
    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby= "exampleModalLabel" aria-hidden="true" >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Dog</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={(dog) => handleEdit(dog._id)}>
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
    </>
)
}

export default EditDogs;