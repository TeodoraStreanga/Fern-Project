import React from "react"
import "../Styles/styles.js"
import axios from "axios"
import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"

function MenuPage() {

  const [categories, setCategories] =  useState([])
  const [dishes, setDishes] =  useState([])
  const [select, setSelect] = useState([])
  
  useEffect(() => {getCategories(); getDishes("Обід")}, [])
  
  const categoryList = categories.map(category => (
    <li>
      <button onClick = {() => {getDishes(category.Category)}} 
      className={`menu-select-button ${applyStyle(category)}`}>
        {category.Category}
      </button>
    </li>
    ))

  const dishList = dishes.map(dish => (
      <li className = "dish-field">
        <img className = "dish-image" src = {dish.Image}></img>
        <div className = "dish-info">
          <span className = "dish-title">{dish.Name}</span>
          <span className = "dish-desc">{dish.Desc}</span>
          <span className = "dish-price">{dish.Price} &#8372;</span>
        </div>
      </li>
  ))

  return (
    <div className="menu-page">
      <div className = "header"></div>
      <div className = "menu-panel">

        <div className = "menu-title">Меню</div>
        <ul className = "category-select">{categoryList}</ul>
        <ul className = "menu-viewer">{dishList}</ul>

      </div>
    </div>
  );
  function applyStyle(state)
  {
    if (select === state.Category){return "clicked"}
    return
  }
  async function getCategories(){
    try{
        const res = await axios.get("http://localhost:4000/fern-api/categories")
        console.log(res)
        setCategories(res.data)
      }
    catch(err){
          console.log(err)
      }
  }
  async function getDishes(category){
    try{
        const res = await axios.get(`http://localhost:4000/fern-api/dishes/${category}`)
        console.log(res)
        setDishes(res.data)
        setSelect(category)

    }
    catch(err){
        console.log(err)
    }
  }
  
}
export default MenuPage;