const findTopScorrer = dataArr =>{
    let topScorrer= [];
    let mostGoals = 0;

    dataArr.forEach(pl=> {
        if(pl.player == ""){
            return;
        }
        if(pl.goals > mostGoals){
            topScorrer = [pl.player];
            mostGoals = pl.goals;
        }
        else if(pl.goals == mostGoals) topScorrer.push(pl.player);
    })
    console.log("top scorrer: " + topScorrer.join(" "));
    console.log("goals: "+mostGoals);
    return topScorrer;
}
const findTopAssists = playerArr =>{
    let topAssists= [];
    let mostAssists = 0;

    dataArr.forEach(pl=> {
        if(pl.player == ""){
            return;
        }
        if(pl.assists > mostAssists){
            topAssists = [pl.player];
            mostAssists = pl.assists;
        }
        else if(pl.assists == mostAssists) topAssists.push(pl.player);
    })
    console.log("top assists: " + topAssists.join(" "));
    console.log("assists: "+mostAssists);
}

const getAllTopPlayers= data => data.filter(pl=> (pl.no < 3 && pl.assists>8&& pl.player!=""));