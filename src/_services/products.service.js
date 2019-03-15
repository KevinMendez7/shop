import { handleResponse } from '../util/handleResponse'

export const getAllProducts = (page) => {

    const requestOptions = {
        method : 'GET',
        headers : { 'Content-Type' : 'application/json' }
    }

    return fetch(`https://67936a18.ngrok.io/api/products`, requestOptions).then(handleResponse)
    // return fetch(`https://oobie92.com/api/products?page=${page}`, requestOptions).then(handleResponse)
    // return fetch(`https://backendapi.turing.com/products?page=${page}`, requestOptions).then(handleResponse)
}

export const getProductById = id => {
    const requestOptions = {
        method : 'GET',
        headers : {"Content-Type" : "application/json"}
    }

    return fetch(`https://67936a18.ngrok.io/api/products/${id}`, requestOptions).then(handleResponse)

}

export const getAttributes = id => {

    const requestOptions = {
        method : 'GET',
        headers : {"Content-Type" : "application/json"}
    }

    return fetch(`https://67936a18.ngrok.io/api/attributes/idProduct/${id}`, requestOptions).then(handleResponse)

}