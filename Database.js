export class database {
    constructor(size) {
        this.database = new Array(size).fill(0xF);
        this.numitems = 0;
    }
    setnummoves(ind, nummoves) {
        var oldmoves = this.getnummoves(ind);
        if (oldmoves == 0xF) {
            ++this.numitems;
        }
        if (oldmoves > nummoves) {
            this.database[ind]=nummoves;
            return true;
        }
        return false;
    }
    getnummoves(ind) {
        return this.database[ind];
    }
    isFull() {
        return this.database.length == this.numitems;
    }
    reset() {
        if(this.numitems!=0)
        {
            this.database.fill(0xF);
            this.numitems=0;
        }
    }
}
