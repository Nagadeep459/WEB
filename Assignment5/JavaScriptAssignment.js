function runTasks() {
    printPattern();
    factorialPrompt();
    capitalizeSentence();
    categorizeTemperature();
    daysUntilNewYear();
    findLocateIndex();
    generateRandomFibonacci();
    findMaxValue();
    filterBooks();
}

function appendToOutput(text) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${text}</p>`;
}

// 1. Print Pattern 
function printPattern() {
    let pattern = "";
    for (let i = 1; i <= 3; i++) {
        pattern += "*".repeat(i) + "<br>";
    }
    appendToOutput("<strong>Pattern:</strong><br>" + pattern);
}

// 2. Factorial Calculation
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
function factorialPrompt() {
    let num = prompt("Enter a number for factorial:");
    let result = factorial(parseInt(num));
    appendToOutput(`<strong>Factorial:</strong> ${result}`);
}

// 3. Capitalize First Letter of Words
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
function capitalizeSentence() {
    let input = prompt("Enter a sentence:");
    appendToOutput(`<strong>Capitalized Sentence:</strong> ${capitalizeWords(input)}`);
}

// 4. Categorize Temperature
function categorizeTemperature() {
    let temp = parseFloat(prompt("Enter temperature:"));
    let category = temp < 0 ? "Freezing" : temp <= 15 ? "Cold" : temp <= 30 ? "Moderate" : "Hot";
    appendToOutput(`<strong>Temperature Category:</strong> ${category}`);
}

// 5. Days Until New Year
function daysUntilNewYear() {
    let today = new Date();
    let nextYear = new Date(today.getFullYear() + 1, 0, 1);
    let daysLeft = Math.ceil((nextYear - today) / (1000 * 60 * 60 * 24));
    appendToOutput(`<strong>Days left until next New Year:</strong> ${daysLeft}`);
}

// 6. Find "locate" Index
function findLocateIndex() {
    let str = "Please locate where 'locate' occurs!";
    appendToOutput(`<strong>Index of 'locate':</strong> ${str.indexOf("locate")}`);
}

// 7. Generate Random Number & Fibonacci
function generateRandomFibonacci() {
    let rand = Math.floor(Math.random() * 10) + 1;
    function fibonacci(n) {
        let fib = [0, 1];
        while (fib[fib.length - 1] + fib[fib.length - 2] < n) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        }
        return fib;
    }
    appendToOutput(`<strong>Random Number:</strong> ${rand}`);
    appendToOutput(`<strong>Fibonacci Sequence:</strong> ${fibonacci(rand).join(", ")}`);
}

// 8. Find Max Value in Array
function findMaxValue() {
    let arr = [10, 25, 48, 100, 5];
    appendToOutput(`<strong>Max Value:</strong> ${Math.max(...arr)}`);
}

// 9. Book Object & Filters
function filterBooks() {
    let books = [
        { title: "Book A", author: "Author X", cost: 600 },
        { title: "Book B", author: "Mahatma Gandhi", cost: 450 },
        { title: "Book C", author: "Author Y", cost: 300 }
    ];

    let expensiveBooks = books.filter(b => b.cost > 500).map(b => b.title).join(", ");
    let gandhiBook = books.find(b => b.author === "Mahatma Gandhi")?.title || "Not Found";

    appendToOutput(`<strong>Books costing more than 500:</strong> ${expensiveBooks}`);
    appendToOutput(`<strong>Book by Mahatma Gandhi:</strong> ${gandhiBook}`);
}
