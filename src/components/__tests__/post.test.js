import fetchMock from 'fetch-mock';
import { postData } from '../testUtils/testData';
import { testPostCall } from '../testUtils/testAPI';
import { testPostAction, testAPICallStarted, testAPICallSuccess } from '../testUtils/actionCreators';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';


const mockStore = configureStore([thunkMiddleware]);


test('check post API call', () => {
    fetchMock.get('*', postData);

    const apiResult = testPostCall().then(response => {
        expect(response).toBeTruthy();
        expect(response).toHaveProperty('userId');
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('title');
        expect(response).toHaveProperty('body');

    })

    fetchMock.restore();
    return apiResult;

});


test('check Api Action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    fetchMock.get('*', postData);

    const actionResult = store.dispatch(testPostAction())
        .then(() => {
            const actions = store.getActions();

            expect(actions.length).toBe(2);
            expect(actions[0]).toEqual(testAPICallStarted());
            expect(actions[1]).toEqual(testAPICallSuccess(postData));
        });

        fetchMock.restore();
        return actionResult;
});
