import * as data from './Database.js';
import { patterndatabase } from './Patterndatbaseminmoves.js';

var cornerDB = new data.database(88179840);
var pattern = new patterndatabase(cornerDB, 'corner');
// pattern.findgoal();
// // console.log(cornerDB);
// console.log(cornerDB[1]);
// console.log(cornerDB[5]);
// console.log(cornerDB[10]);
