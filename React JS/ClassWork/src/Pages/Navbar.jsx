import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="">

            <div class="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>

            < div class="main-content">
                <h1>React Introduction</h1>
                <p>React is a front-end JavaScript library.</p>
                <p>React was developed by the Facebook Software Engineer Jordan Walke. React is also known as React.js or ReactJS.</p>
                <p>React is a tool for building UI components.</p>
                <p>ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces.</p>
                <h1>Key Features of React</h1>
                <h3>1.Virtual DOM
                    2.Component-Based Architecture
                    3.JSX (JavaScript XML)
                </h3>
            </div>

            <div>
                <img src="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-1bnZ-TwWgN8Ee7LVby3FmTJwp3snpiujA&s" alt="" />
                <img src="https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png" alt="" />
            </div>


            <div class="footer">
                <p>&copy; 2025  Simple Introduction About React</p>
            </div>

        </div>



    );
}

export default Navbar
