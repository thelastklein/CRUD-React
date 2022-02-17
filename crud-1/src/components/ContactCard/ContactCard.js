

export function ContactCard(props) {
    
    return (
        <div>
        <div>
            <div>{props.contact.name}</div>
            <div>{props.contact.email}</div>
        </div>
    </div>
    )
}