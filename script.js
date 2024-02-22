class HashMap {
    constructor(){
        this.bucketSize = 16;
        this.buckets = new Array(this.bucketSize).fill(null).map(() => []);
    }

    hash(key) {
        //Generates the hash code
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            
        }
        //generate an index to every hash code
        return hashCode % this.bucketSize;
    }

    set(key, value) {
        //Method for pushing a new key-value pair into bucket
        const index = this.hash(key);
        const bucket = this.buckets[index];

        //Checking if key already exists in bucket
        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }    
        }
        
        /*Pushing the new values into the bucket according to
        the index from hash()*/
        bucket.push([key, value]);
        
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        /*Searching for the key in the bucket. If the key
        exists, will be returned. Otherwise, 
        null will be returned*/
        for (const pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return null;
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (const pair of bucket) {
            if (pair[0] === key) {
                return true 
            }
        }
        return false
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        this.buckets[index] = bucket.filter((pair) => pair[0] !== key);
    }

    length(){
        let count = 0;

        for (const bucket of this.buckets) {
                count += bucket.length;   
        }
        return count;
    }

    keys() {
        const result = [];

        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                result.push(pair[0]);
                
            }
        }
        return result;
    }

    values() {
        const result = [];

        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                result.push(pair[1]);
                
            }
        }
        return result;
    }

    entries() {
        const result = [];

        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                result.push([pair[0], pair[1]]);
                
            }
        }
        return result;
    }
};

const hm = new HashMap();

hm.set('Carlos', 'Villagran');
hm.set('Kei', 'Kurono');
hm.set('Masaru', 'Kato');

//hm.remove('Kei')


console.log(hm.get('Carlos')); 
console.log(hm.get('Kei')); 
console.log(hm.get('Masaru')); 


console.log(hm.has('Kei')); 
console.log(hm.has('Masaru'));

console.log(hm.keys());
console.log(hm.values());
console.log(hm.entries());
console.log(hm.length());

