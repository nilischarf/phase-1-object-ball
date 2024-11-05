function gameObject(){
    return{
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 3,
                    'blocks': 3,
                    'slamDunks': 1
                },
                'Reggie Evans': {
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7
                },
                'Brook Lopez': {
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assists': 10,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 15
                },
                'Mason Plumee': {
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assists': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5
                },
                'Jason Terry': {
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assists': 2,
                    'steals': 4,
                    'blocks': 11,
                    'slamDunks': 1
                }
            } 
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    'number': 4,
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assists': 1,
                    'steals': 2,
                    'blocks': 7,
                    'slamDunks': 2
                },
                'Bismak Biyombo': {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assists': 7,
                    'steals': 7,
                    'blocks': 15,
                    'slamDunks': 10
                },
                'DeSagna Diop': {
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5
                },
                'Ben Gordon': {
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assists': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0
                },
                'Brendan Haywood': {
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 22,
                    'blocks': 5,
                    'slamDunks': 12
                }
            }
        }  
    }
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
console.log(homeTeamName());


function numPointsScored(playerName) {
    let game = gameObject();
    for (let team of Object.values(game)) {
      if (team.players[playerName]) {
        return team.players[playerName].points;
      }
    }
  }
console.log(numPointsScored('Alan Anderson'));


function shoeSize(playerName) {
    const game = gameObject();
    for (let team of Object.values(game)) {
      if (team.players[playerName]) {
        return team.players[playerName].shoe;
      }
    }
  }
console.log(shoeSize('Alan Anderson'));


function teamColors(teamName) {
    const game = gameObject();
    for (let team of Object.values(game)) {
        if (team.teamName === teamName) {
        return team.colors;
    }
} 
}   
console.log(teamColors('Charlotte Hornets'));


function teamNames() {
    const object = gameObject();
    return [object['home']['teamName'], object['away']['teamName']]
  }
console.log(teamNames())


function playerNumbers(teamName) {
    const game = gameObject();
    for (let team of Object.values(game)) {
      if (team.teamName === teamName) {
        return Object.values(team.players).map(player => player.number);
      }
    }
  }
  console.log(playerNumbers('Charlotte Hornets'))


function playerStats(playerName) {
    const game = gameObject();
    for (let team of Object.values(game)) {
      if (team.players[playerName]) {
        return team.players[playerName];
      }
    }
  }
console.log(playerStats('Brook Lopez'))


function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let reboundsOfLargestShoe = 0;
  
    for (let team of Object.values(game)) {
      for (let player of Object.values(team.players)) {
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          reboundsOfLargestShoe = player.rebounds;
        }
      }
    }
  
    return reboundsOfLargestShoe;
  }
console.log(bigShoeRebounds())


function mostPointsScored(){
    const game = gameObject();
    let mostPoints = 0;
    let winner = 0

    for (let team of Object.values(game)) {
        for (let [playerName, stats] of Object.entries(team.players)) {
          if (stats.points > mostPoints) {
            mostPoints = stats.points;
            winner = playerName
          }
        }
      }
      return winner;
}
console.log(mostPointsScored())


function winningTeam() {
    const game = gameObject();
    let mostPoints = 0;
    let winningTeamName = 0;
  
    for (let team of Object.values(game)) {
      const teamPoints = Object.values(team.players).reduce((sum, player) => sum + player.points, 0);
      if (teamPoints > mostPoints) {
        mostPoints = teamPoints;
        winningTeamName = team.teamName;
      }
    }
  
    return winningTeamName;
  }
  console.log(winningTeam())


  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let longestNamePlayer = 0;
  
    for (let team of Object.values(game)) {
      for (let playerName of Object.keys(team.players)) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
          longestNamePlayer = playerName;
        }
      }
    }
  
    return longestNamePlayer;
  }
  console.log(playerWithLongestName())


  function doesLongNameStealATon() {
    const game = gameObject();
    let longestNamePlayer = "";
    let maxSteals = 0;
    let playerWithMostSteals = "";
  
    for (let team of Object.values(game)) {
      for (let playerName of Object.keys(team.players)) {
        if (playerName.length > longestNamePlayer.length) {
          longestNamePlayer = playerName;
        }
      }
    }
  
    for (let team of Object.values(game)) {
      for (let [playerName, stats] of Object.entries(team.players)) {
        if (stats.steals > maxSteals) {
          maxSteals = stats.steals;
          playerWithMostSteals = playerName;
        }
      }
    }
  
    return longestNamePlayer === playerWithMostSteals;
  }
  console.log(doesLongNameStealATon())