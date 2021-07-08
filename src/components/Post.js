import React from 'react';

const Post = ({ post, dataKey }) => {
    const { userId: bodyId, id, title, body: postBody } = post;

    return (
        <>
            <div className="post">
                <h3>{title}</h3>
                <p>{postBody}</p>
            </div>
        </>
    )
}

export default Post
