import React, { useState, useContext, createContext, useReducer } from "react";

const LoginContext = createContext({});

export function ProvideLogin({ children }) {
  const loginActive = useProvideLogin();
  return (
    <LoginContext.Provider value={loginActive}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => {
  return useContext(LoginContext);
};

function useProvideLogin() {
  const [loginActive, setLoginActive] = useState(false);
  
  //   const { address } = useContext(UserContext);
  //   const open = () => setLoginActive(true);
  //   const close = () => setLoginActive(false);

  //   return (
  //     <button type="button" className="btn" onClick={() => open}>
  //       {address ? (
  //         <span>
  //           {" "}
  //           {address.substring(0, 5)}… {address.substring(address.length - 4)}{" "}
  //         </span>
  //       ) : (
  //         <span>Connect Wallet</span>
  //       )}
  //     </button>
  //   );


  const onLoginActive = (e) => {
    e.preventDefault();
    return loginActive;
  };

  return {
    loginActive,
    onLoginActive,
    setLoginActive
  };
}

// export const LoginProvider = () => {

// };
