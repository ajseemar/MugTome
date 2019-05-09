import React from 'react';
import { debug } from 'util';

class CreatePostForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = this.props.post;
    }

    handleInput (field) {
        return e => {
            e.preventDefault();
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.createPost(this.state);
        this.setState(this.props.post);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h3>
                    <i className="fas fa-pencil-alt"></i>
                    Create Post
                </h3>
                <div className="post-input-container">
                    <img src={this.props.user.avatar} alt="Avatar"/> 
                    <textarea placeholder="What's on your mind?" value={this.state.body} onChange={this.handleInput("body")}></textarea>
                </div>
                <input type="submit" value="Share"/>
            </form>
        );
    }
}

export default CreatePostForm;