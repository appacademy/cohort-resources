import React from 'react';

/*
Export a `PostForm` presentational component that creates a form to either
create or edit a post (it will be used by two separate containers). The form
should indicate whether it is a create or edit form based on the `formType`
prop. The form should initialize state to the `post` passed in from props. Use
controlled inputs and trigger the `action` passed in from the container upon
submission. Use a text input for the title and a textarea for the body.
*/

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        // {
        //     title: 'blah',
        //     body: 'blahaaaaa'
        // }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input onChange={this.handleChange('title')} type="text" value={this.state.title}/>
                    </label>
                    <label>Body
                        <textarea onChange={this.handleChange('body')} value={this.state.body}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default PostForm;
