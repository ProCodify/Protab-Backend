## Overview

Proxy server for [ProTab](https://github.com/proCodify/ProTab)

## Routes:

- `/health` [GET] - Application status
- `/status` [GET] - Application running timestamp and request handles in last hour
- `/weather` [GET] - Current weather status
- `/news` [GET] - Recent news (local and international)
  - `?type` : LC || IN
  - `?limit`: 0-10
