import React, { useEffect} from 'react'
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';

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
