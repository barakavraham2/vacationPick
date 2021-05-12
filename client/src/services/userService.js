import axios from 'axios'

const apiEndPoint = 'http://localhost:3002/api/users/adduser'
const apiLogin = 'http://localhost:3002/auth/login'
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    }
};

export async function registran(user) {

    return axios.post(apiEndPoint, {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phoneNum
    }, axiosConfig
    )
}

export async function LoginUser(user) {

    return axios.post(apiLogin, {
        email: user.email,
        password: user.password,
    }, axiosConfig
    )
}

export function LogOut(user) {
    localStorage.removeItem('token')
}

