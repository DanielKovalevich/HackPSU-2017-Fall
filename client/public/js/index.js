$(document).ready(function() {
    demo.initDashboardPageCharts();

    var d = new Date();
    
    var date = d.getMonth().toString() + '/' + d.getDay().toString() + '/' + d.getFullYear().toString();

    $("#time").html("<i class=\"material-icons\">access_time</i> " + new Date().toString() + "");
    $("#time2").html(date);
    $('.loggout').click(function() {window.location = "./login.html";});
    $('#myModal').modal('show');

    $(".buy-stock").click(function() {
        var $item = $(this).closest("tr")   // Finds the closest row <tr> 
                           .find(".nr")     // Gets a descendent with class="nr"
                           .text();         // Retrieves the text within <td>
    
        alert($item);       // Outputs the answer
    });
});