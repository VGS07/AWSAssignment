import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Post from './components/Post';
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const App=()=> {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
      <Header />
      <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/add' element={<AddPost/>}/>
            <Route path='/edit/:id' element={<EditPost/>}/>
            <Route path='/post/:id' element={<Post/>}/>
            </Routes>
      </Router>
    <Footer />
     
    </div>
  );
}

export default App;
