import {emotions} from './emotions.js'; 

export default class Person {
    constructor(CHOICE, MOVEMENT, EMOTION) {
        this.CHOICE = CHOICE; 
        this.MOVEMENT = MOVEMENT; 
        this.EMOTION = EMOTION; 
    }

    random_num(min, max) {
        let MAX_NUM = Math.ceil(max);  
        let MIN_NUM = Math.floor(min); 
        return Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM); 
    }

    mood() {
        
    }
}


let x = new Person; 

let prevNum = x.random_num(0, 100); 

console.log("Original Number: ", prevNum)

console.log("Fixed Number: ", prevNum + emotions[1].addonNum - emotions[1].lessNum)
