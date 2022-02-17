import './App.css'
import {useState} from "react"
import {Header} from "./components/Header/Header"
import {AddContact} from "./components/AddContact/AddContact"
import {ContactList} from "./components/ContactList/ContactList"

function App() {
 const [contacts, setContacts] = useState([])

  return (
    <>
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
    </>
  );
}

export default App;
