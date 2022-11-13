// import { useState, creteContext, createContext } from "react";
// export let AuthContext = createContext();

// function AuthContextProvider({ children }) {
//   let [state, setState] = useState({
//     isAuth: false,
//     token: null,
//   });
//   let loginUser = (token) => {
//     setState({
//       ...state,
//       isAuth: true,
//       token,
//     });
//   };
//   let logoutUser = () => {
//     setState({
//       ...state,
//       isAuth: false,
//       token: null,
//     });
//   };
//   return (
//     <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContextProvider;
