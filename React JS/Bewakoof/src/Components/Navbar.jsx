import React from 'react'

export default function Navbar() {

  return (
    <div>
      <header class="navbar">
        <div class="top-nav">
          <div class="logo">BEWAKOOF<sup>®</sup></div>
          <nav class="top-links">
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">MOBILE COVERS</a>
          </nav>
          <div class="search-login">
            <input type="text" placeholder="Search by products" />
            <a href="#" class="login">LOGIN</a>
            <span class="icons">♡ 🛒</span>
          </div>
        </div>

        <div class="bottom-nav">
          <div class="gender-toggle">
            <button class="active">MEN</button>
            <button>WOMEN</button>
          </div>
          <nav class="menu">
            <a href="#">SHOP NOW</a>
            <a href="#">LIVE NOW</a>
            <a href="#">PLUS SIZE</a>
            <a href="#">ACCESSORIES</a>
            <a href="#">OFFICIAL MERCH</a>
            <a href="#">SNEAKERS</a>
            <a href="#">BEWAKOOF AIR</a>
          </nav>
        </div>
      </header>
    </div>
  )
}

