import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TeacherProvider } from './Context/TeacherContext.jsx'
import { StudentProvider } from './Context/StudentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TeacherProvider>
      <StudentProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StudentProvider>
    </TeacherProvider>
  </BrowserRouter>
)
