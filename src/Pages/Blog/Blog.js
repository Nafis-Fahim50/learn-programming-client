import React from 'react';

const Blog = () => {
    return (
        <div className='mt-3 shadow-sm p-4'>
            <h4 className='text-success'>1. What is cors?</h4>
            <p className='text-start'> <span className='fw-bold'>Answer:</span> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

            <h4 className='text-success mt-4'>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p className='text-start'><span className='fw-bold'>Answer: </span>
                I am using firebase beacuse Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                <br />
                <ol className='mt-2'>
                    <li>STYTCH</li>
                    <li>Ory</li>
                    <li>Okta</li>
                    <li>Frontegg</li>
                    <li>Auth0</li>
                </ol>
            </p>
            <h4 className='text-success mt-3'>3. How does the private route work?</h4>
            <p className='text-start'><span className='fw-bold'>Answer: </span> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

            <h4 className='text-success mt-3'>4. What is Node? How does Node work?</h4>
            <p className='text-start'><span className='fw-bold'>Answer: </span>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            <br />
            <br />
            <span className='fw-bold text-success'>Working of Node.js:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
        </div>
    );
};

export default Blog;