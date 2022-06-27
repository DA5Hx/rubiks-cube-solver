import * as cubestore from './cubestore.js'
import { getdatabaseindex } from './databaseindex.js';

createcube();
function createcube() {
    let cube = document.getElementById("cube");
    for (let i = 0; i < 9; i++) {
        let r = document.createElement("tr");
        r.id = "row" + i;
        cube.appendChild(r);
        let rowd = document.getElementById("row" + i);
        for (let j = 0; j < 12; j++) {
            if ((i > 2 && i < 6) && (j >= 0 && j < 3)) {
                let c = document.createElement("td");
                c.className = "green";
                rowd.appendChild(c);
            }
            else if (i >= 0 && i < 3 && j > 2 && j < 6) {
                let c = document.createElement("td");
                c.className = "white";
                rowd.appendChild(c);
            }
            else if (i > 2 && i < 6 && j > 2 && j < 6) {
                let c = document.createElement("td");
                c.className = "red";
                rowd.appendChild(c);
            }
            else if (i > 2 && i < 6 && j > 5 && j < 9) {
                let c = document.createElement("td");
                c.className = "blue";
                rowd.appendChild(c);
            }
            else if (i > 2 && i < 6 && j > 8) {
                let c = document.createElement("td");
                c.className = "orange";
                rowd.appendChild(c);
            }
            else if (i > 5 && j > 2 && j < 6) {
                let c = document.createElement("td");
                c.className = "yellow";
                rowd.appendChild(c);
            }
            else {
                let c = document.createElement("td");
                c.classList = ["empty"];
                rowd.appendChild(c);
            }
        }
    }
}

var scramblecube=new cubestore.rubikscube({
    corner:{
        index:[0,1,2,3,4,5,6,7],
        orient:[0,0,0,0,0,0,0,0]},
    edge:{
        index:[0,1,2,3,4,5,6,7,8,9,10,11],
        orient:[0,0,0,0,0,0,0,0,0,0,0,0]}
});

const U = document.querySelector(".U");
U.addEventListener('click', e => {
    let i = document.getElementById("row" + 3).children;
    let a, b, c;
    for (let j = 0; j < i.length - 3; j++) {
        if (j == 0) {
            a = i[j].className;
        } else if (j == 1) {
            b = i[j].className;
        }
        else if (j == 2) {
            c = i[j].className;
        }
        i[j].className = i[j + 3].className;
    }
    i[9].className = a;
    i[10].className = b;
    i[11].className = c;
    scramblecube.u();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
    var get=new getdatabaseindex(scramblecube.cube.clone());
    console.log(get.getdatabaseindex('corner'));
})

