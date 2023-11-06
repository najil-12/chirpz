const BASE_URL = 'http://192.168.1.15:4000'

export const API = BASE_URL + '/api/v1/'

export const endpoints = {
    posts: API + 'posts?_sort=createdAt&_order=desc',// For now I added static params only
    addPost: API + 'posts'
}