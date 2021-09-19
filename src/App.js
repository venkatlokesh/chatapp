import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './reducer/store';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserProfile />
      </Provider>
    </div>
  );
}

export default App;
