import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar">
                <div class="logo">MyLogo</div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div class="search-login">
                    <input type="text" placeholder="Search by products" />
                    <a href="#" class="login">LOGIN</a>
                </div>
            </nav>

            

        </div>
    )
}
