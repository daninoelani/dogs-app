import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

function Images() {

  const [picture, setPictures] = useState([]);

  // constructor(props) {
  //   super(props);
  //   this.state = { pictures: [] };
  //   this.onDrop = this.onDrop.bind(this);
  // }

  function onDrop(picture) {
    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
  }

  return (
      <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
    );
  }


export default Images;