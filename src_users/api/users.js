// API Users static class
export default class ApiUsers {
  // get a list of users
  static getList() {
    return fetch('/api/users').then(r => r.json() )
  }

  // add/edit a user
  static addEdit(data) {
    console.log('enviando', data)
    return fetch('/api/users', 
      { method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)})
      .then(r => r.json() )
  }
}
