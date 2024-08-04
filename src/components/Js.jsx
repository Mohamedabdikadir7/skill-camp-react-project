import React, { useState, useEffect } from 'react';
import '../App.css'; 
const Js = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [progress, setProgress] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());

  const questions = [
    { question: "What is JavaScript?", options: ["A programming language", "A type of coffee", "A style sheet language", "A database"], correct: 0 },
    { question: "What does 'var' stand for?", options: ["Variable", "Variety", "Variation", "Various"], correct: 0 },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/*", "<!--", "#"], correct: 0 },
    { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "def myFunction()", "function:myFunction()", "create myFunction()"], correct: 0 },
    { question: "How do you call a function named 'myFunction'?", options: ["myFunction()", "call myFunction()", "call function myFunction()", "execute myFunction()"], correct: 0 },
    { question: "How do you write an 'if' statement in JavaScript?", options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5"], correct: 1 },
    { question: "Which event occurs when the user clicks on an HTML element?", options: ["onchange", "onclick", "onmouseover", "onmouseclick"], correct: 1 },
    { question: "How do you write a for loop in JavaScript?", options: ["for (i = 0; i < 5; i++)", "for (i = 0; i < 5)", "for (i <= 5; i++)", "for i = 1 to 5"], correct: 0 },
    { question: "How do you add an element to the DOM in JavaScript?", options: ["document.createElement()", "document.addElement()", "document.newElement()", "document.appendChild()"], correct: 0 },
    { question: "How do you select an element by its ID in JavaScript?", options: ["document.getElementById()", "document.querySelector()", "document.getElementsByClassName()", "document.getElementByName()"], correct: 0 }
  ];

  const handleAnswerChange = (index, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[index] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
    updateProgress(newScore);
  };

  const sections = {
    introduction: {
      title: "Introduction to JavaScript",
      content: (
        <div>
            <div className="introduction">
          <p>Welcome to the world of JavaScript!</p>
          <p>In this course, you'll dive into the essentials of <strong>JavaScript</strong>, the language that brings web pages to life.</p>
          <ul>
            <li>Learn how to manipulate HTML elements.</li>
            <li>Create dynamic and interactive web content.</li>
            <li>Understand the core concepts of JavaScript.</li>
          </ul>
          <p>By the end of this module, you'll be able to:</p>
          <ul>
            <li>Understand the basics of JavaScript.</li>
            <li>Write simple JavaScript programs.</li>
            <li>Enhance web pages with interactive elements.</li>
          </ul>
          <p>Get ready to embark on an exciting journey that will significantly enhance your web development skills!</p>
        </div>
        </div>
      )
    },
    basics: {
      title: "JavaScript Basics",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">Introduction to JavaScript</h1>
          <p>JavaScript is a programming language that allows you to implement complex things on web pages. It enables you to create dynamically updating content, control multimedia, animate images, and much more.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Basic JavaScript Syntax</h2>
          <p>A JavaScript program is a list of programming statements:</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`// This is a single-line comment
/*
  This is a
  multi-line comment
*/
var x = 5; // Declare and initialize a variable
function myFunction() {
  alert("Hello, World!");
}`}
          </pre>
          <p>The <strong>var</strong> keyword declares a variable. A function is defined using the <strong>function</strong> keyword.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">JavaScript Variables</h2>
          <p>Variables are containers for storing data values. You can declare a variable using the <strong>var</strong>, <strong>let</strong>, or <strong>const</strong> keywords.</p>
          <ul className="list-disc list-inside">
            <li><strong>var:</strong> Declares a variable, optionally initializing it to a value.</li>
            <li><strong>let:</strong> Declares a block-scoped, local variable, optionally initializing it to a value.</li>
            <li><strong>const:</strong> Declares a block-scoped, read-only named constant.</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">JavaScript Operators</h2>
          <p>JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more. Here are some common operators:</p>
          <ul className="list-disc list-inside">
            <li><strong>Assignment:</strong> <code>=</code></li>
            <li><strong>Addition:</strong> <code>+</code></li>
            <li><strong>Subtraction:</strong> <code>-</code></li>
            <li><strong>Multiplication:</strong> <code>*</code></li>
            <li><strong>Division:</strong> <code>/</code></li>
            <li><strong>Equality:</strong> <code>==</code></li>
            <li><strong>Strict Equality:</strong> <code>===</code></li>
          </ul>
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    },
    functions: {
      title: "JavaScript Functions",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">JavaScript Functions</h1>
    
          <p>Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Defining and Calling Functions</h2>
          <p>A JavaScript function is defined with the <strong>function</strong> keyword, followed by a name, followed by parentheses (). The code to be executed is placed inside curly brackets { }:</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`function myFunction() {
  alert("Hello, World!");
}
myFunction(); // Call the function`}
          </pre>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Function Parameters and Arguments</h2>
          <p>Function parameters are the names listed in the function definition. Function arguments are the real values passed to the function.</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`function myFunction(name) {
  alert("Hello, " + name);
}
myFunction("Alice"); // Call the function with an argument`}
          </pre>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Return Values</h2>
          <p>Functions can return a value back to the caller. Use the <strong>return</strong> statement to return a value:</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`function add(a, b) {
  return a + b;
}
var sum = add(5, 3); // sum is 8`}
          </pre>
    
          <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/FOD408a0EzU"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
        </div>
      )
    },
    conditions: {
      title: "JavaScript Conditions",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">JavaScript Conditions</h1>
    
          <p>Conditional statements control the flow of execution in a program based on certain conditions.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">if, else if, and else</h2>
          <p>The if statement executes a block of code if a specified condition is true. Use else to specify a block of code to be executed if the condition is false. Use else if to specify a new condition to test if the first condition is false.</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`var time = 10;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}`}
          </pre>
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IsG4Xd6LlsM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    },
    loops: {
      title: "JavaScript Loops",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">JavaScript Loops</h1>
    
          <p>Loops can execute a block of code a number of times.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">for Loop</h2>
          <p>The for loop has three optional expressions: initialization, condition, and increment. This loop is used when the number of iterations is known before entering the loop.</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`for (var i = 0; i < 5; i++) {
  console.log(i);
}`}
          </pre>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">while Loop</h2>
          <p>The while loop executes its statements as long as a specified condition evaluates to true.</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}
          </pre>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">do...while Loop</h2>
          <p>The do...while loop is similar to the while loop, except that it evaluates its condition at the end of the loop.</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`}
          </pre>
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s9wW2PpJsmQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    },
    dom: {
      title: "JavaScript DOM",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">JavaScript DOM</h1>
    
          <p>The DOM (Document Object Model) represents the structure of a web page. JavaScript can be used to manipulate the DOM to change the content, structure, and style of a web page.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Selecting Elements</h2>
          <p>You can use various methods to select elements in the DOM.</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`// Select an element by ID
