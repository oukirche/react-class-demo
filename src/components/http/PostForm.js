import React, {Component} from 'react';
import axios from "axios";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:"",
            title:"",
            body:""
        }
    }
    changeHandler = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    submitHandler = (event)=>{
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                console.log(response);
            })
            .catch(error=>console.log(error));
    }
    render() {
        const {userId,title,body} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="userId" name="userId" value={userId} onChange={this.changeHandler}/>
                    <input type="title" name="title" value={title} onChange={this.changeHandler}/>
                    <input type="body" name="body" value={body} onChange={this.changeHandler}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default PostForm;