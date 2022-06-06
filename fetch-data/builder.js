const baseURL = 'https://understat.com/';

const leagueUrl = leagueName => baseURL + 'league/'+ leagueName;
const teamUrl = (teamName,year) => baseURL + 'team/'+ teamName + '/'+year;

module.exports = {
    leagueUrl,
    teamUrl
}
