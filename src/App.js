import './App.css';
import ExaminationSection from './component/ExaminationSection';
import Header from './component/Header';
import SubscribeAndFooter from './component/SubscribeAndFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <ExaminationSection/>
        <SubscribeAndFooter/>
      </header>
    </div>
  );
}

export default App;
