import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import { store } from './store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
