import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>Funciona Navbar</h1>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/detalles" > Detalles </NavLink>
        <NavLink to="/carrito" > Carrito </NavLink>
    </div>
  )
}

export default Navbar