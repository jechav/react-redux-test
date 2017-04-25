import React, { PropTypes } from 'react';

const TableList = ({handleRemove, handleEdit, handleRestore, items = []}) => (
  <div className="tableList-component">
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
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
              <td>{key}</td>
              <td>{v.name}</td>
              <td>{v.lastName}</td>
              <td>{v.phone}</td>
              <td>
                <i className={"fa fa-"+(v.state=='active'?"check-square text-success":"times text-danger")}></i>
                </td>
              <td>
                <button onClick={ handleEdit.bind(null, v) } className="btn btn-info btn-xs" style={{marginRight: '10px'}}>
                  <i className="fa fa-pencil"></i>
                </button>
                {v.state=='active'?
                <button  onClick={ handleRemove.bind(null, v)  } className="btn btn-danger btn-xs" style={{marginRight: '10px'}}>
                  <i className="fa fa-ban"></i>
                </button>
                    :
                <button  onClick={ handleRestore.bind(null, v)  } className="btn btn-primary btn-xs">
                  <i className="fa fa-check"></i>
                </button>
                }
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

