import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';

function App() {
  return (
    <div>
      <Header />
        <ProductContainer />
        {/* Footer */}
        <Footer />
    </div>
  );
}

export default App;
