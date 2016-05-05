function setDisplay(){
  var $playerName = $('.name').val().toLowerCase();
  var $playerID = summonerInfo[0][$playerName]['id'];
  var $profileId = summonerInfo[0][$playerName]['profileIconId'];
  console.log(summonerInfo);

  if (summonerInfo[1][$playerID][0]['tier'] === "BRONZE"){
    $('#divIcon').attr('src', 'tier-icons/base_icons/bronze.png');
    $('#league').append(summonerInfo[1][$playerID][0]['tier']);
  }
  else if(summonerInfo[1][$playerID][0]['tier'] === "SILVER"){
    $('#divIcon').attr('src', 'tier-icons/base_icons/silver.png');
    $('#league').append(summonerInfo[1][$playerID][0]['tier']);
  }
  else if(summonerInfo[1][$playerID][0]['tier'] === "GOLD"){
    $('#divIcon').attr('src', 'tier-icons/base_icons/gold.png');
    $('#league').append(summonerInfo[1][$playerID][0]['tier']);
  }
  else if(summonerInfo[1][$playerID][0]['tier'] === "PLATINUM"){
    $('#divIcon').attr('src', 'tier-icons/base_icons/platinum.png');
    $('#league').append(summonerInfo[1][$playerID][0]['tier']);
  }
  else if(summonerInfo[1][$playerID][0]['tier'] === "DIAMOND"){
    $('#divIcon').attr('src', 'tier-icons/base_icons/diamond.png');
    $('#league').append(summonerInfo[1][$playerID][0]['tier']);
  }
  else if(summonerInfo[1][$playerID][0]['tier'] === "MASTER"){
    $('#divIcon').attr('src', 'tier-icons/base_icons/master.png');
    $('#league').append(summonerInfo[1][$playerID][0]['tier']);
  }
  else if(summonerInfo[1][$playerID][0]['tier'] === "CHALLENGER"){
    $('#divIcon').attr('src', 'tier-icons/base_icons/challenger.png');
    $('#league').append(summonerInfo[1][$playerID][0]['tier']);
  }
  else $('#divIcon').attr('src', 'tier-icons/base_icons/provisional.png'); $('.divisonIcon h2').append(summonerInfo[1][$playerID][0]['tier']);


  $('#summIcon').attr('src', 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/profileicon/' + $profileId + '.png');

  $('.winRate h2').append(userStats['winRate'].toPrecision(2)).append('%');
  $('#wins').append(userStats['wins']);
  $('#losses').append(userStats['losses']);

  for (var i = 1; i < 4; i++) {
    $('#champ' + i + ' img').attr('src','http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/'+ favoriteChamps['champ' + i]['champName'] +'.png')

    $('#champ' + i + ' #games').append(favoriteChamps['champ' + i]['totalSessions']);

    $('#champ' + i + ' #champWinRate').append(favoriteChamps['champ' + i]['winRate'].toPrecision(2) + '%');

    $('#champ' + i + ' #champKDA').append(favoriteChamps['champ' + i]['kills'] + '/' + favoriteChamps['champ' + i]['deaths'] + '/' + favoriteChamps['champ' + i]['assists']);
  };

  $('#game0item1').attr('src', items['game0Item0Img']);
  $('#game0item2').attr('src', items['game0Item1Img']);
  $('#game0item3').attr('src', items['game0Item2Img']);
  $('#game0item4').attr('src', items['game0Item3Img']);
  $('#game0item5').attr('src', items['game0Item4Img']);

  $('#game1item1').attr('src', items['game1Item0Img']);
  $('#game1item2').attr('src', items['game1Item1Img']);
  $('#game1item3').attr('src', items['game1Item2Img']);
  $('#game1item4').attr('src', items['game1Item3Img']);
  $('#game1item5').attr('src', items['game1Item4Img']);

  $('#game2item1').attr('src', items['game2Item0Img']);
  $('#game2item2').attr('src', items['game2Item1Img']);
  $('#game2item3').attr('src', items['game2Item2Img']);
  $('#game2item4').attr('src', items['game2Item3Img']);
  $('#game2item5').attr('src', items['game2Item4Img']);

  $('#game3item1').attr('src', items['game3Item0Img']);
  $('#game3item2').attr('src', items['game3Item1Img']);
  $('#game3item3').attr('src', items['game3Item2Img']);
  $('#game3item4').attr('src', items['game3Item3Img']);
  $('#game3item5').attr('src', items['game3Item4Img']);

  $('#game4item1').attr('src', items['game4Item0Img']);
  $('#game4item2').attr('src', items['game4Item1Img']);
  $('#game4item3').attr('src', items['game4Item2Img']);
  $('#game4item4').attr('src', items['game4Item3Img']);
  $('#game4item5').attr('src', items['game4Item4Img']);




  $('#game0Champ').attr('src', games['champImggame0']);
  $('#game1Champ').attr('src', games['champImggame1']);
  $('#game2Champ').attr('src', games['champImggame2']);
  $('#game3Champ').attr('src', games['champImggame3']);
  $('#game4Champ').attr('src', games['champImggame4']);




  if(games['winnergame0'] === true){
    $('#win-lossgame0').text("WIN")
  }
  else $('#win-lossgame0').text("DEFEAT")

  if(games['winnergame1'] === true){
    $('#win-lossgame1').text("WIN")
  }
  else $('#win-lossgame1').text("DEFEAT")

  if(games['winnergame2'] === true){
    $('#win-lossgame2').text("WIN")
  }
  else $('#win-lossgame2').text("DEFEAT")

  if(games['winnergame3'] === true){
    $('#win-lossgame3').text("WIN")
  }
  else $('#win-lossgame3').text("DEFEAT")

  if(games['winnergame4'] === true){
    $('#win-lossgame4').text("WIN")
  }
  else $('#win-lossgame4').text("DEFEAT")

  console.log(games);

  $('#match1KDA').text(games['killsgame0'] + '/' + games['deathsgame0'] + '/' + games['assistsgame0']);
  $('#match2KDA').text(games['killsgame1'] + '/' + games['deathsgame1'] + '/' + games['assistsgame1']);
  $('#match3KDA').text(games['killsgame2'] + '/' + games['deathsgame2'] + '/' + games['assistsgame2']);
  $('#match4KDA').text(games['killsgame3'] + '/' + games['deathsgame3'] + '/' + games['assistsgame3']);
  $('#match5KDA').text(games['killsgame4'] + '/' + games['deathsgame4'] + '/' + games['assistsgame4']);

};
