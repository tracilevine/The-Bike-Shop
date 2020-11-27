import React, { useState, useContext } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const CreateCyclist = ({ history }) => {
  const { setCurrentUser, setCyclist, cyclist } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cyclist', formData);
      sessionStorage.setItem('cyclist', response.data);
      setCyclist(response.data.cyclist);
      history.push('/');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
    console.log(cyclist);
  };

  return (
    <Container
      className="ds-flex justify-content-center align-items-center"
      width="700px"
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>Create Your User Profile</h1>
        <Image src="https://imgur.com/vGj6QjL.png" height="200px" />
      </div>
      <Form onSubmit={handleCreate} className="d-flex flex-column">
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Upload a profile picture"
            name="avatar"
            onChange={handleImageSelect}
          />
        </Form.Group>
        <Form.Group controlId="formBasic">
          <Form.Label>What is your zipcode?</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter your zipcode."
            size="lg"
            name="zipcode"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>What is your phone number?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            size="lg"
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          type="submit"
          className="btn-pink-sm m-auto"
          onClick={() => {
            history.push('/Shoplist');
          }}
        >
          Finished
        </Button>
      </Form>
    </Container>
  );
};

export default CreateCyclist;
