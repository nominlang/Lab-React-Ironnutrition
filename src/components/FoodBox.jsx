import React from 'react'
import { useState } from 'react'
import { Button, Card } from 'antd';


  // Iteration 2
  function FoodBox({food, listDelete}) {

    const deleteCard = () => {
        listDelete(food.name)
    }

    return (
        <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
                >
            <img src={food.image} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            
            <Button type="primary" onClick={ deleteCard }> Delete </Button>
        </Card>
    );
  }
  
  export default FoodBox;