import { Link, Router } from "react-router-dom";

function Header() {
    const linkStyle = {
        margin: "2%",
    };

    return (
        <div style={{ marginBottom: "5%" }}>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <nav>
                <Link style={linkStyle} to={"/"}>
                    Home
                </Link>
                <Link style={linkStyle} to={"/search"}>
                    Search
                </Link>
            </nav>
        </div>
    );
}

export default Header;
