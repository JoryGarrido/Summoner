
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

  for (var i = 1; i < 4; i++) {
    var name = favoriteChamps['champ' + i]['champName'];
    var url = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

    $('#champ' + i).css('background', 'url(' + url + name + '_0.jpg' +  ')');
    $('#champ' + i).css('background-repeat', 'no-repeat');



    $('#champ' + i + ' #games').append(favoriteChamps['champ' + i]['totalSessions']);

    $('#champ' + i + ' #champWinRate').append(favoriteChamps['champ' + i]['winRate'].toPrecision(2) + '%');

    $('#champ' + i + ' #champKDA').append(favoriteChamps['champ' + i]['kills'] + '/' + favoriteChamps['champ' + i]['deaths'] + '/' + favoriteChamps['champ' + i]['assists']);
  };

  for (var i = 0; i < 5; i++){
    var name2 = games['champNamegame' + i];
  $('#game'+ i +'item1').attr('src', items['game' + i + 'Item0Img']);
  $('#game'+ i +'item2').attr('src', items['game' + i + 'Item1Img']);
  $('#game'+ i +'item3').attr('src', items['game' + i + 'Item2Img']);
  $('#game'+ i +'item4').attr('src', items['game' + i + 'Item3Img']);
  $('#game'+ i +'item5').attr('src', items['game' + i + 'Item4Img']);
  $('#match' + (i+1) + 'KDA').text(games['killsgame' + i] + '/' + games['deathsgame' + i] + '/' + games['assistsgame' + i]);
  $('#game'+ i + 'Champ').attr('src', games['champImggame' + i]);
  if(games['winnergame' + i] === true){
    $('#win-lossgame' + i).text("WIN")
    $('#game' + i).removeClass('info').addClass('win');
  }
  else if(games['winnergame' + i] === false){
    $('#win-lossgame' + i).text("DEFEAT");
    $('#game' + i).removeClass('info').addClass('loss');
  }

}



var gauge1 = loadLiquidFillGauge("fillgauge1", 48);
var config1 = liquidFillGaugeDefaultSettings();
config1.circleColor = "#FF7777";
config1.textColor = "#FF4444";
config1.waveTextColor = "#FFAAAA";
config1.waveColor = "#FFDDDD";
config1.circleThickness = 0.2;
config1.textVertPosition = 0.2;
config1.waveAnimateTime = 1000;
var gauge2= loadLiquidFillGauge("fillgauge2", 28, config1);
var config2 = liquidFillGaugeDefaultSettings();
config2.circleColor = "#D4AB6A";
config2.textColor = "#553300";
config2.waveTextColor = "#805615";
config2.waveColor = "#AA7D39";
config2.circleThickness = 0.1;
config2.circleFillGap = 0.2;
config2.textVertPosition = 0.8;
config2.waveAnimateTime = 2000;
config2.waveHeight = 0.3;
config2.waveCount = 1;
var gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config2);
var config3 = liquidFillGaugeDefaultSettings();
config3.textVertPosition = 0.8;
config3.waveAnimateTime = 5000;
config3.waveHeight = 0.15;
config3.waveAnimate = false;
config3.waveOffset = 0.25;
config3.valueCountUp = false;
config3.displayPercent = false;
var gauge4 = loadLiquidFillGauge("fillgauge4", 50, config3);
var config4 = liquidFillGaugeDefaultSettings();
config4.circleThickness = 0.15;
config4.circleColor = "#808015";
config4.textColor = "#555500";
config4.waveTextColor = "#FFFFAA";
config4.waveColor = "#AAAA39";
config4.textVertPosition = 0.8;
config4.waveAnimateTime = 1000;
config4.waveHeight = 0.05;
config4.waveAnimate = true;
config4.waveRise = false;
config4.waveHeightScaling = false;
config4.waveOffset = 0.25;
config4.textSize = 0.75;
config4.waveCount = 3;
var gauge5 = loadLiquidFillGauge("fillgauge5", 60.44, config4);
var config5 = liquidFillGaugeDefaultSettings();
config5.circleThickness = 0.4;
config5.circleColor = "#6DA398";
config5.textColor = "#0E5144";
config5.waveTextColor = "#6DA398";
config5.waveColor = "#246D5F";
config5.textVertPosition = 0.52;
config5.waveAnimateTime = 5000;
config5.waveHeight = 0;
config5.waveAnimate = false;
config5.waveCount = 2;
config5.waveOffset = 0.25;
config5.textSize = 1.2;
config5.minValue = 30;
config5.maxValue = 150
config5.displayPercent = false;
var gauge6 = loadLiquidFillGauge("fillgauge6", 120, config5);

function NewValue(){
    if(Math.random() > .5){
        return Math.round(Math.random()*100);
    } else {
        return (Math.random()*100).toFixed(1);
    }
}


};
