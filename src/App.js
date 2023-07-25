import './App.css';
import Main from './components/Main'
import Story from './components/Story';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Team from './components/Team';
import AboutTeamMember from './components/AboutTeamMember';
import MissionVision from './components/MissionVision';
import GetInTouch from './components/GetInTouch';
import Gallery from './components/Gallery';
import GalleryBigPic from './components/GalleryBigPic.jsx';
import CarbonFootprint from './components/CarbonFootprint';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/index' element={<Main/>} />
          <Route path="/Story" element={<Story/>}/>
          <Route path="/Team/*" element={<Team/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/GalleryBigPic" element={<GalleryBigPic/>}/>
          <Route path="/AboutTeamMember" element={<AboutTeamMember/>}/>
          <Route path='/MissionVision' element={<MissionVision/>}/>
          <Route path='/GetInTouch' element={<GetInTouch/>}/>
          <Route path='/CarbonFootprint' element={<CarbonFootprint/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
