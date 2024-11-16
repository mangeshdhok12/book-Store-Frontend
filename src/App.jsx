
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/create",
    element: <CreateBook />,
  },
  {
    path: "/books/details/:id",
    element: <ShowBook />,
  },
  {
    path: "/books/edit/:id",
    element: <EditBook />,
  },
  {
    path: "/books/delete/:id",
    element: <DeleteBook />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

