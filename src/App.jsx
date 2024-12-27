//for navegation 
import {Link} from 'react-router-dom'
import {BrowserRouter  as Router , Routes,Route} from 'react-router-dom';
import myimage from './assets/profile-image.jpeg';
import Header from './Header';
import MainPage from './MainPage';
import UserGreeting from './UserGreetion';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import Features from './Featuers';
import Support from './Support';
import Enterprise from './Enterprise';


function App() {
  return (
    <>
        <Router>

        <Header></Header>
       
        <Routes>
        <Route index element={<MainPage></MainPage>}/>
        <Route path="features" element={<Features></Features>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="enterprise" element={<Enterprise/>}/>
        </Routes>

      
        </Router>



     
    </>
  );
}

export default App;
