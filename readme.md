# Soccer API


## Description

* This project designed to create a soccer API, of all teams and players in the top 5 leagues of europe (and rossia, from some reason...).

* The data was scrapped from understat.com

* I used the web-scrapping method, using "puppeteer" on Node.js .

* The database contain over 3000 players and over 100 teams.

* This API is meant for progremming and educational purposes only.


## Object keys documentation
- All keys exist in json files 
- Mysql is missing 'xG', 'xGA', 'Xpts' keys from team, and 'sh90', 'kp90', 'xG', 'xA', 'xG90', xA90' keys from player.

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
    league: string,
    id: number                  
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
    id: number,
    team: string
}
```

## API ENDPOINTS docs 
* Use the football.sql file in './src/server/1-database/football.sql to create the sql database and tables.
* run the node server 

### Players

1. Get all players - 
    * `/api/players`
2. Get player by id - 
    * `/api/players/${playerId}`
3. Get player by name - 
    * `/api/players/${playerName}`
4. Get top scorrer player - 
    * `/api/players/top/scorrer`
5. Get top assist player - 
    * `/api/players/top/assists`
6. Get players by position    F | F M | M | D M | S | D | GK
    * `/api/players/position/{positionInitials}`
7. Get players by team
    * `/api/players/team/{teamName}`
8. Get players by filter querystring (all optional, not required): 
    * `/api/players/filter?`
    
    params:               
    * `minGoals={number}`
    * `minAssists={number}`
    `
    For example: 
    
    /api/players/filter?minGoals=10&minAssists=15

    Will return an array containing all players scored 10 goals or more and have 15 assists or more 


### Teams
1. Get all teams - `/api/teams`
2. Get team by id - `/api/teams/{teamId}`
3. Get team by name - `/api/teams/{teamName}`
