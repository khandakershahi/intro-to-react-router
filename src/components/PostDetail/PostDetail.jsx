import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();

    return (
        <div>
            <h2 className='text-2xl font-bold'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;