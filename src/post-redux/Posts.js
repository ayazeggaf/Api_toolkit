import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {  getPosts } from './redux/postSlice'
import { getUsers } from './redux/userSlice'
import { deletPost,update,addPost } from './redux/postSlice'

const Posts = () => {
    const [modifier,setModifier]=useState(false);
    const[ajouter,setAjouter]=useState(false)
    const [modifieravecId,setModifieravecId]=useState();
    const [userId,setUserid]=useState();
    const [title,setTitle]=useState();
    const [body,setBody]=useState();
    const [addtitle,setaddTitle]=useState();
    const [addbody,setaddBody]=useState();
    const {id} = useParams()
    const dispatch = useDispatch()
    const posts = useSelector((data) => data.post.posts)
    const users=useSelector((data) => data.user.users)

    useEffect(() => {
      dispatch(getUsers())
  }, []);
    useEffect(() => {
        dispatch(getPosts())
    }, []);

    const postsFil = posts.filter((item) => item.userId == id)

    const handleDelete= (id) => {
        dispatch(deletPost(id))
        
    }
    const handleUpdate=(id)=>{
      setModifieravecId(id)
      setModifier(true);
    }
    const confirmer=(id)=>{
      dispatch(update({id:id,title:title,body:body}))
      setModifier(false)
      
    }
    const handlAdd=()=>{
      setAjouter(true)
    }
    const add=()=>{
      dispatch(addPost({userId: id, id: parseInt(posts.length + 1), title: addtitle, body: addbody}))
      setAjouter(false)
    }
  return (
    <div className='acceuil'>
      <div>
             <button  onClick={()=>handlAdd()}>add post</button>  
            {ajouter&&
      <div>        
               <label className='col-form-label'>Title</label>
             <input type='text' className='form-control' defaultValue={addtitle} onChange={e=>setaddTitle(e.target.value)}/>
             <label className='col-form-label'>Body</label>
             <input type='text' defaultValue={addbody} className='form-control' onChange={e=>setaddBody(e.target.value)} />
             <button onClick={()=>add()}>Confirmer</button>
           
   
       
  


      </div>
      
      }
            </div>
         
        {
        postsFil ? 
        postsFil.map((post) => (
          
        <div className='box' key={post.id}>
             
            <h3 className='btn' key={post.id}>{post.title}</h3>
            <p>{post.body}</p>
          <div style={{marginTop:"15px"}}>
          
          <button  onClick={()=>handleUpdate(post.id)}>Modifier post</button>  <button onClick={() => handleDelete(post.id)}>supptimer post</button>
            <div>
            {modifier&&modifieravecId==(post.id)&&
      <div>
        <label>User</label>
               <label className='col-form-label'>Title</label>
             <input type='text' className='form-control' defaultValue={post.title} onChange={e=>setTitle(e.target.value)}/>
             <label className='col-form-label'>Body</label>
             <input type='text' defaultValue={post.body} className='form-control' onChange={e=>setBody(e.target.value)} />
             <button onClick={()=>confirmer(post.id)}>Confirmer</button>
           
   
       
  


      </div>
      
      }
            </div>
    

          </div>
       
        </div>
    ))  : ""
}
    </div>
  )
}

export default Posts