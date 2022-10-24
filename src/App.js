import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Faq from './Pages/Faq/Faq';
import Blog from './Pages/Blog/Blog';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/courses',
        element:<Courses></Courses>
      },
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
