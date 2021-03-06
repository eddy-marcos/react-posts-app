import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions/comments';
import '../styles/comment.scss';

/**
 * Returns related comments for each post
 * @param {number} currentPost - current post id
 * @returns {HTMLElement} 
 */
const Comments = ({ currentPost }) => {
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();
    
    /** function in charge of generating related posts. */
    const generateRelatedComments = () => {
        const relatedComments = comments.filter( comment => comment.postId === currentPost);
       
        return (
            relatedComments.map( (relatedComment, index) => (
                <div key={index} className="comment">
                    <div className="comment-name">{relatedComment.name}</div>
                    <div className="comment-body">{relatedComment.body}</div>
                    <div className="comment-email">{relatedComment.email}</div>
                </div>
            ))
        )
    }

    useEffect(() => {
       
        dispatch(getComments());

    }, [dispatch])


    return (
        <div>
            {generateRelatedComments()}
        </div>
    )
}

export default Comments
