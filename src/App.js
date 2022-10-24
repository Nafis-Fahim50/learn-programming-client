import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
  }])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
