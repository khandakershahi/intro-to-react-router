import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div style={{ border: "2px solid red" }}>
            <h4>{title}</h4>
            <Link to={`/posts/${id}`}>
                <button>Show details</button>
            </Link>
            <button onClick={handleNavigate}>Detials of: {id}</button>
        </div >
    );
};

export default Post;