import React from "react";

function UseMenu(props){
    const onClickOutside=props.onClickOutside 
    

        if(props.ref && !props.ref.contains){
            if(props.onClose){
                props.onClose()
            }
        }

        componetDidMouunt();{
            window.addEventListener('mousedown', this.onClickOutside);
        }

        componetWillUnmouunt();{
            window.removeEventListener('mousedown', this.onClickOutside);
        }

        const store = props;

        const user = store.getCurrentUser();

        return(
            <div className="user-menu" ref={(ref) => props.ref = ref}>
                 <div>
                    <h2>My menu</h2>
                    <ul className="menu">
                        <li>
                            <button OnClick={() =>{
                            if(props.onClose){
                                props.onClose();
                            }
                            store.signOut();


                            }}type="button">Sign Out</button></li>
                    </ul>

                </div>

             
            </div>
        )
    
        
            
        }
    
export default UseMenu;

