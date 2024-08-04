import React, { useState, useEffect } from 'react';
import '../App.css'; 
const Html = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(Array(8).fill(null));
  const [progress, setProgress] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());

  const questions = [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], correct: 0 },
    { question: "Who is making the Web standards?", options: ["Microsoft", "Mozilla", "Google", "The World Wide Web Consortium"], correct: 3 },
    { question: "Choose the correct HTML element for the largest heading:", options: ["<h1>", "<heading>", "<h6>", "<head>"], correct: 0 },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<b>"], correct: 2 },
    { question: "What is the correct HTML for adding a background color?", options: ["<body bg='yellow'>", "<background>yellow</background>", "<body style='background-color:yellow;'>", "<body bgcolor='yellow'>"], correct: 2 },
    { question: "Choose the correct HTML element to define important text", options: ["<b>", "<important>", "<i>", "<strong>"], correct: 3 },
    { question: "Choose the correct HTML element to define emphasized text", options: ["<italic>", "<emphasize>", "<i>", "<em>"], correct: 3 },
    { question: "What is the correct HTML for creating a hyperlink?", options: ["<a href='http://www.w3schools.com'>W3Schools</a>", "<a url='http://www.w3schools.com'>W3Schools</a>", "<a>http://www.w3schools.com</a>", "<a name='http://www.w3schools.com'>W3Schools</a>"], correct: 0 }
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
      title: "Introduction to HTML",
      content: (
        <div>
              <div className="introduction">
          <p>Welcome to the world of web development!</p>
          <p>In this course, you'll dive into the essentials of <strong>HTML</strong>, the backbone of all web pages.</p>
          <ul>
            <li>Learn how to structure your content.</li>
            <li>Create meaningful elements.</li>
            <li>Design a solid foundation for your websites.</li>
          </ul>
          <p>By the end of this module, you'll be able to:</p>
          <ul>
            <li>Craft basic web pages.</li>
            <li>Understand the principles of HTML.</li>
            <li>Set the stage for more advanced web development skills.</li>
          </ul>
          <p>Get ready to embark on an exciting journey that will open doors to endless possibilities in the digital world!</p>
        </div>
        </div>
      )
    },
    basics: {
      title: "HTML Basics",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">Introduction to HTML</h1>
          <p>HTML (HyperText Markup Language) is the standard markup language used to create web pages. It describes the structure of a web page and its content using a series of elements represented by tags. HTML elements tell the browser how to display the content.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Basic HTML Structure</h2>
          <p>An HTML document has a basic structure that includes the following elements:</p>
          <ul className="list-disc list-inside">
            <li><strong>&lt;!DOCTYPE html&gt;:</strong> Declares the document type and version of HTML.</li>
            <li><strong>&lt;html&gt;:</strong> The root element of an HTML document.</li>
            <li><strong>&lt;head&gt;:</strong> Contains meta-information about the document, such as the title and links to stylesheets.</li>
            <li><strong>&lt;title&gt;:</strong> Specifies the title of the document, which is displayed in the browser's title bar or tab.</li>
            <li><strong>&lt;body&gt;:</strong> Contains the content of the document, such as text, images, links, and other elements.</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Features Of HTML</h2>
          <ul className="list-disc list-inside">
            <li>The learning curve is very easy (easy to modify)</li>
            <li>Creating effective presentations</li>
            <li>Adding Links wherein we can add references</li>
            <li>Can display documents on platforms like Mac, Windows, Linux, etc</li>
            <li>Adding videos, graphics, and audios making it more attractive</li>
            <li>Case insensitive language</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">HTML Editor</h2>
          <ul className="list-disc list-inside">
            <li>Simple editor: Notepad</li>
            <li>Notepad++</li>
            <li>Atom</li>
            <li>Best editor: VS Code</li>
          </ul>
    
          <h2 className="text-xl font-bold text-white mt-4">HTML Skeleton</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            <pre className="text-white">
              {`<!DOCTYPE html>
<html>
<head>
  <title>My web page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first web page.</p>
</body>
</html>`}
            </pre>
          </div>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Common HTML Tags</h2>
          <p>Here are some common HTML tags used in web development:</p>
          <ul className="list-disc list-inside">
            <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Heading tags, with &lt;h1&gt; being the highest level and &lt;h6&gt; the lowest.</li>
            <li><strong>&lt;p&gt;:</strong> Paragraph tag, used to define blocks of text.</li>
            <li><strong>&lt;a&gt;:</strong> Anchor tag, used to create hyperlinks.</li>
            <li><strong>&lt;img&gt;:</strong> Image tag, used to embed images.</li>
            <li><strong>&lt;ul&gt; and &lt;ol&gt;:</strong> Unordered and ordered list tags, used to create lists.</li>
            <li><strong>&lt;li&gt;:</strong> List item tag, used within &lt;ul&gt; or &lt;ol&gt; to define individual list items.</li>
          </ul>
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HD13eq_Pmp8?start=449" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    },
    forms: {
      title: "Forms and Input",
      content: (
        <div className="bg-gray-500 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">HTML Forms</h1>
    
          <p>HTML forms allow users to interact with your webpage by providing input. They are built using the &lt;form&gt; element and various input types.</p>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Basic Form Structure</h2>
          <pre className="text-white bg-gray-200 p-4 rounded-lg">
            {`<form>
  <input type="text" name="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>`}
          </pre>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Form Elements</h2>
          <ul className="list-disc list-inside">
            <li><strong>&lt;input&gt; element:</strong> Creates various input fields like text, password, email, checkbox, radio, etc.</li>
            <li><strong>&lt;label&gt; element:</strong> Associates labels with form elements for accessibility.</li>
            <li><strong>&lt;textarea&gt; element:</strong> Creates a multi-line text input area.</li>
            <li><strong>&lt;select&gt; element:</strong> Creates a dropdown list.</li>
            <li><strong>&lt;button&gt; element:</strong> Creates buttons for submitting or resetting the form.</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Example Form</h2>
          {/* ... (your form example HTML code here) */}
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Form Attributes</h2>
          <p>Some important form attributes:</p>
          <ul className="list-disc list-inside">
            <li><strong>action attribute:</strong> Specifies the URL where the form data should be sent.</li>
            <li><strong>method attribute:</strong> Specifies the HTTP method used to send the form data (GET or POST).</li>
            <li><strong>name attribute:</strong> Assigns a name to form elements for data submission.</li>
            <li><strong>required attribute:</strong> Makes a form field mandatory.</li>
            <li><strong>placeholder attribute:</strong> Provides a hint for the user about the expected input.</li>
          </ul>
    
          <h2 className="text-xl font-bold text-gray-900 mt-4">Form Validation</h2>
          <p>Form validation ensures that user input is correct and complete before submission.</p>
          <ul className="list-disc list-inside">
            <li><strong>Client-side validation:</strong> Using JavaScript to check input values before sending to the server.</li>
            <li><strong>Server-side validation:</strong> Verifying data on the server to prevent malicious attacks.</li>
          </ul>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2O8pkybH6po"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      )
    },
    semantic: {
      title: "Semantic HTML",
      content: (
        <div className="bg-gray-100 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">Deep Dive into Semantic HTML</h1>
          <p>Semantic HTML is crucial for creating web pages that are both accessible and understandable to both users and search engines. It involves using HTML tags that provide meaning to the webpage content. These tags make it clear what role the content plays in the larger context of the page.</p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-4">Importance of Semantic HTML</h2>
          <p>Semantic HTML helps with SEO, accessibility, and maintains a clean structure that makes the site easier to interpret and manage. It's especially important for assistive technologies like screen readers.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-4">Core Semantic HTML Tags</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>&lt;header&gt;</strong>: Typically contains introductory information or navigation links for your site.</li>
            <li><strong>&lt;footer&gt;</strong>: Usually contains information about the author, copyright details, and links to legal notices.</li>
            <li><strong>&lt;main&gt;</strong>: The dominant content of the webpage, typically unique to that page and not repeated across pages like headers or footers.</li>
            <li><strong>&lt;article&gt;</strong>: A self-contained composition in a document that is independently distributable or reusable, e.g., in syndication. This could be a forum post, magazine or newspaper article, blog entry, etc.</li>
            <li><strong>&lt;section&gt;</strong>: Represents a standalone section — which doesn't have a more specific semantic element to represent it — of a document.</li>
            <li><strong>&lt;aside&gt;</strong>: Used for tangentially related content that could be considered separate from the content that it is related to.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-4">Example Usage of Semantic Tags</h2>
          <pre className="bg-gray-200 text-black p-4 rounded-lg">
            {`<header>
  <h1>Welcome to My Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>Blog post content...</p>
  </article>
  <section>
    <h2>Comments</h2>
    <p>Comment section...</p>
  </section>
</main>
<footer>
  <p>Copyright © 2023 by MySite.com</p>
</footer>`}
          </pre>

          <h2 className="text-xl font-bold text-gray-900 mt-4">Best Practices in Using Semantic HTML</h2>
          <p>Always choose HTML elements that accurately describe the content's purpose. Avoid using non-semantic elements like &lt;div&gt; and &lt;span&gt; for stylistic purposes that could be handled by CSS. This approach helps maintain clean and accessible code, ensuring better maintenance and compatibility across different devices and assistive technologies.</p>
          <iframe
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/kX3TfdUqpuU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      )
    },
    questions: {
      title: "HTML Quiz",
      content: (
        <div className="bg-gray-100 p-4 rounded-lg text-left">
          <h1 className="text-2xl font-bold text-gray-900">HTML Quiz</h1>
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
          <h2 className="text-2xl font-bold text-gray-800">HTML Course</h2>
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to HTML Fundamentals</h1>
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

export default Html;
