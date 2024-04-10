import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import About from "./components/About"
import Root from "./components/Root"
import Work from "./components/Work"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element ={<Root/>}>
        <Route index element = {<About/>}/>
        <Route path ="/work" element = {<Work/>}/>
        <Route path = "/resume" element = {<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )

  return (
    <>
    <>
    <RouterProvider router= {router}/>
    <Footer/>
    </>
    </>
  )
}

export default App
