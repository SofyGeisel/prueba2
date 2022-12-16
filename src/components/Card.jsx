import React from 'react'
import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaProvider'


const Card = () => {

    const {pizzas} = useContext (PizzaContext)

  return (
    <>
        {pizzas?.map((item, index) => (
           <div key={index}> 
           <p>
            {item.name}
           </p>
           </div>
        )
        
        ) }
    </>
  )
}

export default Card