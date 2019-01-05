<script>

    function makeApiCall() {
       // TODO: Update placeholder with google spreadsheet ID.
      var ssID = '';
      var rng = 'Sheet1';

      console.log(counter + 'api.js')
      var vals = new Array(counter);
      for (var row = 0; row < counter; row++){
        vals[row] = new Array(4);
        for (var col = 0; col < 4; col++){
          vals[row][col] = document.getElementById(row + ":" + col).value;
          console.log(vals[row][col])
        }
      }
      console.log('tested')
      var params = {
        spreadsheetId: ssID,
        range: rng,
        valueInputOption: 'RAW'
      };

      var valueRangeBody = { "values" : vals };

      var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function(response) {
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

    function initClient() {
       // TODO: Update placeholder with desired API key.
      var API_KEY = '';
      // TODO: Update placeholder with desired client ID.
      var CLIENT_ID = '';
      var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        makeApiCall();
        console.log('make api called')
      }
    }

    function handleSignInClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }
</script>
