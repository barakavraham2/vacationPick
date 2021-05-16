import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Icon from 'awesome-react-icons'
import { Button } from 'react-bootstrap'
import { addLike, findLikes } from '../services/LikeService'
import EditVacation from './EditVacation'
import DeleteVacation from './DeleteVacation'


function VacationCard({ vacation, user, userRole }) {
    const [numberOfLikes, setNumberOfLikes] = useState()
    const [numOfLikes, setNumOfLikes] = useState()
    const [likeButton, setLikeButton] = useState('LikeVacationButton')
    const [edit, setEdit] = useState(false)
    const [deleteVacation, setDeleteVacation] = useState(false)
    useEffect(() => {
        try {
            async function likes() {
                const likes = await findLikes(vacation.id)
                const found = (element) => element.user === user;
                const findIfLiked = likes.some(found)

                if (findIfLiked) {
                    setLikeButton('LikeVacationButtonAfterClicked')
                }
                setNumOfLikes(likes.length)
            }
            likes()
        }
        catch (err) { }
    }, [])

    async function handleLike(a, b) {
        const res = await addLike(a, b)
        if (res.data === 'like added') {
            setNumOfLikes(numOfLikes + 1)
            setLikeButton('LikeVacationButtonAfterClicked')
        }
        if (res.data === 'like deleted') {
            setNumOfLikes(numOfLikes - 1)
            setLikeButton('LikeVacationButton')
        }

    }



    return (
        <Card>


            <Card.Body className="cardBody">
                <Card.Title>{vacation.destination}</Card.Title>
                <Card.Img src={vacation.img} className="cardImg" />
                <Card.Text>
                    {vacation.description}
                </Card.Text>
                <Card.Text>
                    start at:  {vacation.startAt}
                </Card.Text>
                <Card.Text>
                    end at:  {vacation.endAt}
                </Card.Text>
                <Card.Text>
                    ${vacation.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <button className={likeButton} color="green" onClick={() => handleLike(vacation.id, user)}><Icon name="heart" className="LikeIcon" /></button>
                <small className="text-muted">{numOfLikes}</small>
                {userRole === 1 &&
                    <>
                        <button className="button-card" ><Icon name="trash" className="LikeIcon" onClick={() => setDeleteVacation(true)} /></button>
                        <button className="button-card"><Icon name="edit-pencil-simple" className="LikeIcon" onClick={() => setEdit(true)} /></button>
                        <EditVacation trigger={edit} setTrigger={setEdit} vacation={vacation} />
                        <DeleteVacation trigger={deleteVacation} setTrigger={setDeleteVacation} vacation={vacation.id} />
                    </>
                }
            </Card.Footer>
        </Card>
    )

}

export default VacationCard

