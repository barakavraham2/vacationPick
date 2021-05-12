import { useState } from 'react'
import { Form, Col, Button, Alert } from 'react-bootstrap'
import { setVacations } from '../services/vacationService'
import { deleteVacationFromDataBase } from '../services/vacationService'
function DeleteVacation(props) {

    const id = props.vacation

    const handleSubmit = async () => {
        try {
            const res = await deleteVacationFromDataBase({ id })
            if (res.status === 200) {
                props.setTrigger(false)
                window.location.reload(false)
            }
        }
        catch (ex) { }


    }

    return (props.trigger) ? (
        <div className="deleteVacationContiner">
            <div className="deleteVacation">
                <h4> בחרת למחוק את החופשה. אתה בטוח שאתה רוצה להמשיך?</h4>
                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Delete
  </Button>
                <Button variant="primary" type="button" onClick={() => props.setTrigger(false)}>
                    Cancel
  </Button>
            </div >
        </div>
    ) : ""
}

export default DeleteVacation

