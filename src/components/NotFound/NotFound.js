import React from 'react';
import styles from './NotFound.module.css';
import Header from '../UI/Header/Header';
import img from '../../assets/panda.png';
import {Link} from 'react-router-dom';

const notFound = () => (
    <div className={styles.NotFound}>
        <Header type="h1" text="404: page not found, something went wrong :-("/>
        <img src={img} alt="404: Sad panda" />
        <Link to='/'>Let me take you home</Link>
    </div>
);

export default notFound;