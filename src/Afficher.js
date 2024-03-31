import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import { fetchProduct } from "./slice";
export default function Afficher(){
 const data=useSelector(state=>state.produit.data)
 const msg=useSelector(state=>state.produit.msg)
 
const dispatch=useDispatch();
useEffect(()=>{
dispatch(fetchProduct())
},[])


    return(
        <div>
{
    msg =='loading' ? <p>Loading...</p> :
   msg=='success' ? 
    
    data.map((ele)=>{
        return(
            <div key={ele.id}>
            <p>{ele.id}</p>
            <p>{ele.title}</p>
            </div>
            
        )
    }):
    <p>Echec d'acces</p>
}
        </div>
    )
}