import './App.css';
import { Provider } from 'react-redux';
import store from './reducer/store';
import UserProfile from './components/UserProfile';
import ChatSideBar from './components/ChatSideBar'
import UserAnalytics from './components/UserAnalytics';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserProfile />
        <ChatSideBar chatType="activeChats" />
        <ChatSideBar chatType="archivedChats"/>
        <UserAnalytics></UserAnalytics>
      </Provider>
    </div>
  );
}

export default App;
