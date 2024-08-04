import React, { useState, useEffect } from 'react';
import '../App.css'; 
const Css = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(Array(8).fill(null));
  const [progress, setProgress] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());

  const questions = [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: 0 },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], correct: 0 },
    { question: "Which is the correct CSS syntax?", options: ["body {color: black;}", "{body;color:black;}", "{body:color=black;}", "body:color=black;"], correct: 0 },
    { question: "Which property is used to change the background color?", options: ["background-color", "bgcolor", "color", "bg-color"], correct: 0 },
    { question: "Which property is used to change the font of an element?", options: ["font-family", "font-weight", "font-style", "font"], correct: 0 },
    { question: "How do you make the text bold?", options: ["font-weight: bold;", "font-style: bold;", "font: bold;", "style: bold;"], correct: 0 },
    { question: "How do you add a background image?", options: ["background-image: url(image.jpg);", "bg-image: url(image.jpg);", "background: image(url.jpg);", "background-img: url(image.jpg);"], correct: 0 },
    { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correct: 0 }
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
      title: "Introduction to CSS",
      content: (
        <div>
            <div className="introduction">
          <p>Welcome to the world of CSS!</p>
          <p>In this course, you'll dive into the essentials of <strong>CSS</strong>, the language used to style web pages.</p>
          <ul>
            <li>Learn how to style your content.</li>
            <li>Create beautiful layouts.</li>
            <li>Enhance the visual appeal of your websites.</li>
          </ul>
          <p>By the end of this module, you'll be able to:</p>
          <ul>
            <li>Understand the basics of CSS.</li>
            <li>Apply styles to HTML elements.</li>
            <li>Build visually appealing web pages.</li>
          </ul>
          <p>Get ready to embark on an exciting journey that will enhance your web development skills!</p>
        </div>
        </div>
      )
    },
    basics: {
      title: "CSS Basics",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">Introduction to CSS</h1>
          <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Basic CSS Syntax</h2>
          <p>A CSS rule consists of a selector and a declaration block:</p>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`selector {
  property: value;
}`}
          </pre>
          <p>The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">CSS Selectors</h2>
          <p>CSS selectors are used to "find" (or select) the HTML elements you want to style. Here are some common selectors:</p>
          <ul className="list-disc list-inside">
            <li><strong>Element Selector:</strong> Selects all elements of the given type. E.g., <code>p {`{color: red;}`}</code></li>
            <li><strong>Id Selector:</strong> Selects a single element with the given id. E.g., <code>#myId {`{color: blue;}`}</code></li>
            <li><strong>Class Selector:</strong> Selects all elements with the given class. E.g., <code>.myClass {`{color: green;}`}</code></li>
            <li><strong>Universal Selector:</strong> Selects all elements. E.g., <code>* {`{color: black;}`}</code></li>
            <li><strong>Attribute Selector:</strong> Selects elements based on an attribute or attribute value. E.g., <code>a[target="_blank"] {`{color: orange;}`}</code></li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">CSS Colors</h2>
          <p>CSS colors can be specified in different ways:</p>
          <ul className="list-disc list-inside">
            <li><strong>Named Colors:</strong> E.g., <code>color: red;</code></li>
            <li><strong>HEX Colors:</strong> E.g., <code>color: #ff0000;</code></li>
            <li><strong>RGB Colors:</strong> E.g., <code>color: rgb(255, 0, 0);</code></li>
            <li><strong>RGBA Colors:</strong> E.g., <code>color: rgba(255, 0, 0, 0.5);</code> (with alpha channel for opacity)</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">CSS Backgrounds</h2>
          <p>CSS backgrounds can be set using various properties:</p>
          <ul className="list-disc list-inside">
            <li><strong>background-color:</strong> Sets the background color.</li>
            <li><strong>background-image:</strong> Sets the background image.</li>
            <li><strong>background-repeat:</strong> Sets if/how the background image will be repeated.</li>
            <li><strong>background-position:</strong> Sets the starting position of the background image.</li>
            <li><strong>background-size:</strong> Sets the size of the background image.</li>
          </ul>
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yfoY53QXEnI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    },
    layout: {
      title: "CSS Layout",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">CSS Layout</h1>
    
          <p>CSS layout techniques are used to arrange elements on a webpage. Here are some common layout techniques:</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">CSS Box Model</h2>
          <p>All HTML elements can be considered as boxes. The CSS box model describes the rectangular boxes generated for elements in the document tree and governs the rendering of these boxes:</p>
          <ul className="list-disc list-inside">
            <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
            <li><strong>Padding:</strong> Clears an area around the content. The padding is transparent.</li>
            <li><strong>Border:</strong> A border that goes around the padding (if any) and content.</li>
            <li><strong>Margin:</strong> Clears an area outside the border. The margin is transparent.</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">CSS Flexbox</h2>
          <p>CSS Flexbox is a layout module that provides an easier and cleaner way to arrange items within a container:</p>
          <ul className="list-disc list-inside">
            <li><strong>display: flex;</strong> Defines a flex container.</li>
            <li><strong>flex-direction:</strong> Defines the direction of the flexible items.</li>
            <li><strong>justify-content:</strong> Aligns the flexible container's items when the items do not use all available space.</li>
            <li><strong>align-items:</strong> Aligns the flexible container's items along the cross axis.</li>
            <li><strong>flex-wrap:</strong> Specifies whether the flexible items should wrap or not.</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">CSS Grid</h2>
          <p>CSS Grid Layout is a 2-dimensional layout system for the web:</p>
          <ul className="list-disc list-inside">
            <li><strong>display: grid;</strong> Defines a grid container.</li>
            <li><strong>grid-template-columns:</strong> Defines the columns of the grid.</li>
            <li><strong>grid-template-rows:</strong> Defines the rows of the grid.</li>
            <li><strong>gap:</strong> Sets the gaps (gutters) between rows and columns.</li>
            <li><strong>grid-template-areas:</strong> Defines named grid areas.</li>
          </ul>
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jV8B24rSN5o" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    },
    questions: {
      title: "CSS Quiz",
      content: (
        <div className="bg-gray-100 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">CSS Quiz</h1>
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
              <p className="text-xl">Your score: {score}/8</p>
              {score >= 5 ? (
                <p className="text-green-500">Congratulations! You passed with {(25 * (score / 8)).toFixed(2)}%.</p>
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
          <h2 className="text-2xl font-bold text-gray-800">CSS Course</h2>
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to CSS Fundamentals</h1>
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

export default Css;
