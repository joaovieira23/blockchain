class Block {

    constructor (timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block =
                Timestamp = ${this.timestamp}
                lastHash = ${this.lastHash.substring(0,10)}
                hash = ${this.hash.substring(0,10)}
                data = ${this.data}`;
    }

    static genesis() {
        return new this('Genesis time', '----------', 'f4a54f8afbdgs54', []);
    }
}

module.exports = Block;