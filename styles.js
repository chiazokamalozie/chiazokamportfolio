body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
    padding-bottom: 4rem; /* Add padding to the bottom to make space for the footer */
}

header {
    background: linear-gradient(90deg, #4CAF50, #2E7D32);
    color: white;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

header h1 {
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #ffeb3b;
}

section {
    padding: 2rem;
    margin: 1rem 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #2E7D32;
}

.project {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    align-items: center;
}

.project img {
    width: 200px; /* Adjusted size for medium preview */
    height: auto;
    margin-right: 1rem;
    border-radius: 8px;
}

.project-details {
    display: flex;
    flex-direction: column;
}

.project-details h3 {
    margin-bottom: 0.5rem;
    color: #4CAF50;
}

.project:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.experience, .education {
    margin-bottom: 2rem;
}

.experience h3, .education h3 {
    margin-bottom: 0.5rem;
    color: #4CAF50;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin-bottom: 0.5rem;
}

#contact {
    text-align: center;
}

#contact .contact-info {
    display: inline-block;
    text-align: left;
}

#contact p {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
}

#contact i {
    margin-right: 0.5rem;
    color: #4CAF50;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}

@media (max-width: 600px) {
    header .container {
        flex-direction: column;
    }

    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin: 0.5rem 0;
    }

    .project {
        flex-direction: column;
        align-items: flex-start;
    }

    .project img {
        width: 100%;
        margin: 0 0 1rem 0;
    }

    footer {
        position: static;
    }
}

.game {
    margin: 2rem 0;
    padding: 1rem;
    background-color: #e0f7fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.game h3 {
    margin-bottom: 1rem;
    color: #00796b;
}

.game button {
    padding: 0.5rem 1rem;
    background-color: #00796b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.game button:hover {
    background-color: #004d40;
}

#quiz-container, #sorting-game-container {
    margin-top: 1rem;
}

#sql-relationship-game {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
}

.table, .relationship {
    padding: 1rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    width: 150px;
}

.relationship {
    background-color: #e0f7fa;
}
