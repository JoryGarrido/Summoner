function setDisplay(){
  var $playerName = $('.name').val().toLowerCase();
  var $playerID = summonerInfo[0][$playerName]['id'];
  var $profileId = summonerInfo[0][$playerName]['profileIconId'];

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

console.log(favoriteChamps['champ1']['champName']);
  $('#champ1 img').attr('src','http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/'+ favoriteChamps['champ1']['champName'] +'.png')
  $('#champ2 img').attr('src','http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/'+ favoriteChamps['champ2']['champName'] +'.png')
  $('#champ3 img').attr('src','http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/'+ favoriteChamps['champ3']['champName'] +'.png')
}
