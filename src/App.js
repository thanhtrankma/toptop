import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import ParticlesBackground from '~/components/ParticlesBackground';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <ParticlesBackground />
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
