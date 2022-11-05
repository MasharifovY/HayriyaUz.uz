import {Route, Routes,BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Payment from "./components/Payment/Payment";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
