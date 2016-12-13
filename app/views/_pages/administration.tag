<my-administration-page>
  <h2>Administration</h2>

  <my-users-list users={ users } selected={ selectedUser }></my-users-list>
  <button onclick={ freshUser }>New user</button>
  <my-user-form user={ selected }></my-user-form>

  <script>
    var self = this;

    users = [
      { username: 'user1',      status: 'admin' },
      { username: 'user2',      status: 'disabled' },
      { username: 'userC',      status: 'limited' },
      { username: 'test-user',  status: 'limited' },
    ];
    selected = {};

    freshUser(e){
      self.update({ selected: {} });
    }

    updateUser(e){
      self.update();
    }

    addUser(e){
      if(self.selected && self.selected.username && self.selected.status){
        users.push((JSON.parse(JSON.stringify(self.selected))));
      }
      self.update();
    }

    removeUser(e){
      users = users.filter(function(el){ return el != e.item.user; });
      self.update();
    }
  </script>
</my-administration-page>
