import './App.css';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Steps from './components/steps/Steps';
import Ready from './components/ready/Ready';
import Footer from './components/footer/Footer';
import Tools from './components/tools/Tools';
import Cart from './components/cart/Cart';
import Pricing from './components/pricing/Pricing';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Section></Section>
      <Tools></Tools>
      <Steps></Steps>
      <Pricing></Pricing>
      <Ready></Ready>
      <Footer></Footer>
      <Cart></Cart>
    </>
  )
}

export default App
