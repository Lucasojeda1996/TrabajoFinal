import React, { useState } from 'react'
import HomeScreens from './Screens/HomeScreen/HomeScreens'
import { Routes, Route } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen' 
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'




function App() {

  return (
    <div>
      <Routes>
       
        <Route
					path='/' 
					element={<ContactScreen/>} 
				/>


        <Route
          path='/contacts/:contact_id/messages'
          element={<HomeScreens />}
        />
        <Route
          path='/contacts'
          element={<ContactScreen />}
        />

        <Route
          path='/contacts/:contact_id/detail'
          element={<ContactDetailScreen />}
        />
      
      </Routes>
    </div>
  )
}

export default App
