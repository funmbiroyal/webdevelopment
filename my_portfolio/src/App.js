import logo from './logo.svg';
import './App.css';
import Header from './reusables/Header';
import Grace from './Grace';
import Footer from './reusables/Footer';
import ArticlePage from './reusables/ArticlePage';

import {useState} from 'react'
import About from './reusables/About';


function App() {
  const [page,setPage] = useState('home')

  const navs = [
   {
     title:'home',
     component: Grace
   },
   {
     title:'articles',
     component: ArticlePage
   },
   {
    title:'about',
    component:About
   }
  ]

  return (
   <div className="App">
   
  <Header title="funmbiRoyal" setPage = {setPage}/>
    {
      navs.map(nav=>nav.title === page ? <nav.component/>:"")
    }
 <Footer /> 
 
    
    
   </div>
  );
}

export default App;
