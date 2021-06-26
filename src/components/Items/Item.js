import React from 'react';
import AvailableItem from './AvailableItem';
import ItemSummary from "./ItemSummary";

const Item =()=> {

    return(
        <React.Fragment>
            <ItemSummary />
            <AvailableItem />
        </React.Fragment>
    );
};

export default Item;