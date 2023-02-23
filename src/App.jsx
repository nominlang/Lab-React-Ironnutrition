import { useState } from 'react'
import './App.css'
import { Row, Divider, Col} from 'antd';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsState, setFoodsState] = useState(foods) 
  const [showFood, setShowFood] = useState(foods) // set - method to change
  

  const setFood = (added) => {
  const addedFood = [added, ...foodsState];

    setFoodsState(addedFood);
    setShowFood(addedFood);
  }

  const filterFood = (searchQuery) => {
    const filteredFood = foodsState.filter( food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) );

    setShowFood(filteredFood);
  }

  const deleteFood = (name) => {
    const foodWithoutDeleted = showFood.filter( food =>
    food.name!== name);

    setFoodsState(foodWithoutDeleted);
    setShowFood(foodWithoutDeleted);
  }


  return (
    <div className="App">

      <AddFoodForm setFood={setFood} />
      <Search filterFood={filterFood} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {showFood.map( (food) => {
            return (
              <Col>
               <FoodBox food={food} 
                key={food.name}
                listDelete={deleteFood}
               />
              </Col>
            )
        })}
      </Row>

    </div>
  )
}

export default App