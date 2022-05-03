// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';

// var hello = "Sagar Sharma"

function App(props) {
  return (

      <>
         <NavBar title="Text String" />
         <TextForm colo="black" btn="convert to Upper" btn2="convert to Lower" title="Online Text Converter" />
      </>
   
  );
}

export default App;
