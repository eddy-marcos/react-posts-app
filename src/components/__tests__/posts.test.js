import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Posts from '../Posts';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([thunkMiddleware]);

afterEach( () => {
    cleanup();
});

test('post should contain data', () => {
    const initialState = {};
    const store = mockStore(initialState);

    render(<Provider store={store}>{<Posts />}</Provider>);

    const postElement = screen.getByTestId('posts');

    expect(postElement).toBeVisible();    
    expect(postElement).toBeValid();
    expect(postElement).toContainHTML('<div data-testid="posts" />');
    expect(postElement).toBeTruthy();
})

test('posts component matches snapshot', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const tree = renderer.create(<Provider store={store}>{<Posts />}</Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})