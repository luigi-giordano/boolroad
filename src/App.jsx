import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import TravelPage from "./pages/TravelPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/travel-page/:id' element={<TravelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
