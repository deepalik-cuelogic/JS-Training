//4. Write a function that will accept a unix timeStamp and covert to its UTC equivalent value

function callConvertUTC(){
    var unixTimeValue = parseInt(document.getElementById('unixTimestamp').value);
    var UTCTimeValue = convertUTC(unixTimeValue);
    document.getElementsByClassName('UTC-time')[0].innerHTML = ('<p>UTC Time for '+ unixTimeValue +' is '+ UTCTimeValue +'</p>');
}

//function to convert to UTC
var convertUTC = function(unixTimeStamp){
      var UTCTime = new Date(unixTimeStamp*1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = UTCTime.getFullYear();
      var month = months[UTCTime.getMonth()];
      var date = UTCTime.getDate();
      var hour = UTCTime.getHours();
      var min = UTCTime.getMinutes();
      var sec = UTCTime.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
   // document.getElementsByClassName('UTC-time')[0].innerHTML += ('<p>UTC Time for '+ unixTimeValue +' is '+ UTCTimeValue +'</p><p>'+time+'</p>');
      return time;
      //return UTCTime;
}