import React from 'react'
import { useState } from 'react'
import { Divider, Input } from 'antd';


const AddFoodForm = ({ setFood }) => {
const [name, setName] = useState('')
const [image, setImageUrl] = useState('')
const [calories, setCalories] = useState(0)
const [servings, setServings] = useState(0)

const handleSubmit = event => {
    event.preventDefault()
    
    setFood({ name, image, calories, servings })
   
    setName('')
    setImageUrl('')
    setCalories(0)
    setServings(0)
  }
  
    return (
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name
        <Input value={name} type="text" onChange={event => setName(event.target.value)} />
        </label>
        <label>Image
        <Input type='text' value={image} onChange={event => setImageUrl(event.target.value)} />
        </label>
        <label>Calories
        <Input type='number' value={calories} onChange={event => setCalories(event.target.value)}/>
        </label>
        <label>Servings
        <Input type='number' value={servings} onChange={event => setServings(event.target.value)}/>
        </label>
        <button type="submit" onClick={handleSubmit}>Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;