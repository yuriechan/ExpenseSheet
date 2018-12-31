// <html>
//   <head></head>
//   <body>
    // <!--
    // BEFORE RUNNING:
    // ---------------
    // 1. If not already done, enable the Google Sheets API
    //    and check the quota for your project at
    //    https://console.developers.google.com/apis/api/sheets
    // 2. Get access keys for your application. See
    //    https://developers.google.com/api-client-library/javascript/start/start-js#get-access-keys-for-your-application
    // 3. For additional information on authentication, see
    //    https://developers.google.com/sheets/api/quickstart/js#step_2_set_up_the_sample
    // -->
    // <script>
    function makeApiCall() {

      var ssID = '';
      var rng = 'Sheet1';

      var vals = new Array(counter);
      for (var row = 0; row < counter; row++){
        vals[row] = new Array(4);
        for (var col = 0; col < 4; col++){
          vals[row][col] = document.getElementById(row + ":" + col).val();
          console.log(vals[row][col])
        }
      }
      console.log('tested')
      var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: ssID,  // TODO: Update placeholder value.

        // The A1 notation of a range to search for a logical table of data.
        // Values will be appended after the last row of the table.
        range: rng,  // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'RAW' // TODO: Update placeholder value.
        //
        // // How the input data should be inserted.
        // insertDataOption: '',  // TODO: Update placeholder value.
      };

      var valueRangeBody = { "values" : vals
        // TODO: Add desired properties to the request body.
      };

      var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

    function initClient() {
      var API_KEY = '';  // TODO: Update placeholder with desired API key.

      var CLIENT_ID = '';  // TODO: Update placeholder with desired client ID.

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/spreadsheets'
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
    // </script>
    // <script async defer src="https://apis.google.com/js/api.js"
    //   onload="this.onload=function(){};handleClientLoad()"
    //   onreadystatechange="if (this.readyState === 'complete') this.onload()">
    // </script>
    // <button id="signin-button" onclick="handleSignInClick()">Sign in</button>
    // <button id="signout-button" onclick="handleSignOutClick()">Sign out</button>
//   </body>
// </html>
