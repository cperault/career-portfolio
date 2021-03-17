import React from 'react'

const TopNav = () => {
    //array to store the top nav links
    const links = ["Home", "Projects", "Experience", "Contact"]
    const handleLinkClick = link => {
        window.location.assign(link)
    }
    return (
        <div className="portfolio-top-nav-div">
            {links.map((link, index) => {
                return (
                    <div key={index} className="top-nav-link" onClick={() => handleLinkClick(link)}>{link}</div>
                )
            })}
        </div>
    )
}

export default TopNav
