import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Post from '../Post';

afterEach( () => {
    cleanup();
});

test('post should contain data', () => {
   
    const post = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
     }
    
    render(<Post post={post}/>);

    const postElement = screen.getByTestId('post-element');

    expect(postElement).toBeVisible();    
    expect(postElement).toBeValid();
    expect(postElement).toContainHTML('<div></div>');
    expect(postElement).toBeTruthy();
})

test('post component matches snapshot', () => {
    const post = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
     }

     const tree = renderer.create(<Post post={post}/>).toJSON();
     expect(tree).toMatchSnapshot();
})