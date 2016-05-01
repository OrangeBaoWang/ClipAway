var phase_audio;
var declipping_audio;
var playlist;
var tracks;
var current;


$(document).ready(function() {
  init_phase();
  init_declipping();

  function init_phase(){
    current = 0;
    phase_audio = $('#phase_player');
    playlist = $('#phase_playlist');
    tracks = playlist.find('a.phase_track');
    len = tracks.length - 1;
    phase_audio[0].volume = .20;
    phase_audio[0].play();
    playlist.find('a').on('click', function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run_phase(link, phase_audio[0]);
        return false;
    });
  }
  function run_phase(link, player){
    player.src = link.attr('href');
    par = link.parent();
    $('.phase_active').removeClass('phase_active');
    par.addClass('phase_active');
    phase_audio[0].load();
    phase_audio[0].play();
  }

  function init_declipping(){
    current = 0;
    declipping_audio = $('#declipping_player');
    playlist = $('#declipping_playlist');
    tracks = playlist.find('a.declipping_track');
    len = tracks.length - 1;
    declipping_audio[0].volume = .20;
    declipping_audio[0].play();
    playlist.find('a').on('click', function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run_declipping(link, declipping_audio[0]);
        return false;
    });
  }
  function run_declipping(link, player){
    player.src = link.attr('href');
    par = link.parent();
    $('.declipping_active').removeClass('declipping_active');
    par.addClass('declipping_active');
    declipping_audio[0].load();
    declipping_audio[0].play();
  }
});