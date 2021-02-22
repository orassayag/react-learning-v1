import React from 'react';

const AuthContext = React.createContext({ status: false, login: () => { } });

export default AuthContext;