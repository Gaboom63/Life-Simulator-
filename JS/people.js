import Person from './main.js';
import {emotions} from './emotions.js'; 

let BASE_EMOTION = new Person(); 
let NAME_BOX = document.getElementById('name_container'); 
let MOOD_BOX = document.getElementById('mood_container');

export let people = [
    {
        name: "Bob",
        mood: BASE_EMOTION.random_num(0, emotions.length)
    },
    {
        name: "Conner",
        mood: BASE_EMOTION.random_num(0, emotions.length)
    },
    {
        name: "Mustardddddd",
        mood: BASE_EMOTION.random_num(0, emotions.length)
    }
]

for(let i = 0; i <= people.length - 1; i++) {
    console.log(people[i].name)
    // console.log(people[i].mood);
    console.log(emotions[people[i].mood].mood)
    MOOD_BOX.innerHTML = `Mood: ${emotions[people[i].mood].mood}`;
}

NAME_BOX.innerHTML = `Name: <br> <u>${people[0].name}</u>`;
