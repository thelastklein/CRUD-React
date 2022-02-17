import { ContactCard } from "../ContactCard/ContactCard"


export function ContactList(props) {
    

    const rederContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        )
    })
    
    
    return (
        <div>
            {rederContactList}
        </div>
    )
}