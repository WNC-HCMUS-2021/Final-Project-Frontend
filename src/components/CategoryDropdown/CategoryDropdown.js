import React from 'react';
import "./style.css";

function CategoryDropdown1() {
    return (
        <>
            <nav>
                <ul className="nav">
                    <li><a href="/#">Categories</a>
                    <ul>
                        <li><a href="/#">Mathematics</a></li>
                        <li><a href="/#">IT</a>
                        <ul>
                            <li><a href="/#">Web Development</a></li>
                            <li><a href="/#">Mobile Development</a></li>
                            <li><a href="/#">Artificial Intelligence</a></li>
                            <li><a href="/#">Machine learning</a></li>
                        </ul>
                        </li>
                        <li><a href="/#">Literature</a></li>
                        <li><a href="/#">History</a></li>
                    </ul>
                    </li>
                </ul>
            </nav>

        </>
      
    )
}

export default CategoryDropdown1;
