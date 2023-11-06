const BASE_URL = 'http://{Network IP address}:4000'

export const API = BASE_URL + '/api/v1/'

export const endpoints = {
    posts: API + 'posts?_sort=desc',
    addPost: API + 'posts'
}