import fetchMock from 'fetch-mock';
import { commentData } from '../testUtils/testData';
import { testCommentCall } from '../testUtils/testAPI';
import { testCommentAction, testAPICallStarted, testAPICallSuccess } from '../testUtils/actionCreators';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';


const mockStore = configureStore([thunkMiddleware]);


test('check comment API call', () => {
    fetchMock.get('*', commentData);

    const apiResult = testCommentCall().then(response => {
        expect(response).toBeTruthy();
        expect(response).toHaveProperty('postId');
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('name');
        expect(response).toHaveProperty('email');
        expect(response).toHaveProperty('body');

    })

    fetchMock.restore();
    return apiResult;

});


test('check Api Action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    fetchMock.get('*', commentData);

    const actionResult = store.dispatch(testCommentAction())
        .then(() => {
            const actions = store.getActions();

            expect(actions.length).toBe(2);
            expect(actions[0]).toEqual(testAPICallStarted());
            expect(actions[1]).toEqual(testAPICallSuccess(commentData));
        });

        fetchMock.restore();
        return actionResult;
});
