import Nav from './components/Nav'
import About from './components/About'
import Rarity from './components/Rarity'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'
import Team from './components/Team'
import Footer from './components/Footer'

import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box overflowX='hidden'>
      <Nav />
      <About />
      <Rarity />
      <Roadmap />
      <FAQ />
      <Team />
      <Footer />
    </Box>
  );
}

export default App;
