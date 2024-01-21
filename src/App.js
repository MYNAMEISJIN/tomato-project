import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RootLayout from './Pages/RootLayout';
import TomatoPlanPage from './Pages/TomatoPlanPage';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/http';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/tomato-plan', element: <TomatoPlanPage /> }
    ]
  }
])



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      < RouterProvider router={router} />
    </QueryClientProvider >
  );
}

export default App;


//npm
//react-router-dom
//react icons
//react-redux-toolkit
//react-router-hash-link
//npm install framer-motion
//npm i @tanstack/react-query
//npm i socket.io-client