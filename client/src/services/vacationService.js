import axios from 'axios'

const apiEndPoint = 'https://glacial-taiga-22070.herokuapp.com/api/vacation'
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    }
};
export async function getVacations() {

    return axios.get(apiEndPoint + '/all')
}

export async function getOneVacation(id) {

    const res = await axios.get(apiEndPoint + `/${id}`)
    return res.data
}
export async function getLikesCountForReports() {

    return axios.post('https://glacial-taiga-22070.herokuapp.com/api/vacation/count')
}

export async function setVacations(vacation) {

    return axios.post(apiEndPoint + '/addvacation', {
        destination: vacation.destination,
        description: vacation.description,
        startAt: vacation.startAt,
        endAt: vacation.endAt,
        price: vacation.price,
        img: vacation.img
    }, axiosConfig
    )
}

export async function editVacations(vacation) {
    return axios.put(apiEndPoint + `/update/${vacation.id}`, {
        destination: vacation.destination,
        description: vacation.description,
        startAt: vacation.startAt,
        endAt: vacation.endAt,
        price: vacation.price,
        img: vacation.img
    }, axiosConfig
    )
}

export async function deleteVacationFromDataBase(vacation) {
    return axios.delete(apiEndPoint + `/delete/${vacation.id}`, axiosConfig
    )
}