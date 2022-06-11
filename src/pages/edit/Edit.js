import React, { useEffect, useState } from 'react'
import './edit.scss'
import {useLocation ,useNavigate} from "react-router-dom"
import { publicRequest } from '../../requestMethod'

function Edit() {

  
    const location=useLocation()
    const navigate=useNavigate()
    const userId=location.pathname.split('/')[1]
    const [error,setError]=useState({})
    const [user,setUser]=useState({})
    const [updateEmail,setUpdateEmail]=useState()
    const [isSubmit,setIsSubmit]=useState(false)
    
 console.log(updateEmail)
   useEffect(()=>{
    const fetchUserById= async()=>{
     try{
      const res=await publicRequest.get(`/find/${userId}`)
    setUser(res.data)
     }catch(err){
      console.log(err)
     }
    }
    fetchUserById()
   },[])

   useEffect( ()=>{
    const updateUser= async()=>{
      if(Object.keys(error)==0  && isSubmit){
        console.log(updateEmail)
        console.log("inside final useeffect")
        try{
          const res=await publicRequest.post(`/updateUser/${userId}`,{email:updateEmail})
          navigate('/')
        }catch(err){
          console.log(err)
        }
       }
    }
     updateUser()
   },[isSubmit])
    const handleUpdate=(e)=>{
     e.preventDefault()
      setError(validate(updateEmail))
      setIsSubmit(!isSubmit)
    }

    const validate=(updateEmail)=>{
        const error={}
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!updateEmail){
            error.email="Email is required"
        }else if(!regex.test(updateEmail)){
            error.email="Invalid Mail Id"
        }
        return error
    }
   
    

  return (
    <div className='editwrapper'>
        <div className='editContainer'>
           <div className='top'>
              <img src={user.img}/>
              <span>{user.name}</span>
           </div>
           <div className='center'>
            <input type="text" placeholder={user.email} onChange={e=>setUpdateEmail(e.target.value)} />
            {error.email && <span className='error'>{error.email}</span>}
           </div>
           <div className='bottom'>
            <button onClick={handleUpdate}>Update</button>
           </div>
        </div>
    </div>
  )
}

export default Edit