import React, { PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { createUser } from '../actions/user';
import FormUser from '../components/FormUser.jsx';
import { push } from 'react-router-redux';


class UserNew extends React.Component {
  constructor(props){
    super(props)

    this.handleCancelForm = this.handleCancelForm.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
  }
  componentDidMount(){
  }

  handleCancelForm(){
    this.props.dispatch(push('/users/'));
  }

  handleCreateUser(user){
    console.log(user)
    this.props.dispatch( createUser(user) )
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isWorking == false){
      this.props.dispatch(push('/users/'));
    }
  }

  render(){
    return <div>
      <h3>New User</h3>
      <FormUser  
        isWorking={this.props.isWorking}
        handleCreateUser={this.handleCreateUser}
        handleCancelForm={this.handleCancelForm}/>

      </div>
  }

}

const mapStateToProps = state =>  {
  const { user } = state;
  return {
    ...user
  }
};

UserNew = connect(mapStateToProps)(UserNew)

export default UserNew
