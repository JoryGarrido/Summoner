var summonerInfo = [];
$('button').on("click", getSummName);

function getSummName(){
  var $playerName = $('.name').val().toLowerCase();
  $.ajax({
    url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + $playerName + '?api_key=0a7cccf5-526b-4a6a-914d-a1c94d946019',
    method: "GET",
  }).then(function getSummStats(data){
    summonerInfo.push(data);
    console.log(summonerInfo);
    var $playerID = data[$playerName]['id'];
    $.ajax({
      url: 'https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/' + $playerID + '?api_key=0a7cccf5-526b-4a6a-914d-a1c94d946019',
      method: "GET",
    }).then(function getMatchHistory(data){
      summonerInfo.push(data);
      console.log(summonerInfo);
      $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/' + $playerID + '?api_key=0a7cccf5-526b-4a6a-914d-a1c94d946019',
        method: 'GET',
      }).then(function getMatchData(data){
        summonerInfo.push(data);
        console.log(summonerInfo);
        var playerMatchData = summonerInfo[2]['matches'][0]['matchId']
        $.ajax({
          url: 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + playerMatchData + '?api_key=0a7cccf5-526b-4a6a-914d-a1c94d946019',
          method: 'GET',
        }).then(function (data){
          summonerInfo.push(data);
          console.log(summonerInfo);

        })
      })
    })
  });
};
