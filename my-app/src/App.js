import css from './App.module.css';
// import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentAPI from './components/ContentAPI';
import ContentHooks from './components/ContentHooks';


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      <ContentAPI />
      
      
      
    </div>
  );
}

export default App;