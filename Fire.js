import firebase from 'firebase'               
import '@firebase/firestore'

console.disableYellowBox = true;

const firebaseConfig = {
  apiKey: "AIzaSyD0ZZs9r2_sVY9SPmydrTFSq-SWSFEvGWY",
    authDomain: "xlight-4a88d.firebaseapp.com",
    databaseURL: "https://xlight-4a88d.firebaseio.com",
    projectId: "xlight-4a88d",
    storageBucket: "xlight-4a88d.appspot.com",
    messagingSenderId: "176202476449",
    appId: "1:176202476449:web:ab6b294f232168ced4b9e0",
    measurementId: "G-V50834WWF4"
}

class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(null, user);
      } else {
        firebase.auth().signInAnonymously().catch(error => {
          callback(error);
        });
      }
    })
  }

  getLists(callback) {
    let ref = this.ref.orderBy('name');

    this.unsubscribe = ref.onSnapshot(snapshot => {
      lists = []

      snapshot.forEach(doc => {
        lists.push({id: doc.id, ...doc.data()})
      })

      callback(lists);
    })
  }

  addList(list) {
    let ref = this.ref

    ref.add(list);
  }

  updateList(list) {
    let ref = this.ref

    ref.doc(list.id).update(list)
  }

  get userId() {
    return firebase.auth().currentUser.uid
  }

  get ref() {
    return firebase.firestore().collection("users").doc(this.userId).collection("lists");
  }

  detach() {
    this.unsubscribe();
  }
}

export default Fire