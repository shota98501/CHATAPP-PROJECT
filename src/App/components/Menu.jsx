import React from "react";
import {useRef} from 'react'
import { useOnClickOutside } from "usehooks-ts";

function UseMenu(props){
    const onClickOutside=props.onClickOutside 
    if(onClickOutside){
        
    }
}

    const handleClickOutside =() => {
    // your custom logic here
    console.log('clicked outside')
}

    const handleClickInside = () =>{
        // your custom logic here
        console.log('clicked inside')    
    }

    useOnClickOutside(ref, handleClickOutside)

    return



export default UseMenu;

