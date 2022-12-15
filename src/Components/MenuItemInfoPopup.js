import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { getIngredientByID } from './services/MenuServices';

export default function MenuItemInfoPopup(props) {
    const dish = props.dish;
    console.log(dish);
    const [ingredients, setIngredients] = useState([]);

    useEffect (() => {
        if (props.isOpen && ingredients.length === 0 ) {
            const promises = dish.ingredients.map(async (ingredient) => {
                return await getIngredientByID(ingredient.ingredientId);
            });
            Promise.all(promises).then((results) => {
                setIngredients(results);
                console.log(results);
            });
        }
    }, [props.dish, props.isOpen]);


    return (
        <Popup open={props.isOpen} onClose={() => { props.setOpen(false) }} modal>
            <div className="popup-container">

                <div className="menu-item-info-popup-container">
                    <div className="menu-item-info-popup-close-btn-container">
                        <button className="menu-item-info-popup-close-btn" onClick={() => { props.setOpen(false) }}>X</button>
                    </div>
                    <div className="menu-item-info-popup">
                        <div className="menu-item-info-popup-image-container">
                            <img src={dish.bannerUrl} alt="A short presentation of a menu item dish." />
                        </div>
                        <div className="menu-item-info-popup-details-container">
                            <div className="menu-item-info-popup-title">
                                {dish.name}
                            </div>
                            <div className="menu-item-info-popup-description">
                                {dish.longDescription}

                                <div className="menu-item-info-popup-ingredients">
                                    <div className="menu-item-info-popup-ingredients-title">
                                        Ingredienten:
                                    </div>
                                    <div className="menu-item-info-popup-ingredients-list">
                                        {ingredients.map((ingredient) => {
                                            return (
                                                <li className="menu-item-info-popup-ingredients-list-item">
                                                    {ingredient.name}
                                                </li>
                                            );
                                        }
                                        )}
                                        
                                    </div>
                                </div>
                            </div>



                            <div className="spacer"></div>

                            <div className="menu-item-info-popup-allergens">
                                <div className="menu-item-info-popup-allergens-title">
                                    Allergenen:
                                    </div>
                                <div className="menu-item-info-popup-allergens-list">
                                    {
                                        ingredients.map((ingredient) => {

                                            if (ingredient.allergens === "Geen" || ingredient.allergens == undefined) {
                                                return null;
                                            }
                                            
                                            return (
                                                <li className="menu-item-info-popup-allergens-list-item">
                                                    {ingredient.allergens}
                                                </li>
                                            );
                                        })
                                    }
                                        {
                                            ingredients.length === 0 && 
                                            <li className="menu-item-info-popup-allergens-list-item">Geen.</li>
                                        }
                                </div>
                                </div>

                            <div className="menu-item-info-popup-price">
                                {Intl.NumberFormat("nl-NL", {
                                    style: "currency",
                                    currency: "EUR",
                                }).format(dish.price)}
                            </div>
                            <button className="menu-item-info-popup-add-btn" onClick={() => { props.addToOrder(); props.setOpen(false) }}>Voeg to aan bestelling!</button>
                        </div>

                    </div>


                </div>

            </div>

        </Popup>
    );
}