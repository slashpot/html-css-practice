import React from "react";
import Wrapper from "./HeaderWrapper";

export default () => {
    return (
        <Wrapper>
            <h1><span className="highlight">Corps</span> Web Design</h1>
            <nav className="nav-group">
                <ul>
                    <li className="highlight">HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                </ul>
            </nav>
        </Wrapper>
    )
}