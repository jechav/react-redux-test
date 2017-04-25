import React, { PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { createUpdateUser } from '../actions/user';
import FormUser from '../components/FormUser.jsx';
import { push } from 'react-router-redux';


class UserEditNew extends React.Component {
  constructor(props){
    super(props)

    this.handleCancelForm = this.handleCancelForm.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
  }
  componentDidMount(){
    const { routeParams, data } = this.props;
    if(routeParams._id){
      if(!data){ //fech user data
      }
    }
  }

  handleCancelForm(){
    this.props.dispatch(push('/users/'));
  }

  handleCreateUser(user){
    console.log(user)
    this.props.dispatch( createUpdateUser(user) )
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isWorking == false){
      this.props.dispatch(push('/users/'));
    }
  }

  render(){
    const userId = this.props.routeParams._id;
    return <div>
      <h3>{userId? 'Edit User': 'New User'}</h3>
      <FormUser  
        data={this.props.data}
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

UserEditNew = connect(mapStateToProps)(UserEditNew)

export default UserEditNew
