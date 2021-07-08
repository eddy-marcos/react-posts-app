import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendPosts } from '../actions/posts';
import '../styles/form.scss';

const NewPost = ( {id} ) => {
    const [newItem, setNewItem] = useState(false);
    const [formValues, setFormValues] = useState({postId: 0, id: 0, name: '', email: '', body: ''});
    const dispatch = useDispatch();
    const commentsLenght = useSelector((state) => state.comments.length);

    
    const handleSubmit = (e) => {
        e.preventDefault();
                       
        dispatch(sendPosts(formValues));
        setFormValues({postId: 0, id: 0, name: '', email: '', body: ''});
    }

    return (
       <>
        <button className="comment-button add" 
                onClick={() => setNewItem(true)}>Add Comment</button>

        {
            newItem && 

            <form onSubmit={handleSubmit}>
             <div>
                 <label htmlFor="title">Title: </label> <br />
                 <input type="text" name="title" id="title" autoComplete="off" required
                     value={formValues.name}
                     onChange={(e) => setFormValues({ ...formValues, postId: id, id: commentsLenght + 1, name: e.target.value })}
                 />
             </div>
             
             <div>
                 <label htmlFor="email">Email: </label> <br />
                 <input type="email" name="email" id="email" autoComplete="off" required
                     value={formValues.email}
                     onChange={(e) => setFormValues({ ...formValues, postId: id, id: commentsLenght + 1, email: e.target.value })}
                 />
             </div>
            
             <div>
                 <label htmlFor="description">Description: </label> <br />
                 <textarea name="description" id="description" autoComplete="off" required rows="3"
                     value={formValues.body} 
                     onChange={(e) => setFormValues({ ...formValues, postId: id, id: commentsLenght + 1, body: e.target.value })}
                 ></textarea>
             </div>
             <div>
                 <button type="submit">Submit</button>
             </div>
         </form>
        }
       </>
    )
}

export default NewPost
