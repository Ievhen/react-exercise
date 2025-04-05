import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    "id": 1,
                    "firstname": "John",
                    "lastname": "Doe",
                    "bio": "Software developer and tech enthusiast.",
                    "age": 28,
                    "isHappy": true
                },
                {
                    "id": 2,
                    "firstname": "Jane",
                    "lastname": "Smith",
                    "bio": "Digital marketer with a passion for creativity.",
                    "age": 34,
                    "isHappy": false
                },
                {
                    "id": 3,
                    "firstname": "Alice",
                    "lastname": "Johnson",
                    "bio": "Graphic designer and art lover.",
                    "age": 25,
                    "isHappy": true
                },
                {
                    "id": 4,
                    "firstname": "Bob",
                    "lastname": "Brown",
                    "bio": "Project manager with a focus on efficiency.",
                    "age": 40,
                    "isHappy": false
                },
                {
                    "id": 5,
                    "firstname": "Charlie",
                    "lastname": "Davis",
                    "bio": "Content writer and traveler.",
                    "age": 30,
                    "isHappy": true
                }
            ]
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
        const i = allUsers.findIndex((el) => el.id == user.id)
        allUsers[i] = user
        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }
}

export default App