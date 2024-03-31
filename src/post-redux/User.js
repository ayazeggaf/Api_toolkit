import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/postSlice";
import { Link } from "react-router-dom";


const User = (props) => {  

  
  return (
    <>
      <div className="box">
      <p> {props.userData.name}</p>
      <p> {props.userData.email}</p>
      <Link to={`/posts/${props.userData.id}`}><button type="submit" className="btn btn-danger">
        Details post </button></Link>
      <div >

      </div>
      </div>
    </>
  );
}

export default User
