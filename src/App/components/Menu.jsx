
import {useRef} from "useRef"
import { useOnClickOutside } from "usehooks-ts"

function Component(){
    const ref = useRef(null)

    const handleClickOutside =() =>{
        console.log('clicked outside')

    }

    const handleClickInside =() =>{
        console.log('clicked inside')
        
    }

    useOnClickOutside(ref, handleClickOutside)

    return(
        <button
        ref={ref}
        onClick={handleClickInside}
        style={{ width: 200, height: 200, background: 'cyan'}}
        />
    )
}

    

        
