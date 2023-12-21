import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import SnackOrBoozeApi from './Api';

function AddItemForm({ itemType }) {
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
    if (itemType === 'snacks') {
      await SnackOrBoozeApi.addSnack(formData);
    } else {
      await SnackOrBoozeApi.addDrink(formData);
    }
    setFormData({ name: '', description: '', recipe: '', serve: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
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
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input
          type="text"
          name="recipe"
          id="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input
          type="text"
          name="serve"
          id="serve"
          value={formData.serve}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Add {itemType}</Button>
    </Form>
  );
}

export default AddItemForm;
