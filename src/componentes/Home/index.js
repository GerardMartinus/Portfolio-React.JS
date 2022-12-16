import './estilo.css';

import MenuHeader from '../MenuHeader'
import FESection from '../FESection'
import BESection from '../BESection'
import GamesSection from '../GamesSection'
import Footer from '../Footer'

function Home() {
  return (


    <div classname="App">
      <header classname="App-header">
        <MenuHeader />
      </header>
      <FESection />
      <BESection />
      <GamesSection />
      <footer>
      <Footer />
      </footer>
    </div>

  );
}

export default Home;