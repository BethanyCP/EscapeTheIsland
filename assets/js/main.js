// List of locations
var locationsList = [{name:"Camp",position:["50%","69%"]},
                    {name:"Port du Moulin",position:["38%","55%"]},
                    {name:"Clos de Menage",position:["47%","72%"]},
                    {name:"Port Gorey",position:["80%","10%"]},
                    {name:"Creux Harbour",position:["66%","85%"]},
                    ]

// Every location on the island has a class
// The class needs its coordinates, some name and description, and probably some onclick functions?
class Location {

    // Create locations
    constructor(index){

        // Add name and position to the object
        this.id = index
        this.name = locationsList[index].name
        this.position = locationsList[index].position

        // Create and append location objects
        $('#background-map-wrapper').append($('<div class="location-marker"></div>')
                                            .css({"position":"absolute"})
                                            .css({"top":this.position[0]})
                                            .css({"left":this.position[1]})
                                            .attr('name',this.name)
                                            .attr('index',this.id)
                                            .on("click",function(){alert(locationsList[index].name)})
                                            .append($('<p class="x-text">x</p>'))        
                                            )

    }

}

//Wrap the construction in a ready function
$(function(){

    //Run the location creator to instantiate locations
    locations = []
    for (i=0;i<locationsList.length;i++) {
        locations.push(new Location(i))
    }  

})