import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import User from '../../components/User'
import { setUser } from '../../redux/userReducer'
import { publicRequest } from '../../requestMethod'
import './home.scss'
// import {} from "@reduxjs/toolkit"

// const users=[
//     {
//     id:1,
//     img:"https://firebasestorage.googleapis.com/v0/b/harivara-global-service-bd3b9.appspot.com/o/testimonial-user-one.png?alt=media&token=d9d49567-bd50-4138-9206-b934a0d7ec11",
//     name:"Rohit Kumar sah",
//     email:"RohitSah@gmail.com",
//     datedAt:"2022-04-24T15:07",
//     updatedAt:"2022-04-24T15:07",
//     updateAction:"View"
// },
// {
//     id:2,
//     img:"https://firebasestorage.googleapis.com/v0/b/harivara-global-service-bd3b9.appspot.com/o/testimonial-user-five.jpg?alt=media&token=e47c4a4b-5786-4f4b-8b41-27761b76382c",
//     name:"Amar Paloki",
// email:"AmarPaloki@gmail.com",
// datedAt:"2022-04-24T15:07",
// updatedAt:"2022-04-24T15:07",
// updateAction:"View"
// },
// {
//     id:3,
//     img:"https://firebasestorage.googleapis.com/v0/b/harivara-global-service-bd3b9.appspot.com/o/testimonial-user-three.png?alt=media&token=251ffa67-f66e-415f-9c5c-2b3d892d57c3",
//     name:"Abhishek Kumar",
//     email:"Abhishek Kumar@gmail.com",
//     datedAt:"2022-04-24T15:07",
//     updatedAt:"2022-04-24T15:07",
//     updateAction:"View"
// },
// {
//     id:4,
//     img:"https://firebasestorage.googleapis.com/v0/b/harivara-global-service-bd3b9.appspot.com/o/testimonial-user-four.jpg?alt=media&token=997f01a7-dc49-4f0a-b4b7-4a2fbe1886e7",
//     name:"Yash Modi",
// email:"YashModi@gmail.com",
// datedAt:"2022-04-24T15:07",
// updatedAt:"2022-04-24T15:07",
// updateAction:"View"
// },
// {
//     id:5,
//     img:"https://firebasestorage.googleapis.com/v0/b/harivara-global-service-bd3b9.appspot.com/o/testimonial-user-two.jpg?alt=media&token=7832a5ec-6015-4dc9-8ac1-2fbf162706c5",
//     name:"Gagan Panda",
// email:"GaganPanda@gmail.com",
// datedAt:"2022-04-24T15:07",
// updatedAt:"2022-04-24T15:07",
// updateAction:"View"
// }
// ]

function Home() {
    const dispatch=useDispatch()
    // const [users,setUsers]=useState([])
    const users=useSelector(state=>state.user.users)

    // console.log(users)
  
    useEffect(()=>{
     const fetchUser= async()=>{
        try{
            const res=await publicRequest.get('/getAllUser')
            // setUsers(res.data)
            dispatch(setUser(res.data))
        }catch(err){
            console.log(err)
        }
     }
        fetchUser()
    },[])
  return (
    <div className='wrapper'>
        <div className='container'>
            <div className='tableContainer'>
                <table className='table'>
                    <tr className='tableRow'>
                        <th className='tableHead'>Name</th>
                        <th className='tableHead'>Email</th>
                        <th className='tableHead'>Created At</th>
                        <th className='tableHead'>Updated At</th>
                        <th className='tableHead'>Action</th>

                    </tr>
                   {users.map(user=><User key={user._id} user={user}/>)}
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home