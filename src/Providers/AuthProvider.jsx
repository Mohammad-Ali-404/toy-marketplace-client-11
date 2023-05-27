/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
export const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const GoogleProvider = new GoogleAuthProvider()


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log("Logged in user inside auth statea observer", loggedUser)
      setUser(loggedUser);
      setLoading(false);

    })
    return () => {
      unsubscribe();
    }
  }, [])

  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider)
  };


  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name, photoURL: photoURL
    })
      .then(() => {
        console.log('user name and photo URL updated');
      })
      .catch(error => {
        console.log(error)
      })
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    updateUserData
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
