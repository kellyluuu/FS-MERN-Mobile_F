import {Link} from "react-router-dom"

export default function Nav(props) {
  return (
    <div className="navbar">
          <div className="dropdown">
             <button className="dropbtn">
                  <i className="fa fa-caret-down"></i>
            </button>
                <div className="dropdown-content">
                    <Link to ="/"> Home </Link>
                    <Link to ="/new"> Create New Item </Link>
                    <Link to ="/"> Login </Link>

                 </div>
         </div>
    </div>
  )
}
