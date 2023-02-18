function init() {



    function Dog(name, breed, weight) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
    }

    Dog.prototype.species = 'Canie'
    Dog.prototype.bark = function() {
        this.weight > 25 ? alert(this.name + ' says Woof!') : alert(this.name + 'says Yip!');
    }
    Dog.prototype.run = function() {
        console.log('Run!')
    }
    Dog.prototype.wag = function() {
        console.log('Wag!')
    }

    var fido = new Dog("Fido", "Mixed", 38);
    var fluffy = new Dog("Fluffy", "Poodle", 30);
    var spot = new Dog("Spot", "Chihuahua", 10);
    spot.bark = function() {
        console.log(this.name + ' says WOOF!')
    }
    spot.bark()

    var bernady = new Dog('Bernady', 'Basset Hound', 55);
    Dog.prototype.sit = function() {
        console.log(this.name + ' now is sitting!')
    }
    bernady.sit()
    fluffy.sit()
    // var dogs = [fido, fluffy, spot];

    // for (let i=0; i<dogs.length; i++) {
    //     var size = "small";
    //     dogs[i].weight > 10 ? size = "large" : false;
    //     console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}`)
    // }

    // console.log(typeof fido);
    // fido.bark()




    // function Coffee(roast, ounces) {
    //     this.roast = roast;
    //     this.ounces = ounces;
    //     this.getSize = function() {
    //         if (this.ounces == 8) return "small"
    //         else if (this.ounces == 12) return "medium"
    //         else return "large"
    //     }
    //     this.toString = function() {
    //         return "You've ordered a " + this.getSize() + " " + this.roast +" coffee"
    //     }
    // }
    // var houseBlend = new Coffee("House Blend", 12);
    // console.log(houseBlend.toString());
    // var darkRoast = new Coffee("Dark Roast", 16);
    // console.log(darkRoast.toString());

    // function Car(params) {
    //     this.make = params.make;
    //     this.model = params.model; 
    //     this.year = params.year;
    //     this.color = params.color;
    //     this.passengers = params.passengers;
    //     this.convertible = params.convertible;
    //     this.mileage = params.mileage;
    //     this.started = false;
    //     this.start = function() {
    //         this.started = true;
    //     }
    //     this.stop = function() {
    //         this.started = false;
    //     }
    //     this.drive = function() {
    //         if (this.started) alert('Zoom Zoom!')
    //         else alert('Start the engine the first');
    //     }
    // }

    // let chevyParams = {
    //     make: 'Chevy',
    //     model: 'Bel Air',
    //     year: 1957,
    //     color: 'red',
    //     passengers: 2,
    //     convertible: false,
    //     mileage: 1021
    // };
    // let chevy = new Car(chevyParams);
    // let cadiParams = {
    //     make: 'GM',
    //     model: 'Cadilac',
    //     year: 1955,
    //     color: 'tan',
    //     passengers: 5,
    //     convertible: false,
    //     mileage: 12892
    // };
    // let cadi = new Car(cadiParams);
    // let taxiParams = {
    //     make: 'Webville Motors',
    //     model: 'Taxi',
    //     year: 1955,
    //     color: 'yellow',
    //     passengers: 4,
    //     convertible: false,
    //     mileage: 281341
    // };
    // let taxi = new Car(taxiParams);
    // let fiatParams = {
    //     make: 'Fiat',
    //     model: '500',
    //     year: 1957,
    //     color: 'Medium blue',
    //     passengers: 2,
    //     convertible: false,
    //     mileage: 88000
    // };
    // let fiat = new Car(fiatParams);
    // let testCatParams = {
    //     make: 'Webville Motors',
    //     model: 'Test Car',
    //     year: 2014,
    //     color: 'marine',
    //     passengers: 2,
    //     convertible: true,
    //     mileage: 21
    // };
    // let testCar = new Car(testCatParams);

    // let cars = [chevy, cadi, taxi, fiat, testCar];

    // for(let i=0; i<cars.length; i++) {
    //     let amountDrive = Math.floor(Math.random() * 5) + 1
    //     cars[i].start();
    //     for (let j=0; j<amountDrive; j++) {
    //         cars[i].drive()
    //     }
    //     cars[i].stop()
    //     alert('car is stopped!')
    // }
    console.log(location.href)
}



window.onload = init;