import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { routes } from './routes/routes'
function App() {

  return (
    <div className="min-h-screen flex justify-center items-center bg-background">

      {/* Header  */}
      <div className="absolute top-0 w-full z-10">
        <Header />
      </div>
      {/* Routes  */}
      <Routes>
        {routes.map(route => {
          return (
            <Route path={route.path} key={route.module} element={<route.component />} />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
