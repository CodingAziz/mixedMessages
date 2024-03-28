function randomGenerator(num) {
    return Math.floor(Math.random() * (num+1));
}

const jokeObject = {
    setup: ["a fake noodle", "something that runs but never gets anywhere", "something that's easy to get into, but hard to get out of", "a joke without a punchline", "a horse that can't lose a race", "the security guards outside the Samsung factory", "someone that saw an iPhone being stolen"],
    punch: ["An impasta!", "A refrigerator.", "Trouble.", "Silence.", "A sherbet.", "The Guardians of the Galaxy.", "An iWitness."] 
};

let joke = [];


for (const prop in jokeObject) {
    let propId = randomGenerator(jokeObject[prop].length);


    switch(prop) {
        case 'setup':
            joke.push(`What do you call ${jokeObject[prop][propId]}`);
            break;
        case 'punch':
            joke.push(`${jokeObject[prop][propId]}`);
            break;
        default:
            console.log('Not enough information provided');
            break;
    }
}

function generateMessage(jokes) {
    return joke.join("\n");
}

console.log(generateMessage(joke));



