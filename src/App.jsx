import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import "./styles/index.css";
        
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <>
      {/*
        Header
          Nav
        Main
          Section
          Article
        Footer
      */}

      {/* <div className='flex flex-column w-full h-full overflow-y-auto overflow-x-hidden smooth-scroll transition_all'> */}
        <Header />
        <Main />
      {/* </div> */}
    </>
  );
}
 
export default App;