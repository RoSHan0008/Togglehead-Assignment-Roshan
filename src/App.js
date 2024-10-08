import './App.css';
import ExaminationSection from './component/ExaminationSection';
import Faq from './component/Faq';
import Header from './component/Header';
import SubscribeAndFooter from './component/SubscribeAndFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <ExaminationSection/>
        <Faq/>
        <SubscribeAndFooter/>
      </header>
    </div>
  );
}

export default App;
