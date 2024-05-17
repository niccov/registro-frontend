import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Classrooms from './pages/classrooms/Classrooms.tsx'
import Dashboard from './pages/dashboard/Dashboard.tsx'
import Subjects from './pages/subjects/Subjects.tsx'
import Users from './pages/users/Users.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: '',
      element: <Dashboard />
    }]
  },
  {
    path: 'classrooms',
    element: <Classrooms />
  },
  {
    path: 'subjects',
    element: <Subjects />
  },
  {
    path: 'users',
    element: <Users />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
