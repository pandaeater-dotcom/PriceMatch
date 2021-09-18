// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Homepage/Banner';
import Navbar from './components/Homepage/Navbar';
import UploadImage from './UploadImage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <UploadImage />
    </div>
  );
}

export default App;
