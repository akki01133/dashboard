import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Orders from './components/Orders';
import Analytics from './components/Analytics';
import LineGraph from './components/LineGraph';
import BarGraph from './components/BarGraph';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div style={{ width: '100vw' }}>
        <NavBar />
      </div>
      <div style={{ display: 'flex', }}>
        <div style={{ width: '20%', padding: '10px', height:"100vh" }}>
          <SideBar />
        </div>
        <div style={{ width: '80%', padding: '10px' }}>
          <Analytics />
          <div style={{ display: 'flex', gap: '10px',marginTop:'10px' }}>
            <div style={{ flex: 8}}>
              <LineGraph />
            </div>
            <div style={{ flex: 2 }}>
              <BarGraph />
            </div>
          </div>
          <Orders />
        </div>
      </div>
    </div>
  );
}

export default App;
