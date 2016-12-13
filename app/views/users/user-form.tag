<my-user-form>
  <form onsubmit={ formSubmit }>
    <label>
      <input type="text" name="username" value={ opts.user.username || '' } onkeyup={ updateUsername }>
    </label>

    <label>
      <input type="text" name="status" value={ opts.user.status || '' } onkeyup={ updateStatus }>
    </label>

    <button show={ opts.user.username } onclick={ parent.updateUser }>Update</button>
    <button onclick={ parent.addUser }>Add</button>
  </form>

  <script>
    var self = this;

    updateUsername(e){
      self.opts.user.username = e.target.value;
    }

    updateStatus(e){
      self.opts.user.status = e.target.value;
    }

    formSubmit(e){
      e.preventDefault();
    }
  </script>
</my-user-form>
