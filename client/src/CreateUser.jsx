import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState('');
    const [ph_no, setPhoneNumber] = useState('');
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    // const handleUpload = async (e) => {
    //     e.preventDefault();
    //     const formdata = new FormData();
    //     formdata.append('file', file);

    //     try {
    //         const res = await axios.post('http://localhost:5000/upload', formdata);
    //         console.log(res);
    //         setImage(res.data.image); 
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

//submit
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        // formData.append('email', email);
        formData.append('ph_no',ph_no);
        formData.append('image', file);

        axios.post("http://localhost:5000/createUser", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result);
                navigate('/Users');
            })
            .catch(err => console.log(err));
    }

    // // Create
    // const Submit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const result = await axios.post("http://localhost:5000/createUser", { name, ph_no, image });
    //         console.log(result);
    //         navigate('/Users');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // // Image effect
    // useEffect(() => {
    //     const fetchImage = async () => {
    //         if (file) {
    //             const formdata = new FormData();
    //             formdata.append('file', file);

    //             try {
    //                 const res = await axios.get('http://localhost:5000/getImage', formdata);
    //                 setImage(res.data[0].image);
    //             } catch (err) {
    //                 console.log(err);
    //             }
    //         }
    //     };

    //     fetchImage();
    // }, [file]);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder="Enter phone number" className="form-control"
                            onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Image</label>
                        {/* <input type="file" className="form-control" */}
                        <input type="file" onChange={handleFileChange} className='form-control' />

                            {/* onChange={e => setFile(e.target.files[0])} /> */}

                        <br />
                        {image && <img src={`http://localhost:5000/Image/${image}`} alt="" width="800" height="" />}
                        
                    </div>

                    {/* <button className="btn btn-success" onClick={handleUpload}>Upload</button> */}
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
