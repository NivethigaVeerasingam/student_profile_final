
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import {Link} from "react-router-dom"

// function Users (){
//     const [Users,setUsers] = useState([])

//     useEffect(() =>{
//         axios.get('http://localhost:5000/getUser')
//         .then(result =>setUsers(result.data))
//         .catch(err => console.log(err))
//     },[]
// )
// const handleDelete =(id) =>{
//     axios.delete('http://localhost:5000/deleteUser/'+id)
//     .then (res => {console.log(res)
//         window.location.reload()})
//      .catch(errr => console.log(errr))
// }

// // const handleUpload = async (e) => {
// //     e.preventDefault();
// //     const formdata = new FormData();
// //     formdata.append('file', file);

// //     try {
// //         const res = await axios.post('http://localhost:5000/upload', formdata);
// //         console.log(res);
// //         setImage(res.data.image); 
// //     } catch (err) {
// //         console.log(err);
// //     }
// // };







//     return(
        
//         <div className = "d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className='w-50 bg-white rounded p-3'>
//                  <Link to = "/create " className='btn btn-success'>Add + </Link> 
//             <table className = 'table'>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Phone Number</th>
//                             <th >Image</th>
                            
//                         </tr>

//                     </thead>
//                     <tbody>
//                         {
//                             Users.map((user) => {
//                                 <tr key={user._id}>
//                                     <td>{user.name}</td>
//                                     <td>{user.ph_no}</td>
//                             {/* //<td>{user.image}</td>
//                                      */}
//                                      <td>
//                                     {user.image && (
//                                         <img
//                                             src={`http://localhost:/public/Images/${user.image}`}
//                                             alt={user.name}
//                                             width="50"
//                                         />
//                                     )}
//                                 </td>
//                                     <td>
//                                     <Link to = {`/update/${user._id}`} className='btn btn-success'>Update </Link> 
//                                     <button className='btn btn-danger' 
//                                     onClick={(e)=>handleDelete(user._id)}> Delete </button>
                                   

//                                     </td>
                                    
                                    
//                                 </tr>
//                             }

//                             )

                           
//                         }

//                     </tbody>

//                     </table>
//             </div>
//         </div>
       
//     )

// }

// export default Users;






import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getUser')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deleteUser/' + id)
            .then(res => {
                console.log(res);
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.ph_no}</td>
                                <td>
                                    {user.image && (
                                        <img
                                            src={`http://localhost:5000/public/Image/${user.image}`}
                                            alt={user.name}
                                            width="50"
                                        />
                                    )}
                                </td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                    <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
