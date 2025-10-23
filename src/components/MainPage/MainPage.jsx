import Navbar from '../Navbar/Navbar';
import Herosection from '../Herosection';
import About from '../About';
import KitchenAbout from '../KitchenAbout';
import Icon from '../Icon';
import FoodSection from '../FoodSection';
import Footer from '../Footer';
import Seasion from '../Seasion'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <KitchenAbout />
      <Icon />
      <Seasion/>
      <FoodSection />
      <Footer />
    </div>
  );
}

export default MainPage
