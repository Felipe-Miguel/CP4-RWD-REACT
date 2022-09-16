import Lamp from '../img/Apagada.png'
import LampA from '../img/Acesa.png'
import '../css/Lampada.css'
import React, { useEffect, useState } from 'react';
export default function Lampada() {

    const [lampada, setLampada] = useState(false)
    useEffect(() => {
        lampada ? document.querySelector('#lampada').src = LampA : document.querySelector('#lampada').src = Lamp
    })

    return (
        
        <>
        <div className='centralizarLamp'>
            <div className='containerLamp'>
            <img src={Lamp} id='lampada' name="lamp" /> <br />
                <button id="onoff" onClick={() => setLampada(!lampada)}>{lampada ? 'apagar lampada' : 'acender lampada'}</button>
            </div>
        </div>
        </>
    )
}