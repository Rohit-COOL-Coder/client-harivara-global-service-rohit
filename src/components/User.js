import React from 'react'
import {Link} from "react-router-dom"

function User({id,user}) {
  return (
    <tr className='tableRow'>
    <td className='tabledata'>
        <div className="nameConatainer">
           <img src={user.img}/>
           <span className='name'>{user.name}</span>
        </div>
    </td>
    <td className='tabledata'><span>{user.email}</span></td>
    <td className='tabledata'><span>{user.createdAt}</span></td>
    <td className='tabledata'><span>{user.updatedAt}</span></td>
    <td className='tabledata'>
        <div className='actionView'>
        <Link to={`/${user._id}`}><button>View</button></Link>
        </div>
    </td>
</tr> 
  )
}

export default User