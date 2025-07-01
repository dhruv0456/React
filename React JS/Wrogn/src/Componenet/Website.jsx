import React from 'react'

export default function Website() {
  return (
    <div>
      <nav class="navbar">
                <div class="nav-container">
                    <div><img src="Wrogn.svg" alt="" /></div>

                    <ul class="nav-menu">
                        <li class="nav-item"><a href="#" class="nav-link">EOSS</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Exclusive</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">All Products</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Topwear</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Bottomwear</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Footwear</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Fresh Arrivals</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Essentials</a></li>
                    </ul>

                    <div class="nav-right">
                        <div class="search-container">
                            <input type="text" class="search-box" placeholder="SEARCH" />
                            <span class="search-icon"><i class="bi bi-search"></i></span>
                        </div>
                        <div class="nav-icons">
                            <button class="icon-btn">👤</button>
                            <button class="icon-btn">🛒</button>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}
