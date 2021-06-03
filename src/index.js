import fruits from './fruits';
import {choice, remove} from './helpers'

let fruit = choice(fruits);
console.log(`I'd like one ${fruit} please`);
console.log(`Here you go ${fruit}`);
console.log(`Delicous, may I have another`);

let leftover = remove(fruit, fruits);
console.log(`I'm sorry we're all out of ${fruit}. We have ${leftover.length} left`);