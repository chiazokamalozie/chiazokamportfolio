document.addEventListener('DOMContentLoaded', function () {
    // Bar Chart Quiz
    const barChartCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barChartCtx, {
        type: 'bar',
        data: {
            labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
            datasets: [{
                label: 'Data',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart Sorting Game
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieChartCtx, {
        type: 'pie',
        data: {
            labels: ['Category A', 'Category B', 'Category C', 'Category D'],
            datasets: [{
                label: 'Data',
                data: [10, 20, 30, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
});

function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div>
            <p>Question 1: What is a bar chart used for?</p>
            <button onclick="checkAnswer('correct')">Displaying categorical data</button>
            <button onclick="checkAnswer('incorrect')">Displaying time series data</button>
        </div>
        <div>
            <p>Question 2: What is a scatter plot used for?</p>
            <button onclick="checkAnswer('correct')">Showing relationships between variables</button>
            <button onclick="checkAnswer('incorrect')">Showing distribution of data</button>
        </div>
    `;
}

function checkAnswer(answer) {
    if (answer === 'correct') {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }
}

function startSortingGame() {
    const sortingGameContainer = document.getElementById('sorting-game-container');
    sortingGameContainer.innerHTML = `
        <div>
            <p>Sort the following numbers in ascending order:</p>
            <p id="numbers">5, 3, 8, 1, 2</p>
            <input type="text" id="sorted-numbers" placeholder="Enter sorted numbers">
            <button onclick="checkSorting()">Check</button>
        </div>
    `;
}

function checkSorting() {
    const sortedNumbers = document.getElementById('sorted-numbers').value;
    if (sortedNumbers === '1, 2, 3, 5, 8') {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }
}

function checkBarChartAnswer() {
    const correctAnswer = [12, 19, 3, 5];
    const userAnswer = prompt('Enter the data values separated by commas (e.g., 12, 19, 3, 5):');
    const userAnswerArray = userAnswer.split(',').map(Number);

    if (JSON.stringify(userAnswerArray) === JSON.stringify(correctAnswer)) {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }
}

function checkPieChartSorting() {
    const correctOrder = ['Category A', 'Category B', 'Category C', 'Category D'];
    const userOrder = document.getElementById('sortedCategories').value.split(',').map(item => item.trim());

    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    if (draggedElement) {
        event.target.appendChild(draggedElement);
    }
}

function checkRelationships() {
    const relationship1 = document.getElementById('relationship1').children;
    const relationship2 = document.getElementById('relationship2').children;

    if (relationship1.length === 2 && relationship1[0].id === 'table1' && relationship1[1].id === 'table2' &&
        relationship2.length === 2 && relationship2[0].id === 'table2' && relationship2[1].id === 'table3') {
        alert('Correct relationships!');
    } else {
        alert('Incorrect relationships. Try again.');
    }
}
