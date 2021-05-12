import axios from 'axios'

const apiEndPoint = 'http://localhost:3002/api/like/addlike'
const apiFind = 'http://localhost:3002/api/like/'
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
