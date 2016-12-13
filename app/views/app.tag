<my-app>
  <my-header></my-header>
  <my-navigation></my-navigation>
  <main class="page-content"></main>
  <my-footer></my-footer>

  <script>
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
  </script>
</my-app>
