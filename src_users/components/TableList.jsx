import React, { PropTypes } from 'react';

const TableList = ({handleRemove, handleEdit, items = []}) => (
  <div className="tableList-component">
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>LastName</th>
          <th>Phone</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((v, key) => (
            <tr key={key}>
              <td>{v.name}</td>
              <td>{v.lastName}</td>
              <td>{v.phone}</td>
              <td>{v.state}</td>
              <td>
                <button onClick={ handleEdit.bind(null, v) } className="btn btn-info btn-xs" style={{marginRight: '10px'}}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button  onClick={ handleRemove.bind(null, v)  } className="btn btn-danger btn-xs">
                  <i className="fa fa-times"></i>
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    { /* <pre>{ JSON.stringify(items, null, 2) }</pre> */ }
  </div>
)

export default TableList;

