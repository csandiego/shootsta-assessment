import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'

const languages = ['JavaScript', 'Python']

const LanguageContext = createContext({ current: 0, toggle: () => { } })

const App = () => {
  const [current, setCurrent] = useState(0)
  const toggle = () => setCurrent((current + 1) % languages.length) // Increment and wrap
  return (
    <LanguageContext.Provider value={{ current, toggle }}>
      <Main />
    </LanguageContext.Provider>
  )
}

const Main = () => {
  const { current, toggle } = useContext(LanguageContext)
  return (
    <div>
      <p>Language {languages[current]}</p>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
