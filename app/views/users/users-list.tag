<my-users-list>
  <table>
    <tr>
      <th>#</th>
      <th>username</th>
      <th>status</th>
      <th>actions</th>
    </tr>
    <tr each={ user, i in users }>
      <td><button onclick={ selectUser }>{ i }</button></td>
      <td>{ user.username }</td>
      <td>{ user.status }</td>
      <td><button onclick={ parent.parent.removeUser }>Remove</button></td>
    </tr>
  </table>

  <script>
    var self = this;

    selectUser(e){
      self.parent.update({ selected: e.item.user });
    }
  </script>
</my-users-list>