const Uprime = document.querySelector(".Up");
Uprime.addEventListener('click', e => {
    let i = document.getElementById("row" + 3).children;
    let a, b, c;
    for (let j = 11; j>=3; j--) {
        if (j == 11) {
            a = i[j].className;
        } else if (j == 10) {
            b = i[j].className;
        }
        else if (j == 9) {
            c = i[j].className;
        }
        i[j].className = i[j - 3].className;
    }
    i[2].className = a;
    i[1].className = b;
    i[0].className = c;
    scramblecube.up();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

const D = document.querySelector(".D");
D.addEventListener('click', e => {
    let i = document.getElementById("row" + 5).children;
    let a, b, c;
    for (let j = 11; j>=3; j--) {
        if (j == 11) {
            a = i[j].className;
        } else if (j == 10) {
            b = i[j].className;
        }
        else if (j == 9) {
            c = i[j].className;
        }
        i[j].className = i[j - 3].className;
    }
    i[2].className = a;
    i[1].className = b;
    i[0].className = c;
    scramblecube.d();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

const Dp = document.querySelector(".Dp");
Dp.addEventListener('click', e => {
    let i = document.getElementById("row" + 5).children;
    let a, b, c;
    for (let j = 0; j < i.length - 3; j++) {
        if (j == 0) {
            a = i[j].className;
        } else if (j == 1) {
            b = i[j].className;
        }
        else if (j == 2) {
            c = i[j].className;
        }
        i[j].className = i[j + 3].className;
    }
    i[9].className = a;
    i[10].className = b;
    i[11].className = c;
    scramblecube.dp();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".F").addEventListener('click',e=> {
    const i2=document.getElementById("row"+2).children;
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i6=document.getElementById("row"+6).children;
    const temp1=i2[3].className;
    const temp2=i2[4].className;
    const temp3=i2[5].className;
    i2[3].className=i3[2].className;
    i2[4].className=i4[2].className;
    i2[5].className=i5[2].className;
    i3[2].className=i6[3].className;
    i4[2].className=i6[4].className;
    i5[2].className=i6[5].className;
    i6[3].className=i5[6].className;
    i6[4].className=i4[6].className;
    i6[5].className=i3[6].className;
    i5[6].className=temp3;
    i4[6].className=temp2;
    i3[6].className=temp1;
    scramblecube.f();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".Fp").addEventListener('click',e=> {
    const i2=document.getElementById("row"+2).children;
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i6=document.getElementById("row"+6).children;
    const temp1=i2[3].className;
    const temp2=i2[4].className;
    const temp3=i2[5].className;
    i2[3].className=i3[6].className;
    i2[4].className=i4[6].className;
    i2[5].className=i5[6].className;
    i3[6].className=i6[5].className;
    i4[6].className=i6[4].className;
    i5[6].className=i6[3].className;
    i6[5].className=i5[2].className;
    i6[4].className=i4[2].className;
    i6[3].className=i3[2].className;
    i5[2].className=temp1;
    i4[2].className=temp2;
    i3[2].className=temp3;
    scramblecube.fp();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".B").addEventListener('click',e=> {
    const i0=document.getElementById("row"+0).children;
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i8=document.getElementById("row"+8).children;
    const temp1=i0[3].className;
    const temp2=i0[4].className;
    const temp3=i0[5].className;
    i0[3].className=i3[8].className;
    i0[4].className=i4[8].className;
    i0[5].className=i5[8].className;
    i3[8].className=i8[5].className;
    i4[8].className=i8[4].className;
    i5[8].className=i8[3].className;
    i8[5].className=i5[0].className;
    i8[4].className=i4[0].className;
    i8[3].className=i3[0].className;
    i5[0].className=temp1;
    i4[0].className=temp2;
    i3[0].className=temp3;
    scramblecube.b();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".Bp").addEventListener('click',e=> {
    const i0=document.getElementById("row"+0).children;
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i8=document.getElementById("row"+8).children;
    const temp1=i0[3].className;
    const temp2=i0[4].className;
    const temp3=i0[5].className;
    i0[3].className=i3[0].className;
    i0[4].className=i4[0].className;
    i0[5].className=i5[0].className;
    i3[0].className=i8[3].className;
    i4[0].className=i8[4].className;
    i5[0].className=i8[5].className;
    i8[3].className=i5[8].className;
    i8[4].className=i4[8].className;
    i8[5].className=i3[8].className;
    i5[8].className=temp3;
    i4[8].className=temp2;
    i3[8].className=temp1;
    scramblecube.bp();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".L").addEventListener('click',e=> {
    const i0=document.getElementById("row"+0).children[3];
    const i1=document.getElementById("row"+1).children[3];
    const i2=document.getElementById("row"+2).children[3];
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i6=document.getElementById("row"+6).children[3];
    const i7=document.getElementById("row"+7).children[3];
    const i8=document.getElementById("row"+8).children[3];
    const temp1=i3[11].className;
    const temp2=i4[11].className;
    const temp3=i5[11].className;
    i3[11].className=i8.className;
    i4[11].className=i7.className;
    i5[11].className=i6.className;
    i8.className=i5[3].className;
    i7.className=i4[3].className;
    i6.className=i3[3].className;
    i5[3].className=i2.className;
    i4[3].className=i1.className;
    i3[3].className=i0.className;
    i2.className=temp1;
    i1.className=temp2;
    i0.className=temp3;
    scramblecube.l();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".Lp").addEventListener('click',e=> {
    const i0=document.getElementById("row"+0).children[3];
    const i1=document.getElementById("row"+1).children[3];
    const i2=document.getElementById("row"+2).children[3];
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i6=document.getElementById("row"+6).children[3];
    const i7=document.getElementById("row"+7).children[3];
    const i8=document.getElementById("row"+8).children[3];
    const temp1=i3[11].className;
    const temp2=i4[11].className;
    const temp3=i5[11].className;
    i5[11].className=i0.className;
    i4[11].className=i1.className;
    i3[11].className=i2.className;
    i0.className=i3[3].className;
    i1.className=i4[3].className;
    i2.className=i5[3].className;
    i3[3].className=i6.className;
    i4[3].className=i7.className;
    i5[3].className=i8.className;
    i6.className=temp3;
    i7.className=temp2;
    i8.className=temp1;
    scramblecube.lp();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".R").addEventListener('click',e=> {
    const i0=document.getElementById("row"+0).children[5];
    const i1=document.getElementById("row"+1).children[5];
    const i2=document.getElementById("row"+2).children[5];
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i6=document.getElementById("row"+6).children[5];
    const i7=document.getElementById("row"+7).children[5];
    const i8=document.getElementById("row"+8).children[5];
    const temp1=i3[9].className;
    const temp2=i4[9].className;
    const temp3=i5[9].className;
    i5[9].className=i0.className;
    i4[9].className=i1.className;
    i3[9].className=i2.className;
    i0.className=i3[5].className;
    i1.className=i4[5].className;
    i2.className=i5[5].className;
    i3[5].className=i6.className;
    i4[5].className=i7.className;
    i5[5].className=i8.className;
    i6.className=temp3;
    i7.className=temp2;
    i8.className=temp1;
    scramblecube.r();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})

document.querySelector(".Rp").addEventListener('click',e=> {
    const i0=document.getElementById("row"+0).children[5];
    const i1=document.getElementById("row"+1).children[5];
    const i2=document.getElementById("row"+2).children[5];
    const i3=document.getElementById("row"+3).children;
    const i4=document.getElementById("row"+4).children;
    const i5=document.getElementById("row"+5).children;
    const i6=document.getElementById("row"+6).children[5];
    const i7=document.getElementById("row"+7).children[5];
    const i8=document.getElementById("row"+8).children[5];
    const temp1=i3[9].className;
    const temp2=i4[9].className;
    const temp3=i5[9].className;
    i3[9].className=i8.className;
    i4[9].className=i7.className;
    i5[9].className=i6.className;
    i8.className=i5[5].className;
    i7.className=i4[5].className;
    i6.className=i3[5].className;
    i5[5].className=i2.className;
    i4[5].className=i1.className;
    i3[5].className=i0.className;
    i2.className=temp1;
    i1.className=temp2;
    i0.className=temp3;
    scramblecube.rp();
    console.log(scramblecube.cube.corner);
    console.log(scramblecube.cube.edge);
})
document.querySelector(".Solve").addEventListener('click',e=> {
    console.log(scramblecube.isSolved());
})
