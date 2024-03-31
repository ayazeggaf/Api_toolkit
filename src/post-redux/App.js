import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Posts from "./Posts"
import Acceuil from "./Acceuil"


export default function App(){
   
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/posts/:id' element={<Posts />} />
                <Route path='/' element={<Acceuil/>} />
            </Routes>
        </BrowserRouter>
    )
}