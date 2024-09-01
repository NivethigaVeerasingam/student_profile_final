import React,{useState,useEffect} from "react";
import { useParams,useNavigate} from "react-router-dom";
import axios from "axios";

function UpdateUser (){
    const{id} = useParams()
    const [name, setName] = useState()
    const [ph_no,setPhoneNumber ] = useState()
    const [image,setImage ] = useState()
    
    
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/getUser/'+id)

        .then(result =>{console.log(result)
            setName(result.data.name)
            setPhoneNumber(result.data.ph_no)
            setImage(result.data.image)
            
        })


        .catch(err => console.log(err))
    },[])


    // const Update =(e) =>{
    //     e.preventDefault();
    //     axios.put("http://localhost:5000/updateUser/"+id,{name,ph_no,image})
    //     .then (result => {
    //         console.log(result)
    //          navigate ('/Users')
    //     })
    
    //     .catch(err => console.log(err))
    // }

    const Update = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        
        formData.append('ph_no',ph_no);
        if (e.target.image.files[0]) {
            formData.append('image', e.target.image.files[0]);
        }

        axios.put("http://localhost:5000/updateUser/" + id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(result => {
            console.log(result);
            navigate('/Users');
        })
        .catch(err => console.log(err));
    };



    return(
        <div className = "d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
        
        <form onSubmit={Update}>
            <h2> Update User</h2>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Name" className="form-control"
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            
            <div className="mb-2">
                <label htmlFor="">phone number</label>
                <input type="text" placeholder="Enter phone number " className="form-control"
                value={ph_no} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>

            <div className='mb-2'>
                        <label htmlFor="image">Image</label>
                        <input type="file" id="image" className='form-control' />
                        {image && (
                            <div className="mt-2">
                                <img src={`http://localhost:5000/public/Images/${image}`} alt="Current" width="100" />
                            </div>
                        )}
                    </div>
            
            
            
    
           
           
            <button className="btn btn-success">Update</button>
        </form>


        </div>
    </div>
    )
}

export default UpdateUser ;