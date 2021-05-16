import axios from 'axios'

const apiEndPoint = 'https://glacial-taiga-22070.herokuapp.com/api/users/adduser'
const apiLogin = 'https://glacial-taiga-22070.herokuapp.com/auth/login'
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

