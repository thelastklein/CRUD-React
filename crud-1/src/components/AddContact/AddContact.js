

export function AddContact() {
    return (
        <div>
            <h2>Add Client</h2>
            <form>
                <div>
                    <label>Nome</label>
                    <input type="text" name="name" placeholder="Nome"/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="name" placeholder="Email"/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}