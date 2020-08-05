import React from 'react';
 
class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleChange(event)}
            name="firstName"
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleChange(event)}
            name="lastName"
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}
 
export default Form;