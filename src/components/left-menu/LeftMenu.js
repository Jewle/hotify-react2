import React from 'react';
import './left-menu.scss'


import LeftMenuBottom from "../left-menu-bottom/LeftMenuBottom";
import {Link} from "react-router-dom";

export  default function LeftMenu() {

    return (
        <div className="left-menu">
            <div className="logo">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="7.9 3.9 1118.2 335.2">
                    <path
                        d="M 8 171 c 0 92 76 168 168 168 s 168 -76 169 -167 S 268 4 176 4 S 8 79 8 171 z m 230 78 c -39 -24 -89 -30 -147 -17 c -14 2 46 -14 -4 -20 c 64 -15 118 -8 162 19 c -31 -8 -27 5 -11 18 z m 17 -45 c -45 -28 -114 -36 -167 -20 c -17 5 -26 -25 -7 -25 c 77 -17 136 -9 188 23 c 14 9 0 31 -14 22 z m -175 -71 c -17 6 54 -24 -9 -30 c 59 -18 159 -15 221 22 c -34 -7 -53 -8 -17 27 c -57 -34 -144 -35 -195 -19 z m 379 91 z m 95 -77 z m 30 78 z m 68 -34 c 0 34 27 60 62 60 s 62 -27 62 -61 s -26 -60 -61 -60 s -63 27 -63 61 z m 30 -1 c 0 -20 13 -34 32 -34 s 33 15 33 35 s -13 34 -32 34 s -33 -15 -33 -35 z m 140 -58 v -29 c 0 -1 0 -2 -1 -2 h -26 c -1 0 -2 1 -2 2 v 29 h -13 c -1 0 -2 1 -2 2 v 22 c 0 1 1 2 2 2 h 13 v 58 c 0 23 11 35 34 35 c 9 0 18 -2 25 -6 c 1 0 1 -1 1 -2 v -21 c 0 -1 0 -2 -1 -2 h -2 c -5 3 -11 4 -16 4 c -8 0 -12 -4 -12 -12 v -54 h 30 c 1 0 2 -1 2 -2 v -22 c 0 -1 -1 -2 -2 -2 h -30 z m 129 -3 c 0 -11 4 -15 13 -15 c 5 0 10 0 15 2 h 1 s 1 -1 1 -2 V 93 c 0 -1 0 -2 -1 -2 c -5 -2 -12 -3 -22 -3 c -24 0 -36 14 -36 39 v 5 h -13 c -1 0 -2 1 -2 2 v 22 c 0 1 1 2 2 2 h 13 v 89 c 0 1 1 2 2 2 h 26 c 1 0 1 -1 1 -2 v -89 h 25 l 37 89 c -4 9 -8 11 -14 11 c -5 0 -10 -1 -15 -4 h -1 l -1 1 l -9 19 c 0 1 0 3 1 3 c 9 5 17 7 27 7 c 19 0 30 -9 39 -33 l 45 -116 v -2 c 0 -1 -1 -1 -2 -1 h -27 c -1 0 -1 1 -1 2 l -28 78 l -30 -78 c 0 -1 -1 -2 -2 -2 h -44 v -3 z m -83 3 c -1 0 -2 1 -2 2 v 113 c 0 1 1 2 2 2 h 26 c 1 0 1 -1 1 -2 V 134 c 0 -1 0 -2 -1 -2 h -26 z m -6 -33 c 0 10 9 19 19 19 s 18 -9 18 -19 s -8 -18 -18 -18 s -19 8 -19 18 z m 245 69 c 10 0 19 -8 19 -18 s -9 -18 -19 -18 s -18 8 -18 18 s 8 18 18 18 z m 0 -34 c 9 0 17 7 17 16 s -8 16 -17 16 s -16 -7 -16 -16 s 7 -16 16 -16 z m 4 18 c 3 -1 5 -3 5 -6 c 0 -4 -4 -6 -8 -6 h -8 v 19 h 4 v -6 h 4 l 4 6 h 5 z m -3 -9 c 2 0 4 1 4 3 s -2 3 -4 3 h -4 v -6 h 4 z M 567 251 L 566 129 L 596 130 L 594 178 L 619 179 L 620 130 L 648 132 L 646 216 L 647 255 L 621 253 L 620 203 L 594 203 L 594 253 L 569 253"
                        stroke="white" stroke-width="0.1" fill="white"/>
                </svg>
            </div>
            <div className="left-menu-content">
                <div className="left-menu-top-content">
                    <div className="left-menu-item">
                        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 hDgDGI home-icon"
                             viewBox="0 0 24 24">
                            <path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"></path>
                        </svg>
                        <Link to='/' className="left-menu-action">Главная</Link></div>
                    <div className="left-menu-item">
                        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 hDgDGI search-icon"
                             viewBox="0 0 24 24">
                            <path
                                d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z">
                            </path>
                        </svg>
                        <a className="left-menu-action" href="#">Поиск</a>
                    </div>
                    <div className="left-menu-item">
                        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 hDgDGI collection-icon"
                             viewBox="0 0 24 24">
                            <path
                                d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z">
                            </path>
                        </svg>
                        <a className="left-menu-action" href="#">
                            Моя медиатека
                        </a>
                    </div>
                </div>
                <LeftMenuBottom/>

            </div>
        </div>
    )
}
