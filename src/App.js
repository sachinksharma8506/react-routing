import './App.css';
import About  from './Component/About';
import Contact from './Component/Contact';
import error1 from './Component/Error';
import Navbar from './Component/Navbar';
import {Routes, Route} from 'react-router-dom'
import Search from './Component/Search';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
     <Routes>
       {/* <Route exact path = "/" component = {about}></Route>*/}
        <Route path = "/contact" render = {() => <Contact pagename="Contact"></Contact>}></Route>{/* We will use the Route Render method when we will partially update the component and need to pas some props. */}
       <Route exact path="/" component = {() => <About pagename= "about" />}></Route> {/* We will use Render component method when we no need to pass any prop and when we need to create component every time. */}
       <Route path ="/routing" component = {Navbar}></Route>
       <Route path ="/Search/:FName/:LName" component = {Search}></Route>
       <Route component={error1}></Route>
     </Routes>
    </div>
  );
}

export default App;
