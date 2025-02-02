import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState(null); 

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
