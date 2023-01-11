import logo from './logo.svg';
import './App.css';

import { Navbar, Header, Packages, Services, Contact1, About, Locations, Gallery, Contact2, Cta } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Packages />
      <Services />
      <Contact1 />
      <About />
      <Cta />
      <Locations />
      <Gallery />
      <Contact2 />
    </div>
  );
}

export default App;
