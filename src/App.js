import React, { Component } from 'react';
// import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header  
          title="MENTOR" 
          subTitle="LAHORE, WEB" 
          menuItems={['IT', 'Human Resource', 'Facilities', 'Lab Inventory', 'Library']} />       
        <div>
          <div className="flex justify-around mt-8">
            <div className="container bg-white p-2 rounded border border-grey-light">
              
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
