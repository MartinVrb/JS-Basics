function animalTupe(input) {

    let animal = input[0];

    switch (animal) {

        case "dog":
            console.log(`mammal`);
            break;

        case "crocodile":
        case "tortoise":
        case "snake":
            console.log(`reptile`);
            break;

        default:
            console.log(`unknown`);
    }

}
animalTupe(["dog"]);


// 1. dog -> mammal
// 2. crocodile, tortoise, snake -> reptile
// 3. others -> unknown
