import "./Header.css"
import {FaHeart} from 'react-icons/fa'
import { useState, CSSProperties } from "react"

const Header = ({title, setPage})=>{

    return(
        <div className="header">
          <div className="icon" onClick={()=>setPage('home')}>
               <FaHeart style= {{cursor:'pointer',color:"#82F9A1"}}></FaHeart>    <h2>{title}</h2> 
          </div>
              <div className ="navBar">
              <ul>< a href="#" onClick={()=>setPage('articles')}>Articles</a></ul>  
              <ul><a href = "#">Snippets</a></ul>
              <ul><a href="#" onClick = {()=>setPage('about')}>About</a></ul>
              <ul className ="contact"><a href="#">Contact</a></ul>
            </div>
             


        </div>
    )
}


 export default Header