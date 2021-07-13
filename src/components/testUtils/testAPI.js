export const testPostCall = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
    });
}
export const testCommentCall = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            return response.json();
    });
}