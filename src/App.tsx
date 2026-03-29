import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
}
