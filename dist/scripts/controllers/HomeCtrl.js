(function() {
     function HomeCtrl(Room) {
         var ctrl = this;

         ctrl.test = 'Bloc Chat';

         ctrl.rooms = Room.all;
     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
