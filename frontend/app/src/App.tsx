import React, { useEffect } from 'react';
import 'sanitize.css';
import styles from './App.module.scss';
import Router from './Router';
import { gapi } from 'gapi-script';

const googleClientId = String(process.env.REACT_APP_GOOGLE_CLIENT_ID);

function App() {
  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          clientId: googleClientId,
          scope: '',
        })
        .then(() => {
          const auth = gapi.auth2.getAuthInstance();
        });
    });
  }, []);

  return (
    <div className={styles.container}>
      <Router />
    </div>
  );
}

export default App;
