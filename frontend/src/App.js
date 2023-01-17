import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/hocs/Layout'
import HomePage from './components/pages/HomePage'
import BlogPage from './components/pages/BlogPage'
import CategoryPage from './components/pages/CategoryPage'
import BlogDetailsPage from './components/pages/BlogDetailsPage'

import "./static/css/app.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/category/:id",
    element: <CategoryPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetailsPage />,
  },
]);

const App = () => {
  return(
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App