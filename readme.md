# Soccer API


## Description

* This project designed to create a soccer API, of all teams and players in the top 5 leagues of europe (and rossia, from some reason...).

* I used the Web-scrapping method, using "puppeteer" on Node.js .

* This API is meant for progremming purposes only.

* The data was scrapped from understat.com


## Object keys documentation

### Team
* from league route: `https://understat.com/league/${leagueName}`
```
{
    no: number,                          // place number in the league 
    team: string,                        // team name
    matches: number,
    wins: number,
    draws: number,
    loses: number,
    goals_for: number,
    goals_against: number,
    pts: number,
    xG: number,                          // expected goals
    xGA: number,                         // expected goals against
    xPTS: number                         // expected points
    players: []                          // array of all team's players
}
```

### Player
* from team route: `https://understat.com/team/${teamName}/${year}`
```
{
    no: number,                  // place on teams best stats
    player: string,              // player name
    pos: F | F M | M | D | S | G K,
    apps: number,
    mins: number,
    goals: number,
    assists: number,
    sh90: number,                // shots per 90 minutes
    kp90: number,                // passes led per 90 minutes
    xG: number,                  // expected goals
    xA: number,                  
    xG90: number,                // expected goals per 90 minutes
    xA90: number                 // expected assists per 90 minutes
}
```

## API fetch documentation 
### players

1. Get all players - 
    * `/api/players`
2. Get player by id - 
    * `/api/players/${id}`
3. Get player by name - 
    * `/api/players/${playerName}`
4. Get players by filter querystring (all optional, not required): 
    * `/api/players/filter?`
    
    params:
    * `team=${teamName}`
    * `pos=${player-position}`
    * `minGoals=${number}`
    * `maxGoals=${number}`
    * `minAsts=${number}`
    * `maxAsts=${number}`
    
    For example: `/api/players/filter?team=Barcelona&minGoals=10&pos=F`

    Will return an array containing field (F) players from Barcelona that scored 10 goals or more


### team
1. Get all teams - `/api/teams`
2. Get team by id - `/api/teams/${id}`
3. Get team by name - `/api/teams/${teamName}`