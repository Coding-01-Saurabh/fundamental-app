// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';

function App() {
  return (
   <>
   <Navbar  title = "Dictionary"/>
  <div className="container my-3"> 
  <Forms headings = "Enter The Text Below"/>
  </div>
   </>
  );
}

export default App;
