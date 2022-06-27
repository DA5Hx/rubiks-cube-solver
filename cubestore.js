export class rubikscube {
    // var corner={
    //     index:[0,1,2,3,4,5,6,7],
    //     orient:[0,0,0,0,0,0,0,0]
    // };
    // var edge={
    //     index:[0,1,2,3,4,5,6,7,8,9,10,11],
    //     orient:[0,0,0,0,0,0,0,0,0,0,0,0]
    // };
    constructor(cube) {
        this.cube = cube.clone();
    }
    updateCornerOrient(ind, pos) {
        this.cube.corner.orient[ind] += pos;
        if (this.cube.corner.orient[ind] == 3)
            this.cube.corner.orient[ind] = 0;
        else if (this.cube.corner.orient[ind] == 4)
            this.cube.corner.orient[ind] = 1;
    }

    updateEdgeOrient(ind) {
        this.cube.edge.orient[ind] ^= 1;
    }

    u() {
        let hold = this.cube.corner.index[3];
        this.cube.corner.index[3] = this.cube.corner.index[2];
        this.cube.corner.index[2] = this.cube.corner.index[1];
        this.cube.corner.index[1] = this.cube.corner.index[0];
        this.cube.corner.index[0] = hold;

        hold = this.cube.edge.index[3];
        this.cube.edge.index[3] = this.cube.edge.index[2];
        this.cube.edge.index[2] = this.cube.edge.index[1];
        this.cube.edge.index[1] = this.cube.edge.index[0];
        this.cube.edge.index[0] = hold;
        return this;
    }

    up() {
        let hold = this.cube.corner.index[0];
        this.cube.corner.index[0] = this.cube.corner.index[1];
        this.cube.corner.index[1] = this.cube.corner.index[2];
        this.cube.corner.index[2] = this.cube.corner.index[3];
        this.cube.corner.index[3] = hold;

        hold = this.cube.edge.index[0];
        this.cube.edge.index[0] = this.cube.edge.index[1];
        this.cube.edge.index[1] = this.cube.edge.index[2];
        this.cube.edge.index[2] = this.cube.edge.index[3];
        this.cube.edge.index[3] = hold;
    }

    u2() {
        this.cube.corner.index[0] = this.cube.corner.index[2]
        this.cube.corner.index[1] = this.cube.corner.index[3]

        this.cube.edge.index[0] = this.cube.edge.index[2];
        this.cube.edge.index[1] = this.cube.edge.index[3];
    }

    d() {
        let hold = this.cube.corner.index[5];
        this.cube.corner.index[5] = this.cube.corner.index[6];
        this.cube.corner.index[6] = this.cube.corner.index[7];
        this.cube.corner.index[7] = this.cube.corner.index[4];
        this.cube.corner.index[4] = hold;

        hold = this.cube.edge.index[10];
        this.cube.edge.index[10] = this.cube.edge.index[11];
        this.cube.edge.index[11] = this.cube.edge.index[8];
        this.cube.edge.index[8] = this.cube.edge.index[9];
        this.cube.edge.index[9] = hold;
    }

    dp() {
        let hold = this.cube.corner.index[4];
        this.cube.corner.index[4] = this.cube.corner.index[7];
        this.cube.corner.index[7] = this.cube.corner.index[6];
        this.cube.corner.index[6] = this.cube.corner.index[5];
        this.cube.corner.index[5] = hold;

        hold = this.cube.edge.index[9];
        this.cube.edge.index[9] = this.cube.edge.index[8];
        this.cube.edge.index[8] = this.cube.edge.index[11];
        this.cube.edge.index[11] = this.cube.edge.index[10];
        this.cube.edge.index[10] = hold;
    }

    d2() {
        this.cube.corner.index[5] = this.cube.corner.index[7]
        this.cube.corner.index[6] = this.cube.corner.index[4]

        this.cube.edge.index[10] = this.cube.edge.index[8];
        this.cube.edge.index[11] = this.cube.edge.index[9];
    }

    l() {
        let hold = this.cube.corner.index[5];
        this.cube.corner.index[5] = this.cube.corner.index[4];
        this.cube.corner.index[4] = this.cube.corner.index[3];
        this.cube.corner.index[3] = this.cube.corner.index[0];
        this.cube.corner.index[0] = hold;

        hold = this.cube.edge.index[6];
        this.cube.edge.index[6] = this.cube.edge.index[9];
        this.cube.edge.index[9] = this.cube.edge.index[5];
        this.cube.edge.index[5] = this.cube.edge.index[3];
        this.cube.edge.index[3] = hold;

        this.updateCornerOrient(5, 1);
        this.updateCornerOrient(4, 2);
        this.updateCornerOrient(3, 1);
        this.updateCornerOrient(0, 2);
    }

    lp() {
        let hold = this.cube.corner.index[5];
        this.cube.corner.index[5] = this.cube.corner.index[0];
        this.cube.corner.index[0] = this.cube.corner.index[3];
        this.cube.corner.index[3] = this.cube.corner.index[4];
        this.cube.corner.index[4] = hold;

        hold = this.cube.edge.index[6];
        this.cube.edge.index[6] = this.cube.edge.index[3];
        this.cube.edge.index[3] = this.cube.edge.index[5];
        this.cube.edge.index[5] = this.cube.edge.index[9];
        this.cube.edge.index[9] = hold;

        this.updateCornerOrient(5, 1);
        this.updateCornerOrient(4, 2);
        this.updateCornerOrient(3, 1);
        this.updateCornerOrient(0, 2);
    }

    l2() {
        this.cube.corner.index[5] = this.cube.corner.index[3]
        this.cube.corner.index[0] = this.cube.corner.index[4]

        this.cube.edge.index[6] = this.cube.edge.index[5];
        this.cube.edge.index[3] = this.cube.edge.index[9];
    }

    r() {
        let hold = this.cube.corner.index[6];
        this.cube.corner.index[6] = this.cube.corner.index[1];
        this.cube.corner.index[1] = this.cube.corner.index[2];
        this.cube.corner.index[2] = this.cube.corner.index[7];
        this.cube.corner.index[7] = hold;

        hold = this.cube.edge.index[7];
        this.cube.edge.index[7] = this.cube.edge.index[1];
        this.cube.edge.index[1] = this.cube.edge.index[4];
        this.cube.edge.index[4] = this.cube.edge.index[11];
        this.cube.edge.index[11] = hold;

        this.updateCornerOrient(6, 2);
        this.updateCornerOrient(7, 1);
        this.updateCornerOrient(2, 2);
        this.updateCornerOrient(1, 1);
    }

    rp() {
        let hold = this.cube.corner.index[6];
        this.cube.corner.index[6] = this.cube.corner.index[7];
        this.cube.corner.index[7] = this.cube.corner.index[2];
        this.cube.corner.index[2] = this.cube.corner.index[1];
        this.cube.corner.index[1] = hold;

        hold = this.cube.edge.index[7];
        this.cube.edge.index[7] = this.cube.edge.index[11];
        this.cube.edge.index[11] = this.cube.edge.index[4];
        this.cube.edge.index[4] = this.cube.edge.index[1];
        this.cube.edge.index[1] = hold;

        this.updateCornerOrient(6, 2);
        this.updateCornerOrient(7, 1);
        this.updateCornerOrient(2, 2);
        this.updateCornerOrient(1, 1);
    }

    r2() {
        this.cube.corner.index[6] = this.cube.corner.index[2]
        this.cube.corner.index[1] = this.cube.corner.index[7]

        this.cube.edge.index[7] = this.cube.edge.index[4];
        this.cube.edge.index[1] = this.cube.edge.index[11];
    }

    f() {
        let hold = this.cube.corner.index[3];
        this.cube.corner.index[3] = this.cube.corner.index[4];
        this.cube.corner.index[4] = this.cube.corner.index[7];
        this.cube.corner.index[7] = this.cube.corner.index[2];
        this.cube.corner.index[2] = hold;

        hold = this.cube.edge.index[2];
        this.cube.edge.index[2] = this.cube.edge.index[5];
        this.cube.edge.index[5] = this.cube.edge.index[8];
        this.cube.edge.index[8] = this.cube.edge.index[4];
        this.cube.edge.index[4] = hold;

        this.updateCornerOrient(3, 2);
        this.updateCornerOrient(2, 1);
        this.updateCornerOrient(7, 2);
        this.updateCornerOrient(4, 1);

        this.updateEdgeOrient(2);
        this.updateEdgeOrient(5);
        this.updateEdgeOrient(8);
        this.updateEdgeOrient(4);
    }

    fp() {
        let hold = this.cube.corner.index[3];
        this.cube.corner.index[3] = this.cube.corner.index[2];
        this.cube.corner.index[2] = this.cube.corner.index[7];
        this.cube.corner.index[7] = this.cube.corner.index[4];
        this.cube.corner.index[4] = hold;

        hold = this.cube.edge.index[2];
        this.cube.edge.index[2] = this.cube.edge.index[4];
        this.cube.edge.index[4] = this.cube.edge.index[8];
        this.cube.edge.index[8] = this.cube.edge.index[5];
        this.cube.edge.index[5] = hold;

        this.updateCornerOrient(3, 2);
        this.updateCornerOrient(2, 1);
        this.updateCornerOrient(7, 2);
        this.updateCornerOrient(4, 1);

        this.updateEdgeOrient(2);
        this.updateEdgeOrient(5);
        this.updateEdgeOrient(8);
        this.updateEdgeOrient(4);
    }

    f2() {
        this.cube.corner.index[3] = this.cube.corner.index[7]
        this.cube.corner.index[2] = this.cube.corner.index[4]

        this.cube.edge.index[2] = this.cube.edge.index[8];
        this.cube.edge.index[5] = this.cube.edge.index[4];
    }

    b() {
        let hold = this.cube.corner.index[0];
        this.cube.corner.index[0] = this.cube.corner.index[1];
        this.cube.corner.index[1] = this.cube.corner.index[6];
        this.cube.corner.index[6] = this.cube.corner.index[5];
        this.cube.corner.index[5] = hold;

        hold = this.cube.edge.index[0];
        this.cube.edge.index[0] = this.cube.edge.index[7];
        this.cube.edge.index[7] = this.cube.edge.index[10];
        this.cube.edge.index[10] = this.cube.edge.index[6];
        this.cube.edge.index[6] = hold;

        this.updateCornerOrient(0, 1);
        this.updateCornerOrient(1, 2);
        this.updateCornerOrient(6, 1);
        this.updateCornerOrient(5, 2);

        this.updateEdgeOrient(0);
        this.updateEdgeOrient(6);
        this.updateEdgeOrient(10);
        this.updateEdgeOrient(7);
    }

    bp() {
        let hold = this.cube.corner.index[0];
        this.cube.corner.index[0] = this.cube.corner.index[5];
        this.cube.corner.index[5] = this.cube.corner.index[6];
        this.cube.corner.index[6] = this.cube.corner.index[1];
        this.cube.corner.index[1] = hold;

        hold = this.cube.edge.index[0];
        this.cube.edge.index[0] = this.cube.edge.index[6];
        this.cube.edge.index[6] = this.cube.edge.index[10];
        this.cube.edge.index[10] = this.cube.edge.index[7];
        this.cube.edge.index[7] = hold;

        this.updateCornerOrient(0, 1);
        this.updateCornerOrient(1, 2);
        this.updateCornerOrient(6, 1);
        this.updateCornerOrient(5, 2);

        this.updateEdgeOrient(0);
        this.updateEdgeOrient(6);
        this.updateEdgeOrient(10);
        this.updateEdgeOrient(7);
    }

    b2() {
        this.cube.corner.index[0] = this.cube.corner.index[6];
        this.cube.corner.index[1] = this.cube.corner.index[5];

        this.cube.edge.index[0] = this.cube.edge.index[10];
        this.cube.edge.index[6] = this.cube.edge.index[7];
    }

    isSolved() {
        for (let i = 0; i < 8; i++) {
            if (this.cube.corner.index[i] != i || this.cube.corner.orient[i] != 0)
                return false;
        }
        for (let i = 0; i < 12; i++) {
            if (this.cube.edge.index[i] != i || this.cube.edge.orient[i] != 0)
                return false;
        }
        return true;
    }

    move(ind) {
        switch (ind) {
            case 'U':
                return this.u();
            case 'Up':
                return this.up();
            case 'U2':
                return this.u2();
            case 'D':
                return this.d();
            case 'Dp':
                return this.dp();
            case 'D2':
                return this.d2();
            case 'L':
                return this.l();
            case 'Lp':
                return this.lp();
            case 'L2':
                return this.l2();
            case 'R':
                return this.r();
            case 'Rp':
                return this.rp();
            case 'R2':
                return this.r2();
            case 'F':
                return this.f();
            case 'Fp':
                return this.fp();
            case 'F2':
                return this.f2();
            case 'B':
                return this.b();
            case 'Bp':
                return this.bp();
            case 'B2':
                return this.b2();
        }
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