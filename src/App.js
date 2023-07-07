import './App.css';
import { Steppercomponent } from './components/stepper/Steppercomponent';
import { Provider } from 'react-redux';
import store from './components/store/store';




function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Steppercomponent/>
    
   
    </Provider>




    </div>
  );
}

export default App;





