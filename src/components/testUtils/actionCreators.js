import { testPostCall, testCommentCall } from "./testAPI"

// sub actions called when starting API call
export const testAPICallStarted = () => {
    return { type: "TESTAPI_STARTED"}
}

export const testAPICallSuccess = (response) => {
    return { type: "TESTAPI_SUCCESS", response}
}

export const testAPICallError = (error) => {
    return { type: "TESTAPI_ERROR", error}
}

// main action to trigger API call
export const testPostAction = () => {
    return function (dispatch) {
        dispatch(testAPICallStarted());
        return testPostCall()
            .then(response => dispatch(testAPICallSuccess(response)))
            .catch(error => dispatch(testAPICallError(error)));
    }
}

export const testCommentAction = () => {
    return function (dispatch) {
        dispatch(testAPICallStarted());
        return testCommentCall()
            .then(response => dispatch(testAPICallSuccess(response)))
            .catch(error => dispatch(testAPICallError(error)));
    }
}

