import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {DashBoard} from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/send" element={<SendMoney />}/>
      </Routes>
    </BrowserRouter>
  )
}