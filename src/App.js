import './App.css';
import Main from './components/Main'
import Story from './components/Story';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Team from './components/Team';
import AboutTeamRosie from './components/AboutTeamRosie';
import AboutTeamHeather from './components/AboutTeamHeather';
import AboutTeamKadak from './components/AboutTeamKadak';
import AboutTeamLindsay from './components/AboutTeamLindsay';
import AboutTeamRandall from './components/AboutTeamRandall';
import AboutTeamSteve from './components/AboutTeamSteve';
import MissionVision from './components/MissionVision';
import GetInTouch from './components/GetInTouch';
import Gallery from './components/Gallery';
import GalleryBigPic from './components/GalleryBigPic.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/index' element={<Main/>} />
          <Route path="/Story" element={<Story/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/GalleryBigPic" element={<GalleryBigPic/>}/>
          <Route path="/AboutTeamRosie" element={<AboutTeamRosie/>}/>
          <Route path="/AboutTeamHeather" element={<AboutTeamHeather/>}/>
          <Route path="/AboutTeamKadak" element={<AboutTeamKadak/>}/>
          <Route path="/AboutTeamLindsay" element={<AboutTeamLindsay/>}/>
          <Route path="/AboutTeamRandall" element={<AboutTeamRandall/>}/>
          <Route path="/AboutTeamSteve" element={<AboutTeamSteve/>}/>
          <Route path='/MissionVision' element={<MissionVision/>}/>
          <Route path='/GetInTouch' element={<GetInTouch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
