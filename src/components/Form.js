import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            comment:"",
            skills:""
        }
    }
    handleUsernameChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange = (event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleSkillsChange = (event)=>{
        this.setState({
            skills: event.target.value
        })
    }
    handleFormSubmit = (e)=>{
        e.preventDefault();
        alert(`${this.state.username} ${this.state.comment} ${this.state.skills}`)

    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label htmlFor="">Username : </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="">Comment : </label>
                    <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label htmlFor="">Skills</label>
                    <select value={this.state.skills} onChange={this.handleSkillsChange} name="skills" id="skills">
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}

export default Form;