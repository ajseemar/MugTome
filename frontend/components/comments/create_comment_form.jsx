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
            <form className='create-comment-form'>
                <img src={this.props.user.avatar} alt="User Avatar" />
                <div>
                    <input id='comment' type="body" placeholder="Write a comment..." onChange={this.handleInput("body")}/>
                    <p>Press Enter to post.</p>
                </div>
                
            </form>
        );
    }
}

export default CreateCommentForm;