var element = document.getElementById("myElement");

// Select elements by class name
var elements = document.getElementsByClassName("myClass");

// Select elements by tag name
var elements = document.getElementsByTagName("div");

// Select an element using a CSS selector
var element = document.querySelector(".myClass");
`}
          </pre>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Manipulating Elements</h2>
          <p>You can change the content, attributes, and style of elements using JavaScript.</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`// Change the content of an element
element.innerHTML = "New content";

// Change the style of an element
element.style.color = "red";

// Change the attributes of an element
element.setAttribute("src", "newImage.jpg");
`}
          </pre>
    
          <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NO5kUNxGIu0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
        </div>
      )
    },
    questions: {
      title: "JavaScript Quiz",
      content: (
        <div className="bg-gray-100 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">JavaScript Quiz</h1>
          <form>
            {questions.map((q, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-semibold">{q.question}</p>
                {q.options.map((option, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={i}
                      checked={answers[index] === i}
                      onChange={() => handleAnswerChange(index, i)}
                    />
                    <label
                      className={`
                        ml-2 ${submitted && i === q.correct ? 'text-green-500' : ''}
                        ${submitted && i !== q.correct && answers[index] === i ? 'text-red-500' : ''}
                      `}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </form>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Submit
          </button>
          {submitted && (
            <div className="mt-4">
              <p className="text-xl">Your score: {score}/10</p>
              {score >= 5 ? (
                <p className="text-green-500">Congratulations! You passed with {(score / 10) * 100}%.</p>
              ) : (
                <p className="text-red-500">You did not pass. Please try again.</p>
              )}
            </div>
          )}
        </div>
      )
    }
  };

  const sectionKeys = Object.keys(sections); // Get all section keys

  // Function to render content based on active section
  const renderContent = () => {
    const section = sections[activeSection];
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
        <div className="text-gray-600">{section.content}</div>
      </div>
    );
  };

  // Function to move to the next section
  const goToNextSection = () => {
    const currentIndex = sectionKeys.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sectionKeys.length; // Loop back to the first section

    // Only add to completed sections if moving forward
    if (nextIndex > currentIndex) {
      setCompletedSections(prev => new Set(prev).add(activeSection));
    }

    setActiveSection(sectionKeys[nextIndex]);
  };

  // Function to update progress
  const updateProgress = (newScore) => {
    const completedModules = completedSections.size;
    const totalScore = newScore / questions.length; // Calculate percentage
    const progressPercentage = ((completedModules / (sectionKeys.length - 1)) + totalScore) * 100;
    setProgress(progressPercentage);
  };

  // useEffect to update progress when activeSection changes
  useEffect(() => {
    const completedModules = completedSections.size;
    const progressPercentage = (completedModules / (sectionKeys.length - 1)) * 100;
    setProgress(progressPercentage);
  }, [completedSections]);

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">JavaScript Course</h2>
        </div>
        <ul className="py-4">
          {sectionKeys.map(key => (
            <li key={key} className={`px-4 py-2 hover:bg-gray-200 ${activeSection === key ? 'bg-blue-100' : ''}`}>
              <button onClick={() => setActiveSection(key)} className="block w-full text-left text-gray-700">
                {sections[key].title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mt-6 mb-4">
          <h2 className="text-xl font-bold text-gray-900">Course Progress</h2>
          <div className="w-full bg-gray-200 rounded-full">
            <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%` }}>
              {progress.toFixed(2)}%
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to JavaScript Fundamentals</h1>
        {renderContent()}
        {activeSection !== 'questions' && (
          <button onClick={goToNextSection} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Next
          </button>
        )}
      </main>
    </div>
  );
};

export default Js;
