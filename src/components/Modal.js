import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  } from 'reactstrap';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    const [dogs, setDogs] = useState([]);
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [id, setID] = useState('')

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Dogs</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input type="text" name="dogName" id="exampleName" value={name} onChange={e => setName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleBreed">Breed</Label>
                <Input type="text" name="breed" id="exampleBreed" value={breed} onChange={e => setBreed(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAge">Age</Label>
                <Input type="number" name="age" id="exampleAge" value={age} onChange={e => setAge(e.target.value)} />
              </FormGroup>
              <ModalFooter>
                <Button type="submit" color="primary" onClick={this.toggle}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
              </Form>
          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default ModalExample;