import React from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"

function Navbar({ title = "Test" , items = ["Home", "About"]}) {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <ul>
        {items &&(
            items.map(item =>{
                let id = nanoid()
                let path = item === "Home" ? "/" : item[0].toLowerCase()+item.slice(1)
                return (
                  <Link to={path} key={id}>
                    <li>{item}</li>
                  </Link>
                )
            })
        )}
      </ul>
    </nav>
  )
}

export default Navbar
