import { AuthProvider } from './components/Auth-Context/AuthContext';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import PortalCard from './components/Home/PortalCard/PortalCard';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <PortalCard/>
      <Header></Header>
      <Home></Home>
    </AuthProvider>
  );
}

export default App;
