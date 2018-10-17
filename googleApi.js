
// function makeApiCall(action = "read") {
//   spreadsheetId: '';
//   range: 'Sheet1';
//
//   if (action == 'write'){
//     var vals = new Array(6);
//     for (var row = 0; row < 6; row++){
//       vals[row] = new Array(3);
//       for (var col = 0; col < 3; col++){
//         vals[row][col] = document.getElementById(row + ":" + col).value;
//       }
//     }
//     var params = {
//       spreadsheetId: '',  // TODO: Update placeholder value.
//       range: 'Sheet1',  // TODO: Update placeholder value.
//       valueInputOption : 'RAW'  // TODO: Update placeholder value.
//     };
//     //write code here
//     var valueRangeBody = {"values": vals};
//     var request = gapi.client.sheets.spreadsheets.values.update(params,valueRangeBody);
//     request.then(function(response){
//       console.log(response.result);
//     }, function(reason){
//       console.error('error: ' + reason.result.error.message);
//     });
//   }
//   else {
//     var params = {
//       spreadsheetId: '',  // TODO: Update placeholder value.
//       range: 'Sheet1',  // TODO: Update placeholder value.
//   };
//   var request = gapi.client.sheets.spreadsheets.values.get(params);
//   request.then(function(response) {
//     // TODO: Change code below to process the `response` object:
//     //console.log(response.result);
//     populateSheet(response.result);
//   }, function(reason) {
//     console.error('error: ' + reason.result.error.message);
//   });
// }}
//
// function initClient() {
//   var API_KEY = '';  // TODO: Update placeholder with desired API key.
//
//   var CLIENT_ID = '';  // TODO: Update placeholder with desired client ID.
//
//   // TODO: Authorize using one of the following scopes:
//   //   'https://www.googleapis.com/auth/drive'
//   //   'https://www.googleapis.com/auth/drive.file'
//   //   'https://www.googleapis.com/auth/drive.readonly'
//   //   'https://www.googleapis.com/auth/spreadsheets'
//   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
//   var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
//
//   gapi.client.init({
//     'apiKey': API_KEY,
//     'clientId': CLIENT_ID,
//     'scope': SCOPE,
//     'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//   }).then(function() {
//     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
//     updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//   });
// }
//
// function handleClientLoad() {
//   gapi.load('client:auth2', initClient);
// }
//
// function updateSignInStatus(isSignedIn) {
//   if (isSignedIn) {
//     makeApiCall();
//   }
// }
//
// function handleSignInClick(event) {
//   gapi.auth2.getAuthInstance().signIn();
// }
//
// function handleSignOutClick(event) {
//   gapi.auth2.getAuthInstance().signOut();
// }
//
// function handleSaveClick() {
//   makeApiCall(action="write");
// }
//
// // assign value from spreadsheet to each column and row in value attribute
//
// function populateSheet(result){
//   for (var row = 0; row < 8; row++){
//     for (var col = 0; col < 4; col++){
//       var dataFromSpreadSheet = result.values[row][col];
//       document.getElementById(row + ':' +col).value = result.values[row][col];
//     }
//   }
// }
//
// $(document).ready(function (){
//   for (var row = 0; row < 8; row++){
//
//     var div = $('<div>')
//     div.css("clear", "both")
//     $('body').append(div)
//     for (var col = 0; col < 4; col++){
//       var input = $('<input>',{
//         "class": "tableForSpreadsheet",
//         "type": "text",
//         "id": row + ':' + col,
//         "value": row + ':' + col
//       })
//       .css("float", "left")
//       // .val(row + ':' + col);
//
//       div.append(input);
//     }
//   }
//
// })


$(document).ready(function(){







})
