import React from 'react';

const PantryStock = () => {
    return (
        <div className="project-container">
            <h1>PantryStock</h1>
            <h4>In development</h4>
            <p>
                PantryStock is a handy application to keep track of items in your pantry. Thought up by my former classmate, coworker, and friend, Sam Hookstra (<a href="https://www.linkedin.com/in/sam-hookstra-686b741a5/" target="_blank" rel="noopener noreferrer nofollow">View on LinkedIn</a>). This application is co-written using React.js, Node.js, Express, CSS, and MongoDB.
            </p>
            <h3>As a user, you can:</h3>
            <ul>
                <li>add, edit, delete pantry item information</li>
                <li>search and sort your pantry items categorically in a list view or material-table view</li>
                <li>find recipes based on the ingredients you have available</li>
                <ul>
                    <li>if you&apos;re missing one or more ingredients, it will be noted on the recipes page</li>
                </ul>
                <li>create an editable grocery list</li>
                <li>be notified when you&apos;re running low on an item based on quantity preferences you set</li>
            </ul>
            <p>We&apos;ve all been to the grocery store and found ourselves wishing we had checked the pantry before leaving the house because we don&apos;t know if we <strong>really</strong> need another bottle of olive oil. Unless you&apos;re Paula Deen, you probably don&apos;t need an extra four sticks of butter in the fridge.</p>
        </div>
    )
}

export default PantryStock;