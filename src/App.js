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
import { Toaster } from 'react-hot-toast';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import CheckOut from './Pages/CheckOut/CheckOut';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorRoute from './ErrorRoute/ErrorRoute';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        loader: ()=> fetch('https://learn-programming-server-side.vercel.app/courses')
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
      },
      {
        path:'/course/:id',
        element:<CourseDetails></CourseDetails>,
        loader:({params})=>fetch(`https://learn-programming-server-side.vercel.app/courses/${params.id}`)
      },
      {
        path:'/checkout/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params})=>fetch(`https://learn-programming-server-side.vercel.app/courses/${params.id}`)
      },
      {
        path: '*',
        element: <ErrorRoute></ErrorRoute>
      }
    ]
  }])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
