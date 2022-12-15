import React from 'react';
import Popup from 'reactjs-popup';

export default function MenuItemInfoPopup(props) {
    const dish = props.dish;
    console.log(dish);
    return (
        <Popup open={props.isOpen} onClose={()=> {props.setOpen(false)}} modal>
                <div className="modal">AAAA</div>
        </Popup>
    );
}