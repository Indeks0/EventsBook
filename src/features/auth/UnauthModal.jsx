import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Divider, Modal } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";

export default function UnauthModal({history}){
    const[open, setOpen] = useState(true);
    const dispatch = useDispatch();

    function handleClose(){
        setOpen(false);
        history.goBack()
    }

    return (
        <Modal clearing open={open} size="mini" onClose={handleClose}>
            <Modal.Header content="You need to sign in in order to get access" />
            <Modal.Content clearing>
                <p>
                    Please login or register to see this content
                </p>

                    <Button fluid color="teal" content="Login" onClick={
                        () => dispatch(openModal({modalType: "LoginForm"}))
                    } />
                    <Button fluid color="blue" content="Register" onClick={
                        () => dispatch(openModal({modalType: "RegisterForm"}))
                    } />
            </Modal.Content>
        </Modal>
    )
}

