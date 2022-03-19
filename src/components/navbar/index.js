import React from "react"

export default function NavBarMenu() {
    return (
        <nav id="home" className="fixed-top navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/#home">Export Agri Indonesia</a>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white hover:bg-green-600/100 rounded-lg px-2" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:bg-green-600/100 rounded-lg px-2" href="/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:bg-green-600/100 rounded-lg px-2" href="/#feature">Feature</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:bg-green-600/100 rounded-lg px-2" href="/#product">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:bg-green-600/100 rounded-lg px-2" href="/#teams">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:bg-green-600/100 rounded-lg px-2" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}