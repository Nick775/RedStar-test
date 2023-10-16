import React from 'react'
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import styles from './styles/modules/app.module.scss'
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader'

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem'
          }
        }}
      />
    </>
  )
}

export default App
