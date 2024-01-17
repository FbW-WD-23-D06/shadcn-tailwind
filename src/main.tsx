import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import postsLoader from "./pages/posts/postsLoader";
import Post from "./pages/posts/Post";
import Layout from "./feature/navigation/layout/Layout";
import postLoader from "./pages/posts/postLoader";
import { path } from "./feature/navigation/layout/data";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: path.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: path.posts,
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: `${path.posts}/:id`,
        element: <Post />,
        loader: postLoader,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
  </React.StrictMode>
);
