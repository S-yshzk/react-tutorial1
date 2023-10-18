import Nav from "./Nav";

export default function Header() {
    return (
        <header>
            <h1>BIRDWATHING</h1>
            <div className="header img">
                <img src="dove.png" alt="a simple dove logo" />
            </div>
            <Nav />
        </header>
    );
}