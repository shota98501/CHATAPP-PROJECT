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

}

export default UserForm;