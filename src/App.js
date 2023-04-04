import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Main from './layout/Main';
import Products from './component/Products/Products';
import Blog from './component/Blog/Blog';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './Posts/Posts';
import PostDetails from './component/PostsDetails/PostDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/fri/:froo',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.froo}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: '/posts/:post',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
          },
          element: <PostDetails></PostDetails>
        }

      ]
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
