
import {useRef, useState, useEffect} from "react"
import { useOnClickOutside } from "usehooks-ts"

function Menu(props){
    const ref = useRef(null)

    const handleClickOutside =() =>{
        console.log('clicked outside')

    }

    const handleClickInside =() =>{
        console.log('clicked inside')
        
    }

    useOnClickOutside(ref, handleClickOutside)

    componentDidMount(
        window.addEventListener('mousedown',props.onClickOutside)
    )

    conponentWillUnmount(
        window.removeEventListener('mousedown',props.onClickOutside)

    )

    return(
        <button
        ref={ref}
        onClick={handleClickInside}
        style={{ width: 200, height: 200, background: 'cyan'}}
        />
    )
}

export default Menu;
    

        
