import { Divider, Input } from 'antd';
import { useState } from 'react'

function Search( {filterFood} ) {

  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = event => {
    setSearchQuery(event.target.value);
    filterFood(event.target.value);
  }

  
  return (
    <div>
    <Divider> Search</Divider>
      <Input type="text" value={searchQuery} onChange={handleInput} />
    </div> 
  ); 
} 

export default Search;