import { BrowserRouter, Route ,Routes} from 'react-router-dom';
// import ImageSliderAuto from './ImageSliderAuto';
// import { ImageData } from './images';
// import img1 from './img1.jpg';
// import img5 from './img5.jpg';
import Navbar from './components/Navbar';
import About from './about.js';
import Home from './Home.js';
import Medic from './medic.js';
import Labtests from './labtests.js';
import Search from './components/search.js';
import Fever from './components/fever.js';
import Cold from './components/cold.js';
import Cough from './components/cough.js';
import Bodypains from './components/bodypains.js';
import Bloodpressure from './components/bloodpressure.js';
import Obesity from './components/obesity.js';
import Diabetes from './components/diabetes.js';
import Hairfall from './components/hairfall.js';
import Stress from './components/stress.js';
function App() {
  return (
      <> 
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/medic' element={<Medic />}/>
     <Route path='/labtests' element={<Labtests/>}/>
     <Route path='/search' element={<Search/>}/>
     <Route path='/fever' element={<Fever/>}/>
     <Route path='/cold' element={<Cold/>}/>
     <Route path='/cough' element={<Cough/>}/>
     <Route path='/obesity' element={<Obesity/>}/>
     <Route path='/bodypains' element={<Bodypains/>}/>
     <Route path='/bloodpressure' element={<Bloodpressure/>}/>
     <Route path='/stress' element={<Stress/>}/>
     <Route path='/diabetes' element={<Diabetes/>}/>
     <Route path='/hairfall' element={<Hairfall/>}/>


    </Routes>
    </BrowserRouter>
</>
  )}
export default App;