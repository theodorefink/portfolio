import React from "react";

export const Navbar = () => {
    return <nav>
        <a href="/">Home</a>
        <div>
            <ul>
                <li>
                    <a href = "#about">About</a>
                </li>
                <li>
                    <a href = "#experience">Experience</a>
                </li>
                <li>
                    <a href = "#projects">Projects</a>
                </li>
                <li>
                    <a href = "#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
};