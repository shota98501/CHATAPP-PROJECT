import React from "react";
import { useState } from "react";

function UserForm(props){

    const [form, setForm] =useState({
        message: null,
        islogin: true,
        user:{
            name: '',
            email:'',
            password: ''
        }
    })
    
    const onSubmit = props.onSubmit;
    const onTextFieldChange = props.onTextFieldChange
    const onClickOutside = props.onClickOutside;

        if(props.ref && ! props.ref.contains){
            if(props.onClose){
                props.onClose();
            }
        }

        componentDidMount(){
            window.addEventListner('mousedown', props.onClickOutside);
        }
        componentWillUnount(){
            window.addEventListner('mousedown', props.onClickOutside);
        }

        onSubmint(event){
            const {user, isLogin} = useState;

        }   


    }

export default UserForm;