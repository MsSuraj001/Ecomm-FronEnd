const URL = `https://api.cloudinary.com/v1_1/djq0tevyv/auto/upload`;

const uploadFile = async (file) => {
    const formData = new FormData()

    formData.append("file", file);
    formData.append("upload_preset", "project_one")

    const response = await fetch(URL, {
        method: "POST",
        body : formData,
    }) 

     const responseData = await response.json();

     return responseData;
}

export default uploadFile;