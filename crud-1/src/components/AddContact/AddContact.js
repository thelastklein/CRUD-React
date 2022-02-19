import {useState} from 'react'

export function AddContact(props) {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

const Add = (event) => {
       event.preventDefault();

       
       props.addContactHandler(name,email)
       setName('')
       setEmail('')
   }

    return (
        <div>
            <h2>Add Client</h2>
            <form onSubmit={Add}>
                <div>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nome" 
                        value={name} 
                        onChange={event => setName(event.target.value)} />
                </div>

                <div>
                    <label>Email</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Email"
                    value={email}
                    onChange={event =>setEmail(event.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}