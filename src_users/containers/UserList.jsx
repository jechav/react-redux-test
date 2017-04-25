import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchUsers } from '../actions/users';
import { updateUser } from '../actions/user';
import TableList from '../components/TableList.jsx'


class UsersList extends React.Component {
  componentDidMount(){
    const { items, dispatch } = this.props
    if(!items) dispatch( fetchUsers() );
  }

  handleEdit(v){
  }

  handleRemove(v){
    console.log(v)
    if(confirm('Are you sure?')){
      let data = {active: false};
      this.props.dispatch( updateUser(v.id, data) )
    }
  }

  render(){
    const { items, isFetching, message } = this.props;
    return <div>
      <h3>Users list</h3>
      <Link to={'/users-new/'} className="btn btn-primary">
        New User
      </Link>
      <br />
      <div className="state"> {isFetching?'Cargando...':message} </div>
      <TableList 
        handleRemove={this.handleRemove.bind(this)}
        handleEdit={this.handleEdit.bind(this)}
        items={items}/>
      </div>
  }

}

const mapStateToProps = state =>  {
  const { users } = state;
  return {
    ...users
  }
};

UsersList = connect(mapStateToProps)(UsersList)

export default UsersList
