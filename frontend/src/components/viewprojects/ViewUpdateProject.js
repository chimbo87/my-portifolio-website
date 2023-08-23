import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewUpdateProject = () => {
  const [projectData, setProjectData] = useState({
    name: '',
    title: '',
    githubLink: '',
    siteLink: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e,_id) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/projects${_id}`, projectData); // Adjust the API endpoint
      console.log('Data updated successfully');
      // You can perform any additional actions here after the update
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h1>Update Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={projectData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={projectData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="githublink"
            name="githubLink"
            value={projectData.githubLink}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="siteLink"
            name="siteLink"
            value={projectData.siteLink}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={projectData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ViewUpdateProject ;
