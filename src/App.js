import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/DarkTheme.css'
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import WelcomePage from './components/others/WelcomePage';
import Users from './components/others/Users';
import CreateGroups from './components/others/CreateGroups';
import WorkArea from './components/workarea/WorkArea';
import Groups from './components/others/Groups';
import { useSelector } from 'react-redux';

function App() {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'App' + ((lightTheme) ? '' : ' dark-app')}>
      {/* <MainContainer /> */}
      {/* <Login /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<WelcomePage />}></Route>
          <Route path="chat/:id" element={<WorkArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="creategroups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
