// import axios from 'axios';
// import React, { useState } from 'react'
// import axiosInstance from '../../Helpers/axiosInstance';

// function UploadImg() {

//     const [image, setImage] = useState('');
//     function handleUpload(e){
//         const file = e.target.files[0];
//         console.log(file);
//         setImage(file)
//     }

//     function handleSubmit(){
//         const formData = new FormData()
//         formData.append('image', image)
//         axiosInstance.post('/user', formData).then(
//             (response) => {
//                 console.log(response.data)
//             }
//         )
//     }
//   return (
//     <div>
//       <div>
//         <input type="file" id="file" name="file" onChange={handleUpload}/>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   )
// }

// export default UploadImg
