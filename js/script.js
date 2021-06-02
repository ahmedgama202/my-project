$("#open").click(function() {
    $("#myNave").animate({ width: "250px" }, 500);
    $("#open").animate({ marginLeft: "250px" }, 500);
})
$("#closeBtn").click(function() {
    $("#myNave").animate({ width: "0px" }, 500);
    $("#open").animate({ marginLeft: "0px" }, 500);

})
