// import { initializeApp } from 'firebase/app'
// import { getDatabase } from 'firebase/database'
import firebase from 'firebase/app'
import 'firebase/database'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const db = firebaseApp.database() // getDatabase()
export default firebaseApp
