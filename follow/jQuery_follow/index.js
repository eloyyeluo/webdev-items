$(document).ready(function() {
    // this likely means that the jquery link is at the header section

    // document.querySelector("h1").style.color = "red";
    // $ == document.querySelectorAll
    // css is a method of the selector object.
    //getting the value: $("h1").css("color") 
    $("h1").css("color", "red");
    //adding classes
    $("h1").addClass("big-title");
    // remove classes
    $("h1").remove("big-title");
    // check to see if there is a class
    $("h1").hasClass("big-title");
    // change the text
    $("button").text("bye");
    $("button").html("yo");

    // manipulating attributes in html
    //getting the value 
    $("img").attr("src");
    // setting the value
    $("img").attr("href", "https://www.yahoo.com");

    // event listeners
    // document.querySelector().addEventListener()
    $("h1").click(function (e) { 
        e.preventDefault();
    });

    var s = document.querySelectorAll("some");
    for (var i = 0; i < s.length; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function() {
            document.querySelector("h1").style.color = "purple";
        });
    }

    // an equivalent expression to the following
    // we do not need a for loop because all of the buttons will be applied
    $("button").click(function () { 
        $("h1").css("color", "purple");
    });

    // key pressed will show
    $("document").keydown(function (e) { 
        $("h1").text(e.key);
    });

    // event on; this is a more general version of than click and keydown as functions 
    $("h1").on("mouseover", function () {
        // code
    });

    // creates an object before the h1 tag

    // this is outside the h1 tag
    $("h1").before("<button> Click me </button>"); 
    $("h1").after("<button> Click me </button>");

    // this is in innerHTML
    $("h1").prepend("<button> Click me </button>");
    $("h1").append("<button> Click me </button>");

    $("button").on("click", function () {
        $("h1").hide();
        $("h1").toggle();
        $("h1").fadeOut();
        $("h1").fadeIn();
        $("h1").slideDown();
        // animate must have a numeric value
        $("h1").animate(); 
    });
})
