import React, { useState } from 'react';
import '../styles/post.scss';
import Comments from './Comments';

const Post = ({ post, dataKey }) => {
    const [currentPost, setcurrentPost] = useState(null);
    const { userId: bodyId, id, title, body: postBody } = post;

    const renderComments = () => {
        setcurrentPost(bodyId);
    }

    return (
        <>
            <div className="post">
                <h3>{title}</h3>
                <p>{postBody}</p>
                <button className="comment-button" onClick={renderComments}>Show Comments</button>

                <div>
                    {currentPost ? <Comments currentPost={currentPost}/> : ''}
                 </div>
            </div>
        </>
    )
}

export default Post
