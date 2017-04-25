var users = [{
  id: 1,
  name: 'Johny',
  lastName: 'Garzon ',
  phone: '2343423',
  state: 'active '
}, 
{
  id: 2,
  name: 'Andres',
  lastName: 'Perez ',
  phone: '5465453',
  state: 'active '
},{
  id: 3,
  name: 'Produsprudulo',
  lastName: 'Angarita',
  phone: '3453452',
  state: 'inactive'
}
]
// API Users static class
export default class ApiUsers {
  // get a list of users
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(users);
      }, 1000);
    });
  }

  // add/edit a user
  static add(data) {
    return new Promise(resolve => {
      setTimeout(() => {
        users.push(data)
        resolve(users);
      }, 1000);
    });
  }

  static update(payload) {
    console.log(payload)
    return new Promise(resolve => {
      setTimeout(() => {
        //users = users.map(v => {
          //if(v.id == payload.id){
            //v.data = {...v.data, ...payload.data}
          //}
        //})
        //console.log(users)
        // do something here
        resolve(users);
      }, 1000);
    });
  }
}
