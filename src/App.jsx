import './App.css';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { Members } from './Pages/members';
import { Tasks } from './Pages/tasks';
import { NavBar } from './Components/navbar';
import { SingleMember } from './Pages/singMemberView';
import { SingleTask } from './Pages/singTaskView';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/members/:username" element={<SingleMember/>} />
          <Route path="/tasks/:title" element={<SingleTask/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
