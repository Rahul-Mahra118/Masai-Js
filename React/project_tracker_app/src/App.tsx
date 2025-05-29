import { useEffect } from 'react';
import './App.css'
import Login from './Pages/Login'
import { child, get, ref } from 'firebase/database';
import { auth, db } from '../firebase-config';
import { useAppDispatch } from './hooks/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { setUserState } from './features/Projects/UserSlice';
import { useNavigate } from 'react-router';

function App() {
  const dispatch= useAppDispatch()
const navigate= useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        
        const dbRef = ref(db);
        get(child(dbRef, `users/${user.uid}`)).then(snapshot => {
          if (snapshot.exists()) {
            const {name, email} = snapshot.val();
            dispatch(setUserState({fName: name, email, uid: user.uid, isSignUp: false}))
          }
        })
        navigate('/')
      } 
      else {
        dispatch(setUserState({fName: '', email: '', uid: '', isSignUp: false}))
      }
    })
    return unsubscribe;
  }, [])
  return (
   <>
  <Login/>
   </>
  )
}

export default App
