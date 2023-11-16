import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlogTop } from '../components/BlogTop';
import { BlogContainer } from '../components/BlogContainer';

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <BlogTop />
        <BlogContainer />
      </div>


      <Footer />
    </>
  )
}
export default Home;
