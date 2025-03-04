
import { BrowserRouter, Routes , Route} from 'react-router-dom'

//------------routes-----------------
import Development from './components/Courses/Development'
import Design from './components/Courses/Design'
import Business from './components/Courses/Business'
import AI from './components/Courses/AI'
import Data from './components/Courses/Data'
import NotFoundPage from './components/NotFound/NotFound'

//------------------------------------

import Homepage from './Pages/homepage.jsx';
import AllCourses from './components/Courses/AllCourses/AllCourses.jsx';
import About from './components/AboutUrl/AboutUrl';
const App = () => {


  return (
    <>
          <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/development' element={<Development/>}></Route>
          <Route path='/design' element={<Design/>}></Route>
          <Route path='/business' element={<Business/>}></Route>
          <Route path='/ai' element={<AI/>}></Route>
          <Route path='/data' element={<Data/>}></Route>
          <Route path='/courses' element={<AllCourses/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    <div>
    </div>
    </>
  );
}

export default App;
