import React from 'react';

import styles from './ItemSummary.module.css'

const ItemSummary = () =>{

    return (
        <React.Fragment >
            <section className={styles.summary}>
                <h2>Make Pancher, At Your Doorstep</h2>
                <p>
                    Choose your need from our wide range of services available for all kinds of panchers. 
                </p>
                <p>
                    All panchers are made by well qualified pancher maker a.k.a. Pappu.
                </p>
            </section>

        </React.Fragment>
    )
}

export default ItemSummary;