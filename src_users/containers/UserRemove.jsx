import React, { PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { push } from 'react-router-redux';
import { createUpdateUser } from '../actions/user';


class UserEditNew extends React.Component {
  constructor(props){
    super(props)

    this.handleCancel = this.handleCancel.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount(){
    const { routeParams, data } = this.props;
    if(routeParams._id){
      if(!data){ //fech user data
      }
    }
  }

  handleCancel(){
    this.props.dispatch(push('/users/'));
  }

  handleRemove(){
    const { dispatch, data } = this.props;
    let user = {...data, state: 'inactive'};
    dispatch( createUpdateUser(user) )
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isWorking == false){
      this.props.dispatch(push('/users/'));
    }
  }

  render(){
    return <div>
      <h3>Do you want to remove this user</h3>

      <butto className="btn btn-default" onClick={this.handleCancel} style={{marginRight: '10px'}}>Cancelar </butto>
      <butto className="btn btn-danger" onClick={this.handleRemove}>Borar</butto>
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
