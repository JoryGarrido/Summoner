var summonerInfo = [];
var matchIds = [];
var games = {};
var items = {};
var nameList = [];
var favoriteChamps = {
  champ1: {
    totalSessions: 0,
  },
  champ2: {
    totalSessions: 0,
  },
  champ3: {
    totalSessions: 0,
  }
};
var userStats = {
  winRate: 0
};
$(function(){
  $('.name').on('focus', function(){
    if ($('.headerUl').length > 0) return;
    var list = localStorage.getItem('nameList');

    if(!list) return;
    list = JSON.parse(list);

    var ul = $('<ul class="headerUl"></ul>');

    for (var i = 0; i < list.length; i++) {
      var li = $('<li>' + list[i] + '</li>');
      li.click(function(e) {
        $('.name').val($(e.target).text());
      })
      ul.append(li);
    }
    $('header').append(ul);
  });
});

$('button').on("click", getData);



$('button').on('click', function(){
  var name = $('.name').val();
  var list = localStorage.getItem('nameList');

  if(!list){
    list = [];
    list.push(name);
  }
  else{
    var listArray = JSON.parse(list);
    if(listArray.indexOf(name) === -1){
      listArray.push(name);
    }
    list = listArray;
  }

  // list.sort();
  localStorage.setItem('nameList', JSON.stringify(list));

  console.log("local", localStorage.getItem('nameList'));

  console.log("s;dfha");
  var list = localStorage.getItem('nameList');
  if(!list) return;
  list = JSON.parse(list);
  $('.headerUl').remove();
});


function clearInfo(){
  summonerInfo = [];
};

function getData($playerName){
  clearInfo();
  var $playerName = $('.name').val().toLowerCase();
  $.ajax({
    url: 'data/summonername.json',
    dataType: "json",  }).then(getSummLeague).then(getMatchHistory).then(getMatchID).then(getMatchData).then(getRankedStats).then(getChampImages)

  function getSummLeague(data){
    summonerInfo.push(data);
    // console.log(summonerInfo[0][$playerName]);
    var $playerID = summonerInfo[0][$playerName]['id'];
    return $.ajax({
      url: 'data/summonerleague.json',
      dataType: "json",
    });
  };

  function getMatchHistory(data){
    summonerInfo.push(data);
    var $playerID = summonerInfo[0][$playerName]['id'];
    return $.ajax({
      url: 'data/matchlist.json',
      dataType: 'json',
    })
  };

  function getMatchID(data){
    summonerInfo.push(data);
    for (var i = 0; i < 5; i++) {
      matchIds.push(summonerInfo[2]['matches'][i]['matchId']);
    }
  };

  function getMatchData(data){
    var $playerID = summonerInfo[0][$playerName]['id'];
    var counter = 0;
    for (var i = 0; i < matchIds.length; i++) {
      $.ajax({
        url: 'data/match/match' + i + '.json',
        dataType: 'json',
      }).then(function(data){
        summonerInfo.push(data);
        for (var i = 0; i < data['participantIdentities'].length; i++) {
          if(data['participantIdentities'][i]['player']['summonerId'] === $playerID){
            var participantIdGame = data['participantIdentities'][i]['participantId'];
          }
          if (data['participants'][i]['participantId'] === participantIdGame){
             games['champId' + 'game' + counter] = data['participants'][i]['championId'];
             games['assists' + 'game' + counter] = data['participants'][i]['stats']['assists'];
             games['kills' + 'game' + counter] = data['participants'][i]['stats']['kills'];
             games['deaths' + 'game' + counter] = data['participants'][i]['stats']['deaths'];
             games['item0' + 'game' + counter] = data['participants'][i]['stats']['item0'];
             games['item1' + 'game' + counter] = data['participants'][i]['stats']['item1'];
             games['item2' + 'game' + counter] = data['participants'][i]['stats']['item2'];
             games['item3' + 'game' + counter] = data['participants'][i]['stats']['item3'];
             games['item4' + 'game' + counter] = data['participants'][i]['stats']['item4'];
             games['item5' + 'game' + counter] = data['participants'][i]['stats']['item5'];
             games['item6' + 'game' + counter] = data['participants'][i]['stats']['item6'];
             games['winner' + 'game' + counter] = data['participants'][i]['stats']['winner'];
             counter++;
          }
          games['champId' + 'game' + 0] = data['participants'][3]['championId'];
          games['assists' + 'game' + 0] = data['participants'][3]['stats']['assists'];
          games['kills' + 'game' + 0] = data['participants'][3]['stats']['kills'];
          games['deaths' + 'game' + 0] = data['participants'][3]['stats']['deaths'];
          games['item0' + 'game' + 0] = data['participants'][3]['stats']['item0'];
          games['item1' + 'game' + 0] = data['participants'][3]['stats']['item1'];
          games['item2' + 'game' + 0] = data['participants'][3]['stats']['item2'];
          games['item3' + 'game' + 0] = data['participants'][3]['stats']['item3'];
          games['item4' + 'game' + 0] = data['participants'][3]['stats']['item4'];
          games['item5' + 'game' + 0] = data['participants'][3]['stats']['item5'];
          games['item6' + 'game' + 0] = data['participants'][3]['stats']['item6'];
          games['winner' + 'game' + 0] = data['participants'][3]['stats']['winner'];
        }
      }).then(function(){
        for (var i = 0; i < 5; i++) {
          items['game' + i + 'Item0Img'] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/item/' + games['item0game' + i] + '.png';
          items['game' + i + 'Item1Img'] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/item/' + games['item1game' + i] + '.png';
          items['game' + i + 'Item2Img'] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/item/' + games['item2game' + i] + '.png';
          items['game' + i + 'Item3Img'] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/item/' + games['item3game' + i] + '.png';
          items['game' + i + 'Item4Img'] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/item/' + games['item4game' + i] + '.png';
          items['game' + i + 'Item5Img'] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/item/' + games['item5game' + i] + '.png';
        }
      });
      }
    }
  }

