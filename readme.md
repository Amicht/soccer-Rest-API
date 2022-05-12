# Soccer API


## Description

* This project designed to create a soccer API, of all teams and players in the top 5 leagues of europe (and rossia, from some reason...).

* The data was scrapped from understat.com

* I used the web-scrapping method, using "puppeteer" on Node.js .

* The database contain over 3000 players and over 100 teams.

* This API is meant for progremming purposes only.


## Object keys documentation

### Team
```
{
    no: number,                          // rank number in the league 
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
```
{
    no: number,                  // rank on the team
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
    * `http://localhost:5445/api/players`
2. Get player by id - 
    * `http://localhost:5445/api/players/${id}`
3. Get player by name - 
    * `http://localhost:5445/api/players/${playerName}`
4. Get top scorer player - 
    * `http://localhost:5445/api/players/top/scorer`
5. Get top assist player - 
    * `http://localhost:5445/api/players/top/assists`
6. Get players by filter querystring (all optional, not required): 
    * `http://localhost:5445/api/players/filter?`
    
    params:
    * `team=${teamName}`
    * `pos=${player-position}`                 F | F M | M | D M | S | D | GK
    * `minGoals=${number}`
    * `maxGoals=${number}`
    * `minAsts=${number}`
    * `maxAsts=${number}`
    
    For example: 
    
    http://localhost:5445/api/players/filter?team=Barcelona&minGoals=10&pos=F

    Will return an array containing all forward (F) players from Barcelona that scored 10 goals or more


### team
1. Get all teams - `http://localhost:5445/api/teams`
2. Get team by id - `http://localhost:5445/api/teams/${id}`
3. Get team by name - `http://localhost:5445/api/teams/${teamName}`
