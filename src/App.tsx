import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './routes/Home'

const About = lazy(() => import ('./routes/About'))
import './styles/App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route
        path='/about'
        element={
          <Suspense fallback={<div>Loading about...</div>}>
            <About/>
          </Suspense>
        }></Route>
    </Routes>
    {/* <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p> */}
    </>
  )
}

export default App
