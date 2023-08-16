// import logo from './logo.svg';
// import './App.css';

import Footer from "./common/Footer";
import Header from "./common/Header";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from "./page/home/Home";
import Gst from "./services/Gst";
import Accounting from "./services/Accounting";
import Coformation from "./services/Coformation";
import Fassi from "./services/Fassi";
import Eway from "./services/Eway";
import Ies from "./services/Ies";
import Itr from "./services/Itr";
import Regis from "./services/Regis";
import Bill from "./services/Bill";
import Pan from "./services/Pan";
import Contact from "./page/about/Contact";
function App() {
  return (
    <div>
       <Router>
       <Header/>
       <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/gst' element={<Gst/>} />
          <Route exact path='/account' element={<Accounting/>} />
          <Route exact path='/coformation' element={<Coformation/>} />
          <Route exact path='/fassi' element={<Fassi/>} />
          <Route exact path='/e-way' element={<Eway/>} />
          <Route exact path='/IEC' element={<Ies/>} />
          <Route exact path='/ITR' element={<Itr/>} />
          <Route exact path='/Registration' element={<Regis/>} />
          <Route exact path='/Billpayment' element={<Bill/>} />
          <Route exact path='/Pan-Card' element={<Pan/>} />
          <Route exact path='/Contact' element={<Contact/>} />

        </Routes>
        <Footer/>

       </Router>
   
  </div>
  );
}

export default App;
