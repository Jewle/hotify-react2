import React from "react";
export default function UserWidget () {
    return (
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

    )
}
