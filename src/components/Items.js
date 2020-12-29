import React from 'react';
import '../css/Items.css';

function Items({img}) {
    return (
        <div className="items">
            <div className="items__image">
                <img src={img}/>
            </div>
        </div>
    )
}

export default Items
