import fs from 'fs';
import path from 'path';

export default class LogFile {

    constructor(filepath, prefix) {
        this.filepath = filepath;
        this.prefix = prefix;
    }

    makeFileName() {
        const now = new Date();
        return `${this.prefix}-${now.toISOString().split('T')[0]}.log`;
    }

    async write(line) {
        const filepath = path.join(this.filepath, this.makeFileName());
        fs.appendFileSync(filepath, line);
    }

}