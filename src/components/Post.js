import React, { useState } from 'react';
import '../styles/post.scss';
import Comments from './Comments';
import NewPost from './NewPost';

/**
 * Returns a new post
 * @param {Object} post - actual post data
 * @returns {HTMLElement} post title, post body
 */
const Post = ({ post }) => {
    const [currentPost, setcurrentPost] = useState(null);
    const [postsWithComments, setPostsWithComments] = useState({ comm: 0});
    const [showNewCommentsButton, setShowNewCommentsButton] = useState(false);
    const { id, title, body: postBody } = post;

    /** sets current post id, handles new comments visibility */
    const renderComments = () => {
        setcurrentPost(id);
        setPostsWithComments({ ...postsWithComments, comm: id });
        setShowNewCommentsButton(true);
    }

    return (
        <>
            <div className="post" data-testid = "post-element">
                <h3>{title}</h3>
                <p>{postBody}</p>
                <button className="comment-button" onClick={renderComments}>Show Comments</button>

                <div>
                    {
                    postsWithComments ? 
                        <>
                            <Comments currentPost={currentPost}/> 
                            <NewPost id={id} showNewCommentsButton={showNewCommentsButton}/>
                        </>
                    : '' }

                 </div>
            </div>
        </>
    )
}

export default Post
