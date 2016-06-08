// Login and data acquisition JS file


function authorizeUser() {
    var scopes = 'user-top-read';
    var url = 'https://accounts.spotify.com/authorize?client_id=' + SPOTIFY_CLIENT_ID +
        '&response_type=token' +
        '&scope=' + encodeURIComponent(scopes) +
        '&redirect_uri=' + encodeURIComponent(SPOTIFY_REDIRECT_URI);
    document.location = url;
}

function parseArgs() {
    var hash = location.hash.replace(/#/g, '');
    var all = hash.split('&');
    var args = {};
    _.each(all, function(keyvalue) {
        var kv = keyvalue.split('=');
        var key = kv[0];
        var val = kv[1];
        args[key] = val;
    });
    return args;
}

function getSpotify(url, data, fireAway) {
    $.ajax(url, {
        dataType: 'json',
        data: data,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function(r) {
            //do a thing?
        },

        error: function(r) {
            // console.log('GET fail')
        }
    });

}

function fetchCurrentUserProfile() {
    var url = 'https://api.spotify.com/v1/me';
    // console.log('fetching current user')
    getSpotify(url, null, 0);
}

function getTopTracks(uid) {
    var url = 'https://api.spotify.com/v1/me/top/tracks'
    var data = {
        limit: 50,
        offset: 0,
        time_range: 'medium_term'
    }

    getSpotify(url, data, 1)
}

function getTopArtists(uid) {
    var url = 'https://api.spotify.com/v1/me/top/artists'
    var data = {
        limit: 15,
        offset: 0,
        time_range: 'medium_term'
    }

    getSpotify(url, data, 2);
}
