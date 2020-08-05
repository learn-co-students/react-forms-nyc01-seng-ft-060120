import React from 'react';

class Form extends React.Component {


  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {
  //     firstName: this.state.firstName, lastName: this.state.lastName
  //   }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }


  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
              type="text" 
              name="firstName" 
              onChange={event => this.props.handleChange(event)} 
              value={this.props.formData.firstName} 
          />
          <input 
              type="text" 
              name="lastName" 
              onChange={event => this.props.handleChange(event)} 
              value={this.props.formData.firstName} 
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Form;