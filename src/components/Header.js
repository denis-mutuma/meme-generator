import React from "react";
import smiley from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <div className="header">
                <img src={smiley} className="header--image" />
                <h2 className="header--title"> Meme Generator </h2>
                <h4 className="header--project">React Course - Project 3</h4>
            </div>
        </header>
    )
}