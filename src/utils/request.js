import axios from 'axios'

export const request = axios.create({
    baseURL: 'http://localhost:8001/',
    timeout: 1000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
})

