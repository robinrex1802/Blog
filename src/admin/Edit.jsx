import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Edit() {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quates: '',
    author: '',
    category: '',
    date: '',
    image: ''
  });
  const [error, setError] = useState(null); // State to store error messages

  useEffect(() => {
    // Fetch the blog details
    axios.get(`/api/blog/${id}/`) // Ensure the endpoint starts with a leading slash
      .then(response => {
        setFormData(response.data);
        setError(null); // Clear any previous errors
      })
      .catch(error => {
        console.error("There was an error fetching the blog details!", error);
        setError('Failed to fetch blog details. Please check if the blog exists or the API endpoint is correct.');
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
    updatedData.append('quates', formData.quates);
    updatedData.append('author', formData.author);
    if (formData.image) {
      updatedData.append('image', formData.image);
    }

    axios.put(`http://localhost:3000/api/blog/${id}/`, updatedData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        Swal.fire('Success!', 'Category updated successfully.', 'success');
        navigate('/List'); // Redirect to the list page after successful update
      })
      .catch(error => {
        console.error("There was an error updating the category!", error);
        Swal.fire('Error!', 'Failed to update category.', 'error');
      });
    };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Title</label>
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
          <label htmlFor="quates" className="form-label">Quotes</label>
          <input
            type="text"
            className="form-control"
            id="quates"
            name="quates"
            value={formData.quates}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'green', color: 'black' }} className="btn btn-primary">Update Blog</button>
      </form>
    </div>
  );
}

export default Edit;
