import React, { PropTypes } from 'react';


class FormUser extends React.Component {
  constructor(props) {
    super(props);
    if(props.data){
      this.state = props.data;
    }else{
      this.state = {
        name: '',
        lastName: '',
        phone: '',
        state: '',
        msgs: ''
      };
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleActiveChange = this.handleActiveChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.handleCancelForm = this.props.handleCancelForm;
    this.handleCreateUser = this.props.handleCreateUser;

  }
  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleActiveChange(e){
    this.setState({
      state: e.currentTarget.value
    })
  }

  handleFormSubmit(e){
    e.preventDefault();
    //validate
    const fields = ['name', 'lastName', 'phone', 'state']
    var payLoad = {};
    if(this.props.data) {
      payLoad._id = this.props.data._id
    }
    for(let i=0; i<fields.length; i++){
      let f = fields[i]
      payLoad[f] = this.state[f]; //fill payload
      if(!this.state[f] || this.state[f] == '') {
        this.setState({ msgs: 'The field ' + f + ' is required' })
        return false;
      }
    }

    this.setState({ msgs: ''})
    this.handleCreateUser(payLoad)
  }

  render(){
    return <div className="formUser-component">
      {this.state.msgs?<div className="alert alert-danger">{this.state.msgs}</div>:''}
      <form action="" onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" 
            id="name"
            className="form-control"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}/>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" 
            id="lastName"
            className="form-control"
            name="lastName"
            onChange={this.handleInputChange}
            value={this.state.lastName}/>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" 
            id="phone"
            className="form-control"
            name="phone"
            onChange={this.handleInputChange}
            value={this.state.phone}/>
        </div>

        <div className="form-group">
          <label className="radio-inline"><input type="radio" 
              value="active"
              checked={this.state.state == 'active'}
              onChange={this.handleActiveChange}
              name="state" />
            Active
          </label>
          <label className="radio-inline"><input type="radio"
              value="inactive"
              checked={this.state.state == 'inactive'}
              onChange={this.handleActiveChange}
              name="state" />
            Inactive
          </label>
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-primary float-right"
            disabled={this.props.isWorking}
            value="Save"/>

          <button
            className="btn btn-link float-left"
            type="button"
            disabled={this.props.isWorking}
            onClick={this.handleCancelForm}>Cancel «</button>
        </div>
      </form>
    </div>
  }
}

export default FormUser;

