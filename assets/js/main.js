// Most of these objects should be available everywhere
var locations
var player
var clock
var minigame
var doorway
var lock
var puzzle

//Wrap the construction in a ready function
$(window).on("load",function(){

  // Setup the modals so that whenever a modal is closed, if available it will reopen the modal underneath
  $('body').on('hidden.bs.modal', function () {
      if($('.modal.show').length > 0){
          $('body').addClass('modal-open');
      }
  });

  // Create the clock
  clock = new Clock

  //Run the location creator to instantiate locations
  locations = []
  for (i=0;i<locationsList.length;i++) {
      locations.push(new Location(i))
  }  

  //Run the location creator to instantiate locations
  player = new Player(1)

})

