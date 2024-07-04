import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product'
function Searchitem({cart,setCart}) {
  const [filterData , setFilterData] = useState([]);
  const {term} = useParams();
  
  useEffect ( () => {
   const filteredData = () => {
    const data = items.filter((p)=>p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
    console.log(data)
    setFilterData(data)
   }
   filteredData();
  },[term])

  return (
    <Product cart={cart} setCart={setCart}  items={filterData}  />
  )
}

export default Searchitem