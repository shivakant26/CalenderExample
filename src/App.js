import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Component/Routing';
import { Container } from 'react-bootstrap';
import Footer from './Component/Footer';
import Dashboard from './Pages/dashboard';


function App() {
  var token = localStorage.getItem("token");
  return (
    <div className="App_wr">
            <Router>
              {/* <div className='header'>
                <Container>
                  <Header />
                </Container>
              </div> */}
              <Routing />
            </Router>
            <Footer />

    </div>
  );
}

export default App;
