import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions/comments';
import '../styles/comment.scss';

const Comments = ({ currentPost }) => {
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();
    
console.log('currentPost ', currentPost);
    const generateRelatedComments = () => {
        const relatedComments = comments.filter( comment => comment.postId === currentPost);
       
        return (
            relatedComments.map( relatedComment => (
                <div key={relatedComment.id} className="comment">
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
