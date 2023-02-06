function init() {

    function Dog(name, breed, weight) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
    }
    // function Duck(type, canFly) {
    //     this.type = type;
    //     this.canFly = canFly;
    // }

    var fido = new Dog("Fido", "Mixed", 38);
    var fluffy = new Dog("Fluffy", "Poodle", 30);
    var spot = new Dog("Spot", "Chihuahua", 10);
    var dogs = [fido, fluffy, spot];

    for (let i=0; i<dogs.length; i++) {
        var size = "small";
        dogs[i].weight > 10 ? size = "large" : false;
        console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}`)
    }

    console.log(typeof fido)
}

window.onload = init;