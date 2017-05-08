angular
  .module("triviaQestion", [])
// var a = document.getElementById("questionAmount").value
// var b = document.getElementById("questionCategory").value
// var c = document.getElementById("questionDifficulty").value
// var d = document.getElementById("questionType").value
// alert(a)
  //responsible for all function in angularjs
  .controller("triviaCtrl", function($scope, $http) {
    $scope.$watch("questionAmount", function() {
            // returnSearch();
      });
      $scope.$watch("questionCategory", function() {
            // returnSearch();
        $scope.$watch("questionDifficulty", function() {
            // returnSearch();
        });
          $scope.$watch("questionType", function() {
             returnSearch();
          });
    });
    function returnSearch() {
      $http.get("https://opentdb.com/api.php?amount=" + $scope.questionAmount + "&category=" + $scope.questionCategory +"&difficulty=" + $scope.questionDifficulty + "&type=" + $scope.questionType).then(function(p) {
          console.log(p.data.results);
          //regular expression converter
          // $scope.triviaQestion = p.data.results;
          let array = p.data.results;
          array.forEach(function(item) {
            item.question = item.question.replace(/\&.{4}\;/g, "'");
           item.question = item.question.replace(/\&.{5}\;/g, '"');
           item.question = item.question.replace(`&#039;/g`, '');
            // item.incorrect_answers = item.incorrect_answers.replace(`&#039;`, '');
           // item.incorrect_answers = item.incorrect_answers.replace(/[""]/g, " ");
      //      item.question = item.question.remove(/\["\;/g);
          });
          $scope.trivias = array;

          //end of regular expression converter
        });
    }
  });
//   $('#ok').click(function(){
//         alert(array1)

//   })
