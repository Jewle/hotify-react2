import React from 'react';
import './header.scss'

export default  function Header () {
    return (<div className="header-wrapper">
                <div className="section-bg"></div>
                    <header className="main-container">
                        <div className="page-switcher">
                            <button>
                                <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24"
                                     className="Svg-ytk21e-0 dMCjEC IYDlXmBmmUKHveMzIPCF">
                                    <polyline points="16 4 7 12 16 20" fill="none" stroke="#181818"></polyline>
                                </svg>
                            </button>
                            <button>
                                <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24"
                                     className="Svg-ytk21e-0 dMCjEC IYDlXmBmmUKHveMzIPCF">
                                    <polyline points="8 4 17 12 8 20" fill="none" stroke="#181818">
                                    </polyline>
                                </svg>
                            </button>
                        </div>
                        <div className="account-actions-wrapper">
                            <div className="account-actions">
                                <div className="account-item account-ava">
                                    <img src="src/template/img/ava.jfif" alt=""/>
                                </div>
                                <p className=" account-item account-name">Artyom Chizhov</p>
                                <button className="account-item">

                                    <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 hDgDGI eAXFT6yvz37fvS1lmt6k"
                                         viewBox="0 0 16 16">
                                        <path d="M3 6l5 5.794L13 6z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </header>
    </div>)
}
