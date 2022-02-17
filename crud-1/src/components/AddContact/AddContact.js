

export function AddContact() {
    state = {
        name: "",
        email:"",
    }
    return (
        <div>
            <h2>Add Client</h2>
            <form>
                <div>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nome" 
                        value={this.state.name} 
                        onChange={(e)=> this.setState({name: e.target.value})} />
                </div>

                <div>
                    <label>Email</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e)=> this.setState({email: e.target.value})}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}