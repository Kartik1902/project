import React from 'react';
import HeaderButton from  './HeaderButton';

import tyresImage from '../../assets/bike tyres_0.jpg';
import styles from './Header.module.css'

const Header = props =>{
    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1 className={styles.text}>PappuPanchar</h1>
                <HeaderButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={tyresImage} alt="Pancher" />
            </div>
        </React.Fragment>

    );

};
export default Header;