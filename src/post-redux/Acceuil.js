import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./redux/userSlice"
import User from './User'
import { Link } from 'react-router-dom'

const Acceuil = () => {
    const dispatch = useDispatch()
    const users = useSelector((data) => data.user.users)
    useEffect(() => {
        dispatch(getUsers())
    }, []);

  return (
        <div className="acceuil">
        <p  className='para'>Nombre d'utilisateurs : {users.length}</p>
       
        {users.map((user) => (
             <User userData={user} />
             ))}
        </div>
  )
}

export default Acceuil