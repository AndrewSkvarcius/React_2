import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Card } from 'reactstrap';
import SnackOrBoozeApi from './Api';
import "./AddItemForm.css"

function AddItemForm({ itemType, onItemAdded }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    recipe: '',
    serve: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let addedItem;
    if (itemType === 'snacks') {
      addedItem = await SnackOrBoozeApi.addSnack(formData);
      history.push('/snacks'); // Redirect to snacks page
    } else {
      addedItem = await SnackOrBoozeApi.addDrink(formData);
      history.push('/drinks'); // Redirect to drinks page
    }
    setFormData({ name: '', description: '', recipe: '', serve: '' });
    onItemAdded(addedItem);
  };

  return (
    <Card>
      <h1 className='itemh1'>Add {itemType}</h1>
          <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label className="label"for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label className="label" for="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label" for="recipe">Recipe</Label>
        <Input
          type="text"
          name="recipe"
          id="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label" for="serve">Serve</Label>
        <Input
          type="text"
          name="serve"
          id="serve"
          value={formData.serve}
          onChange={handleChange}
        />
      </FormGroup>
      <Button color="success" outline className="formbtn"size="sm"type="submit">Add {itemType}</Button>
    </Form>
    </Card>
  );

  }


export default AddItemForm;
