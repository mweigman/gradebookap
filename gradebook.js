$(document).ready(function () {

    //events
    $("#submit").click(results);

    //functions
    function results(event) {
        event.preventDefault();

        var myPoints =
            {
                firstName: "",
                lastName: "",
                pointsEarned: 0,
                pointsPossible: 0
            };

        myPoints.firstName = $("#firstName").val();
        myPoints.lastName = $("#lastName").val();
        myPoints.pointsEarned = $("#pointsEarned").val();
        myPoints.pointsPossible = $("#pointsPossible").val();

        var calculation = Math.round(myPoints.pointsEarned / myPoints.pointsPossible * 100);

        $("#resultsOutput").text(` ${myPoints.firstName} ${myPoints.lastName} ${calculation.toFixed()}%`);

        if (calculation < 80) {
            $("#letterOutput").text("C");
        } else if (calculation < 90) {
            $("#letterOutput").text("B");
        } else {
            $("#letterOutput").text("A");
        }
    }
});
