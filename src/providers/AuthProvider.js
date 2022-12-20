import React, { createContext, useContext, useEffect, useState } from "react";
import * as Realm from "realm-web";

const APP_ID = "chvsapplication-mdwdm";

const app = new Realm.App({ id: APP_ID });

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(app.currentUser);

  useEffect(() => {
    if (!user) {
      return;
    }
  }, [user]);
  //   SIGN IN USER TO THE APP
  const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  // REGISTER USER
  const signUp = async (email, password, { ...customUserData }) => {
    try {
      const createUser = await app.emailPasswordAuth.registerUser({
        email,
        password,
      });
      if (!!createUser) {
        console.log(!!createUser);
      }
      console.log("New user is: ", createUser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  const auth = useContext(AuthContext);
  // console.log(auth);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider?");
  }
  return auth;
};

export { useAuth };
