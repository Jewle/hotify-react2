import React from 'react';
import './header.scss'
import UserWidget from "../user-widget/UserWidget";

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
                        <UserWidget/>
                    </header>
    </div>)
}
