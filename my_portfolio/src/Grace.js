import { FaAngleDoubleRight,FaReact,FaJsSquare,FaHtml5} from "react-icons/fa";
const Grace = ()=>{
    return(
        <div className='gracey'>
           <h1> I'm Grace, software engineer <br/> and interface designer.</h1>
           <p className='white'>
               I specialize in rapidly prototyping software companies and web <br/> 
               applications. I talk about my journey on <u style={{color:"blue"}}>Twitter</u>, 
               commit code to <u>Github</u>,<br/>
               and take shots on <u style={{color:"rgb(247, 9, 195)"}}>Dribble</u>.</p>
            <div className='gracey2'>
                  <header className = 'graceHeader'>
                      Latest Articles
                      <p className="graceyP">All articles<FaAngleDoubleRight style ={{color:'white',cursor:'pointer'}}></FaAngleDoubleRight></p> 
                  </header>
                <div className="articles">
                  <p> <FaJsSquare style ={{color:"yellow"}}></FaJsSquare> Reducing cognitive load by theming my tools</p>
                  <p className='smallPTags'>September 08, 2019</p>
                  <p><FaReact style ={{color:"rgb(61, 61, 235)"}}></FaReact> Code splitting & lazy loading a server side rendered React app</p>
                  <p className='smallPTags'>September 08, 2019</p>
                  <p><FaHtml5 style ={{color:"rgb(247, 9, 195)"}}></FaHtml5> Easy project switching with Itermocil & command line shortcuts</p>
                  <p className='smallPTags'>September 08, 2019</p>
                </div>
            </div>
                   <div className="project1">
                       <h2>Yawnch</h2>
                       <p>An online coworking community for indie hackers, entreprenuers, and founders.
                            Chat live with app<br/>developers, designers, and mentors. Access video courses 
                            and tutorials.</p>
                            <button>Button</button>
                    </div>
                   <div className="project2and3">
                       <div className="grid-item">
                         <h2>Stockstream.tv</h2>
                         <p>On a mission to democratize investing<br/>
                          knowledge. My partner and I bootstrapped <br/>
                          this company with zero funding.</p>
                          <button>Button</button>
                       </div>
                       <div className="grid-item">
                         <h2>All Turtles</h2>
                           <p>I lead web development full time at All <br/>
                               Turtles, an AI startup studio.</p>
                               <button>Button</button>
                       </div>

                   </div>
               
               </div>
    )
}


export default Grace;