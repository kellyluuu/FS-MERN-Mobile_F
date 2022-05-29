import { useState } from "react"
export default function New (props){
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
    }

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.catagory}
        name="catagory"
        placeholder="catagory"
        onChange={handleChange}
      />
        <input
        type="number"
        value={newForm.price}
        name="price"
        placeholder="price"
        onChange={handleChange}
      />
      <input type="submit" value="Create" />
    </form>

  </section>
  )
}

