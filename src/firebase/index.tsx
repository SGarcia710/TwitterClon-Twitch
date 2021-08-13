import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBp3JhXKuM4SevMG5py8IfCfIw7WY0E9uY',
  authDomain: 'fir-login-reactnative.firebaseapp.com',
  projectId: 'fir-login-reactnative',
  storageBucket: 'fir-login-reactnative.appspot.com',
  messagingSenderId: '410456111137',
  appId: '1:410456111137:web:7f2af597bb6aec538fcb60',
  measurementId: 'G-QV7621WQQS',
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
}

export default Firebase;
