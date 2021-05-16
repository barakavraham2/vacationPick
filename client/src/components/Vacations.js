import React, { useState, useEffect } from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'
import { getVacations, getOneVacation } from '../services/vacationService'
import jwt_decode from 'jwt-decode'
import VacationCard from './VacationCard'
import Addvacation from './Addvacation'
import Icon from 'awesome-react-icons'
import { findLikes, findLikesByUser } from '../services/LikeService'

export default function Vacations(props) {
    const [vacations, setVacations] = useState([])
    const [user, setUser] = useState('')
    const [openAdd, setOpenAdd] = useState(false)
    const [destination, setDestination] = useState()
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [serch, setSerchResult] = useState()
    const [IfLiked, SetIfLiked] = useState([])
    const [Liked, setLiked] = useState([])
    useEffect(() => {
        async function fetcData() {
            const res = await getVacations()
            console.log(props.user.id)
            const likes = await findLikesByUser(props.user.id)
            console.log(res.data)
            setVacations(res.data)
            SetIfLiked(likes)
            likes.forEach(async item => {

                const r = await getOneVacation(item.vacation)
                setLiked(...r)
                console.log(Liked)
            })
        }
        fetcData()


        try {
            const jwt = localStorage.getItem('token')
            const decode = jwt_decode(jwt)
            setUser(decode)
            /*           async function findLikesr(vacationId) {
                          const likes = await findLikes(vacationId)
                          const found = (element) => element.user === user.id;
                          const findIfLiked = likes.some(found)
                          SetIfLiked(findIfLiked)
                      } */
        }
        catch (err) { }

    }, [])



    function hendleSerch() {
        vacations.forEach(item => {
            if (item.destination === destination && item.startAt === start && item.endAt === end) {
                setVacations([item])

            }
        })
    }

    async function handleReturn() {
        const res = await getVacations()
        setVacations(res.data)
    }
    return (
        <div>
            <div className="input-group">
                <div className="serachForm">
                    <input type="text" placeholder="Search" id="form1" className="form-control" onChange={(e) => setDestination(e.target.value)} />
                    <input type="date" id="form1" className="form-control" onChange={(e) => setStart(e.target.value)} />
                    <input type="date" id="form1" className="form-control" onChange={(e) => setEnd(e.target.value)} />
                    <Button type="button" id="searchButtens" className="btn btn-primary" onClick={() => hendleSerch()}><Icon name="search" /></Button>
                    <Button type="button" id="searchButtens" className="btn btn-primary" onClick={() => handleReturn()}><Icon name="x" /></Button>
                </div>
            </div>
            <CardDeck className="vacationConitanier">
                {vacations.map((vacation) => {
                    return <VacationCard key={vacation.id} vacation={vacation} user={user.id} userRole={user.role} />
                })}
            </CardDeck>
            {user.role === 1 &&
                <>
                    <Addvacation trigger={openAdd} setTrigger={setOpenAdd} />
                    <Button variant="success" type="button" className="addVcButton rounded-circle" onClick={() => setOpenAdd(true)}>+</Button>
                </>
            }
        </div>
    )
}
