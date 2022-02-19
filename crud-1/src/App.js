import './App.css'
import {useState} from "react"
import {Header} from "./components/Header/Header"
import {AddContact} from "./components/AddContact/AddContact"
import {ContactList} from "./components/ContactList/ContactList"

function App() {
 const [contacts, setContacts] = useState([])

 const addContactHandler = (name,email) => {
   console.log(name,email)
   let newContact = {
     name,
     email
   }
   setContacts([...contacts, newContact])
 }

  return (
    <>
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </>
  );
}

export default App;
