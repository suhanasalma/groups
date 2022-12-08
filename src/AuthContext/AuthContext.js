import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";




export const SharedContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();



const AuthContext = ({children}) => {
   const [user,setUser] = useState('')
   const [loading,setLoading] = useState(true)


   const createUser = (email,password)=>{
          setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);

   }

   const logOut = () => {
     setLoading(true);
     return signOut(auth);
   };

    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };

   useEffect(() => {
     const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
     });
     return () => unSubscribed();
   }, []);





   const authInfo = {user, createUser, signIn, logOut, googleSignIn };
   return (
     <div>
       <SharedContext.Provider value={authInfo}>
         {children}
       </SharedContext.Provider>
     </div>
   );
};

export default AuthContext;