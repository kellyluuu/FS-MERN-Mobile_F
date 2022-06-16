import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import New from "../pages/New"
import Login from '../pages/Login'





function Main(props) {
    const [menu, setMenu] = useState(null)
    const URL = "https://fs-mern-mobile.herokuapp.com/menu/"

    //INDEX ROUTE 
    const getMenu = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setMenu(data)
    }

    //CREATE ROUTE POST ROUTE
    const createMenu = async (menu) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(menu),
        })
        getMenu()
    }

    //UPDATE ROUTE 

    const updateMenu = async (menu, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(menu)
        })
        getMenu()
    }

    //DELETE ROUTE
    const deleteMenu = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        })
        getMenu()
    }

    useEffect(() => { getMenu() }, [])


    return (
        <main>
            <Routes>
                <Route path="/"
                    element={<Index menu={menu} />} />
                <Route path="/menu/:id"
                    element={<Show
                        menu={menu}
                        updateMenu={updateMenu}
                        deleteMenu={deleteMenu} />}
                />
                <Route path="/new"
                    element={<New createMenu={createMenu} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    )
}

export default Main