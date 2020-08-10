import dotenv from 'dotenv';
import SerialPort from 'serialport';
import Readline from '@serialport/parser-readline';
// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');
import Rmc from './messages/rmc.js';

dotenv.config();

const NL = '\r';
const BAUDRATE = 9600;

const port = new SerialPort(process.env.SERIAL_PORT, {
    baudRate: BAUDRATE
});

const parser = new Readline({delimiter: NL});
port.pipe(parser);

// NMEA-0183 format
const pattern = /^\$[A-Z]{2,5},[,.\-\*A-Za-z0-9]{2,}$/;
parser.on('data', line => {
    let x = line.trim();
    if(!x.match(pattern)) return;
    // console.log(`> ${x}`);
    const entities = x.split(',');
    switch(entities[0]) {
        case '$GPRMC':
        case '$GNRMC':
            const msg = new Rmc(entities);
            console.log(`> ${msg}`)
            break;
    }
});