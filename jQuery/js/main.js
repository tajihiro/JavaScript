$(function(){
//    $('#msg').text('<div>Hello たぢさん。</div>');
    $('#msg').html('<div>Hello たぢさん。</div>');
    $('#btn').click(function(){
        var uri = 'http://misconduct.mybluemix.net/api/season_teams/league/1/season/34/division/4.json'; 
        $.getJSON(uri,{},
              function(response, status, xhr){
                  var season_teams = response.season_teams;
                   for(var i in season_teams){
                       for(var n in season_teams[i]){
                           var team = season_teams[i][n];
                           console.log(team.team_id + " : " + team.team_name);
                       }
                   }
                    // var ol = $('<ol></ol>');
                    // ol.append('<li>'+ season_teams +'</li>')
                    // $('#msg').append(ol);
            });        
    })
});