import smiley from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <div className="header">
                <img src={smiley} className="header--image" />
                <h2 className="header--title"> Meme Generator </h2>
            </div>
        </header>
    )
}