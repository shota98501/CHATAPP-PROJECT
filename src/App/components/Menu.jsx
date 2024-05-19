import React from "react";
import {useRef} from 'react'
import { useOnClickOutside } from "usehooks-ts";

function UseMenu(props){
    const onClickOutside=props.onClickOutside 
    

        if(props.ref && !props.ref.contains){
            if(props.onClose){
                props.onClose()
            }
        }

        componetDidMouunt(){
            window.addEventListener('mousedown', this.onClickOutside);
        }

        componetWillMouunt(){
            window.removeEventListener('mousedown', this.onClickOutside);
        }

        return
        

        







        
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

