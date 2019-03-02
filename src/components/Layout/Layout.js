import React from 'react';
import Aux from '../../hoc/Aux';
import Logo from '../Logo/Logo';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <header className="ui one column center aligned page grid">
            <Logo />
        </header>
        <main className={styles.Layout}>
            {props.children}
        </main>
    </Aux>
);

export default layout;