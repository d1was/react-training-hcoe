import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AnimeQuotes from './components/AnimeQuotes'
import Weather from './components/Weather'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <Weather />
    </div>
  </React.StrictMode>
)
