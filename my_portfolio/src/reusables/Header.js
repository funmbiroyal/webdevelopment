import {FaHeart} from 'react-icons/fa'
const Header = ({title})=>{
    return(
        <div className="header">
          <h3 className="h3"> <FaHeart style= {{cursor:'pointer',color:"#82F9A1"}}></FaHeart>  {title}</h3>

              <ul>< a href="https://reactjs.org/">Articles</a></ul>  
              <ul><a href = "#">Snippets</a></ul>
              <ul><a href="#">About</a></ul>
              <button>Contact</button>
             


        </div>
    )
}


 export default Header