
import { Link } from "react-router-dom"
import {useState} from "react"


export default function Index(props) {

    const Loaded = ()=>{
        function filterCatagory (arr,query){
            return arr.filter(function(el){
                if (query !== "all"){
                    return el.catagory.toLowerCase() === query 
                }else{
                    return el.catagory.toLowerCase() !== query
                }
            })
        }
    
        const [filterState, setFilterState] = useState([...props.menu])
        const handleChange = (event)=>{
            const newFilter = filterCatagory(props.menu, event.target.value)
            setFilterState(newFilter)
        }
    
        return (
            <>
            <h1>Menu</h1>
            <div className="filter">
            <form>
            <select className="search" onChange={handleChange}>
                <option value="all">All</option>
                <option value="food">Foods</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Desserts</option>

            </select>
            </form>

            </div>
            <div className="menu">
        {filterState.map((menu)=>(
            <div className="itemBox" key={menu._id} >
                <Link to ={`/menu/${menu._id}`}>
                <img className="img" src = {menu.image} alt={menu.name}/>
                <h3>{menu.name}</h3>
                <h4 className="price">${menu.price}</h4>
                </Link>
            </div>
        ))}
        </div>
        </>)
    }


    const loading = ()=>{
        return <h1> Loading...</h1>
    }


  return props.menu ? Loaded() : loading()
}
