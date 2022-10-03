## Overview

This is the the backend server of [ProTab](https://github.com/proCodify/ProTab)

## Routes:

- `/health` [GET] - Application status
- `/status` [GET] - Application running timestamp and request handles in last hour
- `/weather` [GET] - Current weather status
- `/news` [GET] - Recent news (local and international)

## Services:

- `weather` - fetches weather status and cache that data
- `news` - fetches news from multiple sources and cached that data
