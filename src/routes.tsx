import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from './pages/_layouts/app-layout';
import { Blog } from './pages/blog-page/blog';
import { Post } from "./pages/post-page/post";

export const router = createBrowserRouter([
    {
      path: "/",                
      element: <AppLayout />,
      children: [
        { path: "", element: <Blog /> },
        { path: "/post/:issueId", element: <Post /> }
      ]
    },
  ])