export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const requestPost = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
})
export const receivePost = ( subreddit , json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now
})
const fetchPosts = subreddit => dispatch => ({
    requestPosts(subreddit)})
    return fetch(`http://www.reddit.com/r/${subreddit.json}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit,json)))
