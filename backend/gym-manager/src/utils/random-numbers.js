

const RANDOM_NUMBER_LENGTH = 4;

export function randomNumer() {
    let randomNum = '';
    for (let i = 0; i < RANDOM_NUMBER_LENGTH; i++) {
        randomNum += Math.floor(Math.random() *10).toString();
    }

    return randomNum;
}