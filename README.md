# node-gps-logger

## Overview
Listen NMEA-0183 format message from GPS module via serial port.

## Setup

```sh
$ yarn install
```

## Config

### dotenv

```sh
SERIAL_PORT=COM3
LOG_DIR=C:\Users\user\node-gps-logger\logs
```

## Run

```sh
$ yarn start
```

## Output

### Console

```sh
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152612.00, lat:3530.58446 N, lon:13925.31735 E
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152613.00, lat:3530.58186 N, lon:13925.31684 E
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152614.00, lat:3530.58170 N, lon:13925.31733 E
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152615.00, lat:3530.58204 N, lon:13925.31813 E
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152616.00, lat:3530.58240 N, lon:13925.31755 E
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152617.00, lat:3530.58178 N, lon:13925.31755 E
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152618.00, lat:3530.58037 N, lon:13925.31675 E
> [RMC] from:GNSS, status:A, mode:A, date:100820, time:152619.00, lat:3530.57912 N, lon:13925.31652 E
```

### Log file

```
date:100820, time:152001.00, status:A, mode:A, from:GNSS, lat:3530.60820 N (35.51013666666667), lon:13925.31480 E (139.42191333333332)
date:100820, time:152002.00, status:A, mode:A, from:GNSS, lat:3530.60720 N (35.51012), lon:13925.31515 E (139.42191916666667)
date:100820, time:152003.00, status:A, mode:A, from:GNSS, lat:3530.60655 N (35.510109166666666), lon:13925.31478 E (139.42191300000002)
date:100820, time:152004.00, status:A, mode:A, from:GNSS, lat:3530.60715 N (35.51011916666666), lon:13925.31499 E (139.4219165)
date:100820, time:152005.00, status:A, mode:A, from:GNSS, lat:3530.60602 N (35.510100333333334), lon:13925.31451 E (139.4219085)
date:100820, time:152006.00, status:A, mode:A, from:GNSS, lat:3530.60447 N (35.5100745), lon:13925.31459 E (139.42190983333333)
```