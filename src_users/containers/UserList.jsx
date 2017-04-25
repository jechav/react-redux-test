import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchUsers } from '../actions/users';
import { createUpdateUser, setUser } from '../actions/user';
import TableList from '../components/TableList.jsx'

import { push } from 'react-router-redux';


class UsersList extends React.Component {
  constructor(props){
    super(props)
    this.handleNew = this.handleNew.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRestore = this.handleRestore.bind(this);

  }
  componentDidMount(){
    const { dispatch } = this.props
    dispatch( fetchUsers() );
  }

  handleNew(){
    const { dispatch } = this.props
    dispatch( setUser() )
    dispatch( push('/users-new/') )
  }

  handleEdit(v){
    const { dispatch } = this.props
    dispatch( setUser(v) )
    dispatch( push('/users-edit/'+v._id) )
  }

  handleRemove(v){
    console.log(v)
    if(confirm('Are you sure to remove this item?')){
      let data = {...v, state: 'inactive'};
      this.props.dispatch( createUpdateUser(data) )
    }
  }

  handleRestore(v){
    if(confirm('Are you sure to restore this item?')){
      let data = {...v, state: 'active'};
      this.props.dispatch( createUpdateUser(data) )
    }
  }
  //componentWillReceiveProps(nextProps){
  //}

  render(){
    const { items, isFetching, message } = this.props;
    return <div>
      <h3>Users list</h3>
      <button onClick={this.handleNew} className="btn btn-primary">
        New User
      </button>
      <br />
      <div className="state"> {isFetching?'Cargando...':message} </div>
      <TableList 
        handleRemove={this.handleRemove}
        handleEdit={this.handleEdit}
        handleRestore={this.handleRestore}
        items={items}/>
      </div>
  }

}

const mapStateToProps = state =>  {
  const { users, user } = state;
  return {
    ...users,
    message: user.message,
    done: user.done
  }
};

UsersList = connect(mapStateToProps)(UsersList)

export default UsersList
