import './App.css';
import Header from './Header';
import Footer from './Footer';
import { StatistiqueLignes, StatistiqueArrets, StatistiqueCommunes } from './Statistique';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='contenu'>
        <p>Bienvenue ! Cette application vous aide à trouver
          votre ligne de bus à Dakar.
        </p>
        <div className='stats-container'>
          <StatistiqueLignes />
          <StatistiqueArrets />
          <StatistiqueCommunes />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
