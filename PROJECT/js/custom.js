$(document).ready(function(){
    // this function will load all of our header and footer related files into our main HTML document
     $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
        $("#show_cart").hide();//a button is hide when we our function starts
    });

     //we are using hide nad show on 2 buttons to hide and show bill
    $("#hide_cart").click(function(){
        $("#hide_show").hide();//hide
        $("#hide_cart").hide();//hide
        $("#show_cart").show();//show
    });
    $("#show_cart").click(function(){
        $("#hide_show").show();//show
        $("#show_cart").hide();//hide
        $("#hide_cart").show();//show
    });

    //here we used a alert function on a button
    $("#place_order").click(function(){
        alert("Are you sure !");
    });

});