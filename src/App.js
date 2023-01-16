import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Bannerr from './Components/Banner';
import ChooseRugs from './Components/ChooseRugs';
import StyleRugs from './Components/StyleRugs';
import SizeRugs from './Components/SizeRugs';
import ColorRugs from './Components/ColorRugs';
import ClientReviews from './Components/ClientReviews';
import TakeWorld from './Components/TakeWorld';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main id='main'>
        <Bannerr />
        <ChooseRugs />
        <StyleRugs />
        <SizeRugs />
        <ColorRugs />
        <ClientReviews />
        <TakeWorld />
      </main>
      <Footer />
    </div>
  );
}

export default App;
