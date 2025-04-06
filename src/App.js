import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

const endpoint = '/api/users?page=1'
const baseUrl = 'https://reqres.in' + endpoint

class App extends React.Component {
    constructor(props){
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({users: res.data.data})
        })

        this.state = {
            users: []
        }
        this.lastId = this.state.users.length
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (
            <React.StrictMode>
                <Header title={'Users list'} />
                <main>
                    <Users users={this.state.users}
                        onEdit={this.editUser} 
                        onDelete={this.deleteUser} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </React.StrictMode>
        )
    }

    addUser(user){
        // this.setState({lastId: this.state.lastId + 1})
        // this.state.lastId = this.state.lastId + 1
        this.lastId = this.lastId + 1
        const id = this.lastId
        console.log(id)
        this.setState({users: [...this.state.users, {id, ...user}]})
    }

    deleteUser(id){
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user){
        let allUsers = this.state.users
        const i = allUsers.findIndex((el) => el.id === user.id)
        allUsers[i] = user
        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }
}

export default App