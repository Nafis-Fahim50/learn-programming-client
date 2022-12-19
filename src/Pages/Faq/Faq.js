import React from 'react';
import useTitle from '../../Hooks/UseTitile/UseTitle';

const Faq = () => {
    useTitle('FAQ')
    return (
        <div className='mt-5'>
            <h1 className='text-success'>Frequently asked question</h1>
            <h5 className='mt-4'>1. What is JSX?</h5>
            <p>JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</p>
            <h5 className='mb-3'>2. What is the virtual DOM?</h5>
            <p>DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.</p>
            <h5 className='mb-3'>3. Why can’t browsers read JSX?</h5>
            <p>Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.</p>
            <h5 className='mb-3'>4. How to create react app?</h5>
            <p>Step 1: npx create-react-app myapp <br />
            Step 2: cd myapp <br />
            Step 3: npm run </p>
            <h5 className='mb-3'>5. How to install react router dom?</h5>
            <p>npm install react-router-dom</p>
            <h5 className='mb-3'>6. What is a state in React?</h5>
            <p>The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.</p>
            <h5 className='mb-3'>7. What are props in React?</h5>
            <p>Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.</p>
            <h5 className='mb-3'>8. How to install react bootstrap?</h5>
            <p>npm install react-bootstrap bootstrap</p>
            <h5 className='mb-3'>9. What is Redux?</h5>
            <p>Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management.</p>
            <h5 className='mb-3'>10. What is React Router?</h5>
            <p>React Router is a routing library built on top of React, which is used to create routes in a React application. This is one of the most frequently asked react interview questions.</p>

        </div>
    );
};

export default Faq;