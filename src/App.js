import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Gallery />

      <Footer />
    </div>
  );
}

export default App;
