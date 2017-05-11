

var responseCode
var messageDisplay
function AppCtrl($scope) {
  $scope.currentNavItem = 'Quiz';
}

angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller("QuizCtrl", function($scope, $http) {

function returnSearch() {
  $http.get("https://opentdb.com/api.php?amount=" + $scope.amount + "&category=" + $scope.category + "&difficulty=" + $scope.difficulty + "&type=" + $scope.type).then(function(p) {
    console.log(p.data);
    responseCode = p.data.response_code
    let array = p.data.results;
    array.forEach(function(item) {
      item.question = item.question.replace(/\&.{4}\;/g, "'");
      item.question = item.question.replace(/\&.{5}\;/g, '"');
      item.question = item.question.replace(`&#039;/g`, '');
    });
    $scope.trivias = array;
  checkQuestions();
    // respnseCode = response_code
    // alert(responseCode)
  });
}

      $scope.$watch("type", function() {
        returnSearch();
      // alert(messageDisplay)
      });

    function checkQuestions(){
      if (responseCode === 0){
        messageDisplay = "Ready?"
      }else if (responseCode === 1){
        messageDisplay = "No Questions available."
      }else if (responseCode ===2){
        messageDisplay = "No Questions available."
      }
    }
  })

  .controller("AboutCtrl", function($scope, $mdDialog) {
    // $scope.$watch("open", function() {
    //   alert(messageDisplay)
    // });

    $scope.showAlert = function(ev) {
      if (messageDisplay === "No Questions available."){
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('There is no question available.')
          // .textContent('You can specify some description text in here.')
          // .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    }else if (messageDisplay === "Ready?"){
(".open")
    }
    };





  });





//   function TimeCtrl($scope, $timeout) {
//     $scope.clock = "loading clock..."; // initialise the time variable
//     $scope.tickInterval = 1000 //ms
//
//     var tick = function() {
//         $scope.clock = Date.now() // get the current time
//         $timeout(tick, $scope.tickInterval); // reset the timer
//     }
//
//     // Start the timer
//     $timeout(tick, $scope.tickInterval);
// }
