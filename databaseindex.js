import * as rubikscube from './cubestore.js';
import { database } from './Database.js';
import * as per from './permindexer.js';

export class getdatabaseindex {
    constructor(key)
    {
        this.pindex=new per.permindexer(key);
        this.key=key;
    }
    getdatabaseindex(cube) {
        if(this.key=='corner') {
            return this.getcornerdatabaseindex(cube);
        }
        else if(this.key=='edgeg1') {
            return this.getedgeg1databaseindex(cube);
        }
        else if(this.key=='edgeg2') {
            return this.getedgeg2databaseindex(cube);
        }
        else if(this.key=='edge') {
            return this.getedgepermutationpattern(cube);
        }
    }

    getcornerdatabaseindex(cube){
        let perm=(cube.corner.index);
        let rank=this.pindex.rank(perm);
        let curorientation=cube.corner.orient;
        let curorientnum=curorientation[0] * 729 +
        curorientation[1] * 243 +
        curorientation[2] * 81 +
        curorientation[3] * 27 +
        curorientation[4] * 9 +
        curorientation[5] * 3 +
        curorientation[6];
        return rank*2187+curorientnum;
    }
    getedgeg1databaseindex(cube) {
        let edgeind=cube.edge.index;
        let edgeori=cube.edge.orient;
        let edgeperm=new Array(7);
        let edgeorient=new Array(7);
        for(let i=0;i<7;i++)
        {
            edgeperm[i]=edgeind[i];
            edgeorient[i]=edgeori[i];
        }
        console.log(edgeperm);
        return this.getedgedatabaseindex(edgeperm,edgeorient);
    }
    getedgeg2databaseindex(cube) {
        let edgeind=cube.edge.index;
        let edgeori=cube.edge.orient;
        let edgeperm=new Array(7);
        let edgeorient=new Array(7);
        for(let i=5;i<12;i++)
        {
            edgeperm[i-5]=edgeind[i];
            edgeorient[i-5]=edgeori[i];
        }
        console.log(edgeperm);
        return this.getedgedatabaseindex(edgeperm,edgeorient);
    }
    
    getedgedatabaseindex(perm,orientation) {
        let rank=this.pindex.rank(perm);
        let orientnum=orientation[0]*64 +
        orientation[1]*32 +
        orientation[2]*16 +
        orientation[3]*8 +
        orientation[4]*4 +
        orientation[5]*2 +
        orientation[6];
        return rank*128 + orientnum;
    }
    getedgepermutationpattern(cube) {
        let edgeperm=cube.edge.index;
        return this.pindex.rank(edgeperm);
    }

}
// var ge= new getdatabaseindex('corner');
// var get= new rubikscube.rubikscube({
//     corner:{
//         index:[0,1,2,3,4,5,6,7],
//         orient:[0,0,0,0,0,0,0,0]
//     },
//     edge:{
//         index:[0,1,2,3,4,5,6,7,8,9,10,11],
//         orient:[0,0,0,0,0,0,0,0,0,0,0,0]
//     }
// });
// get.l();
// get.f();
// get.u();
// get.f2();
// get.rp();
// get.b2();
// get.dp();
// get.r2();
// get.l2();
// get.u2();
// get.dp();
// get.bp();
// get.u2();
// console.log(get.cube);
// console.log(ge.getdatabaseindex(get.cube));

// var get=new getdatabaseindex(scube.scramblecube.cube);
// console.log(get.getdatabaseindex('edgeg1'));
// console.log(get.getdatabaseindex('edgeg2'));
// console.log(get.getdatabaseindex('edge'));
// console.log(get.getdatabaseindex('edgeg1')+get.getdatabaseindex('edgeg2'));

//360999 F
//33067440 U
//56950986 L
//19224952 B
//19683 D
//2957231 F
//56786997 LF
//39675909 LFU
