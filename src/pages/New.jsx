import { useState } from "react"
import { useNavigate } from 'react-router-dom'


export default function New (props){
  let navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        catagory: "",
        price: "",
    })

    const handleChange = (event)=>{
        setNewForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.createMenu(newForm)
        setNewForm({
            name: "",
            image: "",
            catagory: "",
            price: "",
        })
        navigate("/")
    }

  return (
    <section>
      <h2> Create New Item</h2>
    <form className="new" onSubmit={handleSubmit}>
      Item Name<input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        required
      /> <br></br>
      Image URL<input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="image URL"
        onChange={handleChange}
        required
      /> <br></br>
      Catagory<input
        type="text"
        value={newForm.catagory}
        name="catagory"
        placeholder="catagory"
        onChange={handleChange}
        required
      /> <br></br>
      Price<input
        type="number"
        value={newForm.price}
        name="price"
        placeholder="price"
        onChange={handleChange}
        required
      /> <br></br>
      <input type="submit" value="Create" />
    </form>

  </section>
  )
}

