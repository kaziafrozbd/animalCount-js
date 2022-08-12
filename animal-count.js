function animal(miles){
    const first10PerMilesAnimals = 10;
    const second10PerMilesAnimals = 50;
    const restPerMilesAnimals = 100;
    if(miles <= 10){
        const totalAnimals = first10PerMilesAnimals * miles;
        return totalAnimals;
    }
    else if(miles <= 20){
        const first10MilesAnimals = 10 * first10PerMilesAnimals;
        const restMiles = miles - 10;
        const second10MilesAnimal = restMiles*second10PerMilesAnimals;
        const totalAnimals = first10MilesAnimals + second10MilesAnimal;
        return totalAnimals;
    }
    else {
        const first10MilesAnimals = 10 * first10PerMilesAnimals;
        const second10MilesAnimals = 10 * second10PerMilesAnimals;
        const restMiles = miles - 20;
        const restMilesAnimal = restMiles * 100;
        const totalAnimals = first10MilesAnimals + second10MilesAnimals + restMilesAnimal;
        return totalAnimals;
    }
}

const totalAnimals = animal(25);
console.log(totalAnimals);