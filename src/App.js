import './App.css';
import Main from './components/Main'
import Story from './components/Story';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Team from './components/Team';
import AboutTeamRosie from './components/AboutTeamRosie';
import AboutTeamHeather from './components/AboutTeamHeather';
import AboutTeamKadak from './components/AboutTeamKadak';
import MissionVision from './components/MissionVision';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/index' element={<Main/>} />
          <Route path="/Story" element={<Story/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/AboutTeamRosie" element={<AboutTeamRosie/>}/>
          <Route path="/AboutTeamHeather" element={<AboutTeamHeather/>}/>
          <Route path="/AboutTeamKadak" element={<AboutTeamKadak/>}/>
          <Route path='/MissionVision' element={<MissionVision/>}/>
          <Route path='/GetInTouch' element={<GetInTouch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
