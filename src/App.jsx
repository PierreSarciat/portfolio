import './App.scss';
import { Outlet } from "react-router-dom";
import Header from '@components/header.jsx';
import Footer from '@components/footer.jsx';



function App() {

  return (
    <div className='App'>
      <div className='home-background'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div >
  );
}

export default App;





