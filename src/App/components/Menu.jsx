
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
        window.addEventListener('mousedown', props.onClickOutside)
    )

    conponentWillUnmount(
        window.removeEventListener('mousedown', props.onClickOutside)

    )

    const {store} = this.props;
    const user = store.getCurrentUser();

    return(
    <div className="user-menu" ref={(ref) => this.ref = ref}>
        {user ? <div>

            <h2>My menu</h2>

            <ul className="menu">
                <li><button onClick={() =>{
                    if(props.onClose){
                        props.onClose();
                    }

                    store.signOut();
                } type="button"> Sign Out</button></li>
            </ul>
            


        </div> : null}
        
    </div>
    )

}

export default Menu;
    

        
