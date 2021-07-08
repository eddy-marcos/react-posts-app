import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';
import Post from './Post';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    

    useEffect(() => {
       
        dispatch(getPosts());

    }, [dispatch])


    return (
        <div>
        {
            posts && posts.map( (post) => (
                <Post 
                    key={post.id} 
                    post={post} 
                    dataKey={post.id}
                />
            ))
        }
        </div>
    )
}

export default Posts
