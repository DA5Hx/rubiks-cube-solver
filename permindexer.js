export class permindexer {
    constructor(key) {
        this.K = 8;
        this.N = this.K;
        if (key == 'edge') {
            this.K=12;
            this.N = 12; 
        }
        if(key=='edgeg1' ||key=='edgeg2') {
            this.K=7;
            this.N=12;
        }
        this.onecountlookup = new Array(this.N);
        this.factorial = new Array(this.N);
        for (let i = 0; i < (1 << this.N); i++) {
            this.onecountlookup[i] = (this.bitCount(i));
        }
        for (let i = 0; i < this.K; i++) {
            this.factorial[i] = (this.pick(this.N - 1 - i, this.K - 1 - i));
        }
    }
    factorials(n) {
        return (n <= 1) ? 1 : n * this.factorials(n - 1);
    }

    pick(n, k) {
        return this.factorials(n) / (this.factorials(n - k));
    }

    bitCount(n) {
        n = n - ((n >> 1) & 0x55555555)
        n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
        return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
    }

    rank(perm) {
        let lemher = new Array(this.N);
        let seen = new Array(this.N).fill('0');
        lemher[0] = perm[0];
        seen[perm[0]] = '1';
        for (let i = 1; i < this.K; i++) {
            seen[perm[i]] = '1';
            let str = seen.join('');
            let numone = this.onecountlookup[(parseInt(str, 2) >> (this.N - perm[i]))];
            lemher[i] = (perm[i] - numone);
        }
        let index = 0;
        for (let i = 0; i < this.K; i++) {
            index += (lemher[i] * this.factorial[i]);
        }
        return index;
    }
}