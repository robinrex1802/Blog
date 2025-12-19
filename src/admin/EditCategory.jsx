import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    image: null,
  });

  useEffect(() => {
    // Fetch the category data by ID
    axios.get(`http://localhost:3000/api/category/${id}/`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the category data!", error);
        Swal.fire('Error!', 'Failed to fetch category data.', 'error');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append('name', formData.name);
    updatedData.append('description', formData.description);
    updatedData.append('date', formData.date);
    if (formData.image) {
      updatedData.append('image', formData.image);
    }

    axios.put(`http://localhost:3000/api/category/${id}/`, updatedData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        Swal.fire('Success!', 'Category updated successfully.', 'success');
        navigate('/bloglist');
      })
      .catch(error => {
        console.error("There was an error updating the category!", error);
        Swal.fire('Error!', 'Failed to update category.', 'error');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn" style={{ backgroundColor: 'green', color: 'black' }}>Update</button>
        {/* Added inline styles for yellow background and black text */}
      </form> 
    </div>
   
  );
}

export default EditCategory;