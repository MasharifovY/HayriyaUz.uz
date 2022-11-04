import {Route, Routes,} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Payment from "./components/Payment/Payment";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
        <Navbar />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="payment" element={<Payment />} />
          </Routes>
          <Footer />
    </>
  );
}

export default App;
