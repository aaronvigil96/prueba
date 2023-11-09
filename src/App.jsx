import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrdersPage from './pages/OrdersPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPage/>}/>
        <Route path="/auth/register" element={<RegisterPage/>}/>
        <Route path="/" element={<HomePage/>}>
          <Route path="/orders" element={<OrdersPage/>}/>
          <Route path="/" element={<DashboardPage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
