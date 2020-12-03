var studentsArry = [];

$(document).ready(function () {

    //events
    $("#submit").click(results);
    $("#sortName").click(sortName);
    $("#sortPercent").click(sortPercentage);

    //functions
    function results(event) {
        event.preventDefault();

        var myPoints =
            {
                firstName: "",
                lastName: "",
                pointsEarned: 0,
                pointsPossible: 0,
                calculation: 0
            };

        myPoints.firstName = $("#firstName").val();
        myPoints.lastName = $("#lastName").val();
        myPoints.pointsEarned = $("#pointsEarned").val();
        myPoints.pointsPossible = $("#pointsPossible").val();

        var calculation = Math.round(myPoints.pointsEarned / myPoints.pointsPossible * 100);

        $("#resultsOutput").text(` ${myPoints.firstName} ${myPoints.lastName} ${calculation.toFixed()}%`);

        myPoints.calculation = calculation;

        if (calculation < 80) {
            $("#letterOutput").text("C");
        } else if (calculation < 90) {
            $("#letterOutput").text("B");
        } else {
            $("#letterOutput").text("A");
        }

        studentsArry.push(myPoints);

        var output = "";

        for (var studentInfo of studentsArry) {

            output += studentInfo.firstName;

        }

        $("#letterOutput").text(output);

    }

    function sortName() {
        studentsArry.sort(function (a, b) {
            if (a.firstName < b.firstName) {
                return -1;
            } else if (a.firstName < b.firstName) {
                return 1;
            } else {
                return 0;
            }
        });

        var output = "";

        for (var studentInfo of studentsArry) {

            output += studentInfo.firstName;

        }

        $("#resultsOutput").text(output);

    }

    function sortPercentage() {
        studentsArry.sort(function (a, b) {
            if (a.calculation < b.calculation) {
                return -1;
            } else if (a.calculation < b.calculation) {
                return 1;
            } else {
                return 0;
            }
        });

        var output = "";

        for (var studentInfo of studentsArry) {

            output += studentInfo.calculation;

        }

        $("#letterOutput").text(output);
    }


});