function getRankedStats(data){
  var $playerName = $('.name').val().toLowerCase();
  var $playerID = summonerInfo[0][$playerName]['id'];
  return $.ajax({
    url: 'data/stats.json',
    dataType: 'json',
  }).then(function(data){
    for (var i = 0; i < data['champions'].length; i++) {
      if(data['champions'][i]['id'] !== 0 && data['champions'][i]['stats']['totalSessionsPlayed'] > favoriteChamps['champ1']['totalSessions']){
        favoriteChamps['champ1']['id'] = data['champions'][i]['id'];
        favoriteChamps['champ1']['totalSessions'] = data['champions'][i]['stats']['totalSessionsPlayed'];
        favoriteChamps['champ1']['kills'] = data['champions'][i]['stats']['maxChampionsKilled'];
        favoriteChamps['champ1']['deaths'] = data['champions'][i]['stats']['maxNumDeaths'];
        favoriteChamps['champ1']['assists'] = data['champions'][i]['stats']['totalAssists'];
        favoriteChamps['champ1']['wins'] = data['champions'][i]['stats']['totalSessionsWon'];
        favoriteChamps['champ1']['losses'] = data['champions'][i]['stats']['totalSessionsLost'];
        var total = favoriteChamps['champ1']['wins'] + favoriteChamps['champ1']['losses'];
        favoriteChamps['champ1']['winRate'] = (favoriteChamps['champ1']['wins'] / total) * 100;
      }
      else if(data['champions'][i]['id'] !== 0 && data['champions'][i]['stats']['totalSessionsPlayed'] > favoriteChamps['champ2']['totalSessions']){
        favoriteChamps['champ2']['id'] = data['champions'][i]['id'];
        favoriteChamps['champ2']['totalSessions'] = data['champions'][i]['stats']['totalSessionsPlayed'];
        favoriteChamps['champ2']['kills'] = data['champions'][i]['stats']['maxChampionsKilled'];
        favoriteChamps['champ2']['deaths'] = data['champions'][i]['stats']['maxNumDeaths'];
        favoriteChamps['champ2']['assists'] = data['champions'][i]['stats']['totalAssists'];
        favoriteChamps['champ2']['wins'] = data['champions'][i]['stats']['totalSessionsWon'];          favoriteChamps['champ2']['losses'] = data['champions'][i]['stats']['totalSessionsLost'];
        var total = favoriteChamps['champ2']['wins'] + favoriteChamps['champ2']['losses'];
        favoriteChamps['champ2']['winRate'] = (favoriteChamps['champ2']['wins'] / total) * 100;
      }
      else if(data['champions'][i]['id'] !== 0 && data['champions'][i]['stats']['totalSessionsPlayed'] > favoriteChamps['champ3']['totalSessions']){
        favoriteChamps['champ3']['id'] = data['champions'][i]['id'];
        favoriteChamps['champ3']['totalSessions'] = data['champions'][i]['stats']['totalSessionsPlayed'];
        favoriteChamps['champ3']['kills'] = data['champions'][i]['stats']['maxChampionsKilled'];
        favoriteChamps['champ3']['deaths'] = data['champions'][i]['stats']['maxNumDeaths'];
        favoriteChamps['champ3']['assists'] = data['champions'][i]['stats']['totalAssists'];
        favoriteChamps['champ3']['wins'] = data['champions'][i]['stats']['totalSessionsWon'];
        favoriteChamps['champ3']['losses'] = data['champions'][i]['stats']['totalSessionsLost'];
        var total = favoriteChamps['champ3']['wins'] + favoriteChamps['champ3']['losses'];
        favoriteChamps['champ3']['winRate'] = (favoriteChamps['champ3']['wins'] / total) * 100;
      }
      else if(data['champions'][i]['id'] === 0){
        userStats['winRate'] = (data['champions'][i]['stats']['totalSessionsWon'] / (data['champions'][i]['stats']['totalSessionsWon'] + data['champions'][i]['stats']['totalSessionsLost'])) * 100;
        userStats['wins'] = (data['champions'][i]['stats']['totalSessionsWon']);
        userStats['losses'] = (data['champions'][i]['stats']['totalSessionsLost']);
      }
    }
  })
};

function getChampImages(){
  $.ajax({
    url: 'data/champions.json',
    dataType: 'json',
  }).then(function (data){
    return getFavoriteChampImages(data);
  }).then(function (){
    setDisplay();
  });
};

function getFavoriteChampImages(data){
  for (var keys in data['data']){
  var counter = 0;
    for (i = 0; i < matchIds.length; i++) {
      if(games['champIdgame' + counter] === data['data'][keys]['id']) {
        games['champNamegame'  + counter] = data['data'][keys]['key'];
        games['champImggame'  + counter] = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/' + games['champNamegame' + counter] + '.png';
      }
      counter++;
    }
    for (var keys2 in favoriteChamps){
      if (favoriteChamps['champ1']['id'] === data['data'][keys]['id']){
        favoriteChamps['champ1']['champName'] = data['data'][keys]['key'];
      }
      else if (favoriteChamps['champ2']['id'] === data['data'][keys]['id']){
        favoriteChamps['champ2']['champName'] = data['data'][keys]['key'];
      }
      else if (favoriteChamps['champ3']['id'] === data['data'][keys]['id']){
        favoriteChamps['champ3']['champName'] = data['data'][keys]['key'];
      }
    }
  }
};
