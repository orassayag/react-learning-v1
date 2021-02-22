import React, { useState } from 'react';
import Todo from './components/Todo.jsx';
import Header from './components/Header.jsx';
import Auth from './components/Auth.jsx';
import AuthContext from './auth-context';

const App = props => {

  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const switchPage = (pageName) => {
    setPage(pageName);
  }

  const login = () => {
    setAuthStatus(true);
  };

  return (
    <AuthContext.Provider value={{ status: authStatus, login: login }}>
      <div className="App">
        <Header
          onLoadTodos={switchPage.bind(this, 'todos')}
          onLoadAuth={switchPage.bind(this, 'auth')} />
        <hr />
        {page === 'auth' ? <Auth /> : <Todo />}
      </div>
    </AuthContext.Provider>
  );
};

export default App;