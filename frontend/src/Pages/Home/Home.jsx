import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Explore/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

function Home() {

  const [category, setCategory] = useState("All");


  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>

    </div>
  )
}

export default Home
