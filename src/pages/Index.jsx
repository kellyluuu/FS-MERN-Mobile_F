
import { Link } from "react-router-dom"



export default function Index(props) {
    
    const loaded = ()=>{
        return (
            <>
            <h1>Menu</h1>
            <div className="menu">
        {props.menu.map((menu)=>(
            <div className="itemBox" key={menu._id} >
                <Link to ={`/menu/${menu._id}`}>
                <img className="img" src = {menu.image} alt={menu.name}/>
                </Link>
                <h3>{menu.name}</h3>
                <h4 className="price">${menu.price.toFixed(2)}</h4>
            </div>
        ))}
        </div>
        </>)
    }
    const loading = ()=>{
        return <h1> Loading...</h1>
    }
  return props.menu ? loaded() : loading()
}
