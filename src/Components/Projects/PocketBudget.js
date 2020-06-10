import React from 'react';

const PocketBudget = () => {
    return (
        <div className="project-container">
            <h1>Pocket Budget</h1>
            <h4>In development</h4>
            <p>
                Pocket Budget is a side project I&apos;m working on which is written using React.js, Node.js, MySQL, CSS, and Material-UI.
            </p>
            <h3>As a user, you can:</h3>
            <ul>
                <li>add, edit, delete recurring expenses</li>
                <li>plan a budget based on a weekly, bi-weekly, or monthly period</li>
                <li>include an unexpected bill into your budget as a one-time expense</li>
                <li>view your overall expenses with detailed graphs</li>
                <li>additional features include:</li>
                <ul>
                    <li>export your budget or expense report in CSV format for applications such as Excel</li>
                    <li>calculate how much money you need to save for a special purchase within a time duration (3 months, 6 months, 12 months) and implement that into your budget</li>
                </ul>
            </ul>
            <p>I felt compelled to write this application as managing ones finances can be an overwhelming process. I have spent countless hours keeping track of my recurring expenses, unexpected bills, and trying to plan a budget accordingly. With this application, you can say goodbye to messy handwritten lists, tables, and notes.</p>
        </div>
    )
}

export default PocketBudget;