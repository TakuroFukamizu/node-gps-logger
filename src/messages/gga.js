
export default class Gga {
    constructor(entities) {
        this.kind = entities[0] == '$GPGGA' ? 'GPS' : 'GNSS';
        this.time = entities[1]; // 現在時刻(UTC)
        this.lat_value = entities[2]; // 緯度
        this.lat_dir = entities[3]; // N, S
        this.lon_value = entities[4]; // 経度
        this.lon_dir = entities[5]; // E, W
        this.quality = entities[6]; // 位置特定品質(0 = 位置特定できない、1 = SPS（標準測位サービス）モード、2 = differenctial GPS（干渉測位方式）モード)
        this.sattelites = entities[7]; // 使用衛星数
        this.hdop = entities[8]; // 水平精度低下率
        this.altitude = entities[9]; // アンテナの海抜高さ
        this.geoAltitude = entities[11]; // ジオイド高さ
        const x = entities[14].split('*'); // 0000*checksum
        this.id = x[0]; // 	差動基準地点ID
        this.checksum = x[1]; // チェックサム
    }
    toString() {
        return `[GGA] from:${this.kind}, time:${this.time}`
        + `, lat:${this.lat_value} ${this.lat_dir}, lon:${this.lon_value} ${this.lon_dir}`
        + `, quality:${this.quality}, sattelites:${this.sattelites}, hdop:${this.hdop}`;
        // + `, altitude:${this.altitude}, geoAltitude:${this.geoAltitude}`;
    }
    toLogLine() {
        const lat = (Math.floor(this.lat_value/100) + ((this.lat_value%100) / 60)) * (this.lat_dir == 'N' ? 1 : -1);
        const lon = (Math.floor(this.lon_value/100) + ((this.lon_value%100) / 60)) * (this.lon_dir == 'E' ? 1 : -1);
        return `time:${this.time}, from:${this.kind}`
        + `, lat:${this.lat_value} ${this.lat_dir} (${lat})`
        + `, lon:${this.lon_value} ${this.lon_dir} (${lon})`        
        + `, quality:${this.quality}, sattelites:${this.sattelites}, hdop:${this.hdop}`
        + `, altitude:${this.altitude}, geoAltitude:${this.geoAltitude}`
        + `, id:${this.id}`
        + '\n';
    }
};
