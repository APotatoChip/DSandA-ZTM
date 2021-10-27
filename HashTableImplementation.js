class HashTable { // HashTables in JS are just Objects (care for collisions!!)
    constructor(size) { // how much memory to allocate
        this.data = new Array(size); // storage
    }

    _hash(key) { // hash fn O(1)
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) { // O(1)
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);

    }

    get(key) { // O(1) if no collisions; else O(n)
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] == key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        if (!this.data.length) {
            return undefined
        }
        let result = []
            // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000);
console.log(myHashTable._hash('grapes')); //returns 23 
console.log(myHashTable.data[23]); // hash for grapes
console.log(myHashTable.get('grapes')); // returns the value