import { useParams, useNavigate } from 'react-router-dom'
import {useState} from "react"


function Show (props){
    const {id} = useParams();
    const menu = props.menu
    const item = menu.find((i)=> i._id ===id)
    let navigate = useNavigate()

    // state for form 
    const [editForm, setEditForm] = useState(item)

    const handleChange = (event)=>{
        setEditForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateMenu(editForm, item._id);
        navigate("/");
      };
    
    const removeItem = () =>{
        props.deleteMenu(item._id);
        navigate("/");
    }

    return (
        <div className="updateItem">
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <h3>{item.catagory}</h3>
            <h3>${item.price.toFixed(2)}</h3>
            <button id="delete" onClick={removeItem}>DELETE</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                    required
                />
                <input  
                    type="text"
                    value={editForm.catagory}
                    name="catagory"
                    placeholder="catagory"
                    onChange={handleChange}
                    required
                />
                <input 
                    type="number"
                    step="0.01"
                    min ="0"
                    value={editForm.price}
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                    required
                />
                <input className="updateBtn" type="submit" value ="Update Item"/>
            </form>
        </div>
    )
}

export default Show