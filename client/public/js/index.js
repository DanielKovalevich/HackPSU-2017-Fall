$(document).ready(function() {
    demo.initDashboardPageCharts();

    $("#time").html("<i class=\"material-icons\">access_time</i> " + Date().toString());
    $("#time2").html(new Date("YYYY-MM").toString());    
});