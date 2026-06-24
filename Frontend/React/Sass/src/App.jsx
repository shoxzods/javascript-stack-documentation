// ------------------------- React Portals --------------------------------------------- //

/*
    react portals запускает компонент вне root мы указываем где отобразить через docuement.body

    Portals - создается через createProtals.
*/

import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({children , status}) {
    return createPortal(
        <div style={{border:"1px solid black" , height:"200px" , width:"200px" ,  display: status ? "block" : "none" , position:"fixed" , top:"50%" , left:"50%"}}>
            {children}
        </div>,
        document.body
    )
}

export default function App() {
    const [ isStatus , setStatus ] = useState(false);
    return (
        <>
            <button onClick={() => {
                setStatus(true)
            }}>open</button>
                <Modal status={isStatus} changeStatus={setStatus}>
                    <button onClick={() => {
                        setStatus(false)
                    }}>close</button>
                </Modal>
        </>
    )
}