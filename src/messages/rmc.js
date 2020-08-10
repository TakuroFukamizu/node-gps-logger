
export default class Rmc {
    constructor(entities) {
        this.kind = entities[0] == '$GPRMC' ? 'GPS' : 'GNSS';
        this.time = entities[1]; // 現在時刻(UTC)
        this.status = entities[2]; // A:有効, V:無効
        this.lat_value = entities[3]; // 緯度
        this.lat_dir = entities[4]; // N, S
        this.lon_value = entities[5]; // 経度
        this.lon_dir = entities[6]; // E, W
        this.speed = entities[7]; // 対地速度(ノット)
        this.direction = entities[8]; // 進行方向(度)
        this.date = entities[9]; // 日付(UTC) DDMMYY
        this.mag_a = entities[10];
        this.mag_b = entities[11];
        const x = entities[12].split('*'); // (A|D|N)*checksum
        this.mode = x[0]; // A: 単独測位, D: DGPS, N: 無効
        this.checksum = x[1]; // チェックサム
    }
    toString() {
        return `[RMC] from:${this.kind}, status:${this.status}, mode:${this.mode}, `
        + `date:${this.date}, time:${this.time}, `
        + `lat:${this.lat_value} ${this.lat_dir}, lon:${this.lon_value} ${this.lon_dir}`;
    }
    toLogLine() {
        const lat = (Math.floor(this.lat_value/100) + ((this.lat_value%100) / 60)) * (this.lat_dir == 'N' ? 1 : -1);
        const lon = (Math.floor(this.lon_value/100) + ((this.lon_value%100) / 60)) * (this.lon_dir == 'E' ? 1 : -1);
        return `date:${this.date}, time:${this.time}`
        + `, status:${this.status}, mode:${this.mode}, from:${this.kind}` 
        + `, lat:${this.lat_value} ${this.lat_dir} (${lat})`
        + `, lon:${this.lon_value} ${this.lon_dir} (${lon})`
        + '\n';
    }
};
