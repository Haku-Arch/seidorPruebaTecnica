import './App.css';
import Navbar from './component/Navbar'
import Stepper from './component/Stepper'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container">
          <div className="row">
            <div className='vstack gap-2 col-md-5 mx-auto'>
              <div className='vstack gap-2 col-md-5 mx-auto'>
                <div className="mt-4">
                  <Stepper />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;