import React from 'react';

class CreateCommentForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            body: "" ,
            commentable_type: this.props.type,
            commentable_id: this.props.typeId
        };
    }

    handleInput (field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    render () {
        return (
            <form>
                <img src={this.props.user.avatar} alt="User Avatar" />
                <input type="body" placeholder="Write a comment..." onChange={this.handleInput("body")}/>
            </form>
        );
    }
}

export default CreateCommentForm;