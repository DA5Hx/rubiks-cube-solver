import { rubikscube } from "./cubestore.js";
import * as ind from './databaseindex.js';
import { getdatabaseindex } from "./databaseindex.js";

export class patterndatabase {
    constructor(goal, key) {
        this.goal = goal;
        this.cube = { corner: { index: [0, 1, 2, 3, 4, 5, 6, 7], orient: [0, 0, 0, 0, 0, 0, 0, 0] }, edge: { index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], orient: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] } };
        this.movestore = ['L', 'Lp', 'L2', 'R', 'Rp', 'R2', 'U', 'Up', 'U2', 'D', 'Dp', 'D2', 'F', 'Fp', 'F2', 'B', 'Bp', 'B2'];
        this.key = key;
        this.index = new ind.getdatabaseindex(key);
    }
    findgoal() {
        let curdepth = 0;
        let nodeStack = [];
        let indcount = 0;
        let curnode;
        this.goal.setnummoves(this.index.getdatabaseindex(this.cube), 0);
        ++indcount;
        while (!this.goal.isFull()) {
            if (nodeStack.length === 0) {
                ++curdepth;
                console.log();
                console.log(curdepth);
                console.log(indcount);
                console.log();
                // console.log(indcount);
                nodeStack.push({ cube: this.cube, move: '0xFF', depth: 0 });

            }
            curnode = nodeStack.pop();
            for (let i = 0; i < this.movestore.length; i++) {
                let move = this.movestore[i];
                if (curnode.depth == 0 || !this.prune(move, curnode.move)) {
                    let cubecopy = new rubikscube(curnode.cube);
                    let cubecopydepth = curnode.depth + 1;
                    cubecopy.move(move);
                    let dbind = this.index.getdatabaseindex(cubecopy.cube);
                    if (this.goal.getnummoves(dbind) < cubecopydepth)
                        continue;

                    if ((cubecopydepth) == curdepth) {
                        if (this.goal.setnummoves(dbind, cubecopydepth))
                            ++indcount;
                    }
                    else
                        nodeStack.push({ cube: cubecopy.cube, move: move, depth: cubecopydepth });
                }
            }
        }
    }

    prune(move, lastmove) {
        if (move[0] == lastmove[0])
            return true;
        if (move[0] == 'F' && lastmove[0] == 'B') return true;
        if (move[0] == 'L' && lastmove[0] == 'R') return true;
        if (move[0] == 'U' && lastmove[0] == 'D') return true;

        return false;
    }
}

Object.prototype.clone = Array.prototype.clone = function () {
    if (Object.prototype.toString.call(this) === '[object Array]') {
        var clone = [];
        for (var i = 0; i < this.length; i++)
            clone[i] = this[i].clone();

        return clone;
    }
    else if (typeof (this) == "object") {
        var clone = {};
        for (var prop in this)
            if (this.hasOwnProperty(prop))
                clone[prop] = this[prop].clone();

        return clone;
    }
    else
        return this;
}