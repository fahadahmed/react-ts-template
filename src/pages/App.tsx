import React from 'react';

import Header from '../components/Header';
import TwitterImg from '../images/twitter-brands.svg';
function App(): JSX.Element {
  return (
    <>
      <Header>                            Hello React 2021                    </Header>
      <img src={TwitterImg} alt="Twitter" width="50" height="50" />
      <p className="test-class">This is a paragraph implementing global styles.</p>
    </>
  );
}

export default App;
