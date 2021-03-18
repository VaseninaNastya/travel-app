import React from 'react';
import s from './Footer.module.scss';

import git from './img/git.jpg';
import rs from './img/logo.png';

const Footer = () => (
    <footer className={s.footer}>

        <div className={s.iconGit}>
            <a href="https://github.com/nikolai-minkevich" target="_blank" rel="noreferrer">
                <img src={git} alt="git hub" />
                <p>Nikolai</p>
            </a>
            <a href="https://github.com/VaseninaNastya" target="_blank" rel="noreferrer">
                <img src={git} alt="git hub" />
                <p>Nastya</p>
            </a>
        </div>
    </footer>
);

export default Footer;