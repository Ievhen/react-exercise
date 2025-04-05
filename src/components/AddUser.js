import React from "react";

class AddUser extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false,
        }
    }

    render(){
        return (
            <form ref={(el) => this.myFormm = el}>
                <input placeholder="First name" onChange={(e) => this.setState({firstname: e.target.value})} />
                <input placeholder="Last name" onChange={(e) => this.setState({lastname: e.target.value})} />
                <textarea placeholder="Bio" onChange={(e) => this.setState({bio: e.target.value})} />
                <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})} />
                <label htmlFor="isHappy">Are you happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})} />
                <button type="button" onClick={() => {
                    this.myFormm.reset()
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user){
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)
                }}>Add</button>
            </form>
        )
    }
}

export default AddUser