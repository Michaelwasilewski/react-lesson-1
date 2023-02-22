import './App.css';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import PictureGrid from './components/Picturegrid';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <PictureGrid />
    </div>
  );
}
export default App;
