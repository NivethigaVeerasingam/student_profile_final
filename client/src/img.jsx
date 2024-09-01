import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append('file', file);

    axios.post('http://localhost:5000/upload', formdata)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // Check if the file is defined before making the request
    if (file) {
      const formdata = new FormData();
      formdata.append('file', file);

      axios.get('http://localhost:5000/getImage', formdata)
        .then(res => setImage(res.data[0].image))
        .catch(err => console.log(err));
    }
  }, [file]); // Add file as a dependency to run useEffect when file changes

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <br />
       <img src={`http://localhost:5000/Image/${image}`} alt="" width="800" height=""/>
    </div>
  );
}

export default App;
