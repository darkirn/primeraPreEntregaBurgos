
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
  const categories = [
    'Electrónica',
    'Ropa',
    'Hogar',
    'Deportes',
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Brand</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={`/categoria/${category.toLowerCase()}`}>{category}</a>
            </li>
          ))}
        </ul>
        <CartWidget itemCount={3} />
      </div>
    </nav>
  )
}

export default NavBar