import axios from 'axios'

const apiEndPoint = 'https://glacial-taiga-22070.herokuapp.com/api/like/addlike'
const apiFind = 'https://glacial-taiga-22070.herokuapp.com/api/like/'
export async function addLike(like, user) {
    console.log(like, user)
    return axios.post(apiEndPoint, {
        userId: user,
        vacationId: like
    })
}

export async function findLikes(id) {
    const howmany = await axios.get(apiFind + id)
    return howmany.data

}

export async function findLikesByUser(id) {
    const howmany = await axios.get(apiFind + 'byuser/' + id)
    return howmany.data

}
