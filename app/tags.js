riot.tag2('my-404-page', '<h2>Not found</h2> <p>Page content missing.</p>', '', '', function(opts) {
});

riot.tag2('my-administration-page', '<h2>Administration</h2> <my-users-list users="{users}" selected="{selectedUser}"></my-users-list> <button onclick="{freshUser}">New user</button> <my-user-form user="{selected}"></my-user-form>', '', '', function(opts) {
    var self = this;

    users = [
      { username: 'user1',      status: 'admin' },
      { username: 'user2',      status: 'disabled' },
      { username: 'userC',      status: 'limited' },
      { username: 'test-user',  status: 'limited' },
    ];
    selected = {};

    this.freshUser = function(e){
      self.update({ selected: {} });
    }.bind(this)

    this.updateUser = function(e){
      self.update();
    }.bind(this)

    this.addUser = function(e){
      if(self.selected && self.selected.username && self.selected.status){
        users.push((JSON.parse(JSON.stringify(self.selected))));
      }
      self.update();
    }.bind(this)

    this.removeUser = function(e){
      users = users.filter(function(el){ return el != e.item.user; });
      self.update();
    }.bind(this)
});

riot.tag2('my-home-page', '<h2>Homepage</h2>', '', '', function(opts) {
});

riot.tag2('my-schedules-page', '<h2>Schedules</h2>', '', '', function(opts) {
});

riot.tag2('my-footer', '<footer> <p>footer!</p> </footer>', '', '', function(opts) {
});

riot.tag2('my-header', '<header> <p>HEADER !!</p> </header>', '', '', function(opts) {
});

riot.tag2('my-navigation', '<ul> <li><a href="#!home">home</a></li> <li><a href="#!administration">administration</a></li> <li><a href="#!schedules">schedules</a></li> </ul>', '', '', function(opts) {
});

riot.tag2('my-app', '<my-header></my-header> <my-navigation></my-navigation> <main class="page-content"></main> <my-footer></my-footer>', '', '', function(opts) {
    var self = this;

    self.on('mount', function(){
      route('/home', function(){
        riot.mount('.page-content', 'my-home-page');
      });

      route('/administration', function(){
        riot.mount('.page-content', 'my-administration-page');
      });

      route('/404', function(){
        riot.mount('.page-content', 'my-404-page');
      });

      route('*', function(unused){
        route('404');
      });

      route('',function(any){
        route('home');
      });

      route.base('#!');
      route.stop();
      route.start(true);
    });
});

riot.tag2('my-user-form', '<form onsubmit="{formSubmit}"> <label> <input type="text" name="username" riot-value="{opts.user.username || \'\'}" onkeyup="{updateUsername}"> </label> <label> <input type="text" name="status" riot-value="{opts.user.status || \'\'}" onkeyup="{updateStatus}"> </label> <button show="{opts.user.username}" onclick="{parent.updateUser}">Update</button> <button onclick="{parent.addUser}">Add</button> </form>', '', '', function(opts) {
    var self = this;

    this.updateUsername = function(e){
      self.opts.user.username = e.target.value;
    }.bind(this)

    this.updateStatus = function(e){
      self.opts.user.status = e.target.value;
    }.bind(this)

    this.formSubmit = function(e){
      e.preventDefault();
    }.bind(this)
});

riot.tag2('my-users-list', '<table> <tr> <th>#</th> <th>username</th> <th>status</th> <th>actions</th> </tr> <tr each="{user, i in users}"> <td><button onclick="{selectUser}">{i}</button></td> <td>{user.username}</td> <td>{user.status}</td> <td><button onclick="{parent.parent.removeUser}">Remove</button></td> </tr> </table>', '', '', function(opts) {
    var self = this;

    this.selectUser = function(e){
      self.parent.update({ selected: e.item.user });
    }.bind(this)
});
