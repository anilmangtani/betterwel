import react from 'react';
import '../css/navigation.css';
import { Link } from 'react-router-dom';
const Navigation = () =>{
    console.log(localStorage.getItem("name"))
    
    return(
        
        <div className='navigation-bar'>
            <div className="navigation-wrapper">
            <div className="left-navigation">
                    <h1 className='brand-name'>Better-Wellness</h1>
                </div>
                
                <div className="right-navigation">
                       <ul>
                           <li> <Link to="/">Home</Link> </li>
                           {/* <li> <Link to="/blog">Read Blogs</Link> </li> */}
                           <li> <Link to="/write-blogs">Write Blogs</Link> </li>
                           <li> <Link to="/view-blogs">View Blogs</Link> </li>
                           <li> <Link to="/videos">Videos</Link> </li>
                           <li> <Link to="/find-support">Find Support</Link> </li>
                           
                           
                           
                           {localStorage.getItem("name") ? <li  onClick={localStorage.removeItem("name")}> <Link to="/logout">Logout</Link> </li>
                           : <li><Link to="/login">Login</Link> </li> 
                            }

                            <li><Link to='/register'>Register</Link></li>

                           {/* <li> <Link to="/login">Login</Link> </li>
                           <li> <Link to="/register">Signup</Link> </li> */}
                      
                       </ul>
           
                </div>

               


            </div>
        </div>
    )
}

export default Navigation;