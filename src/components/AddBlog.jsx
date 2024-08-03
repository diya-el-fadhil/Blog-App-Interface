import React, { useState } from 'react';
import './AddBlog.css';

const AddBlog = () => {
    const [blogName, setBlogName] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ blogName, description, authorName });
    };

    return (
        <div className="add-blog-container">
            <h1>Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="blogName">Blog Name:</label>
                    <input
                        id="blogName"
                        type="text"
                        value={blogName}
                        onChange={(e) => setBlogName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="authorName">Author Name:</label>
                    <input
                        id="authorName"
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;