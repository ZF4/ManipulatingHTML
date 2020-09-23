$(document).ready(function () {
    //////STEP ONE
    let btn = $("<button>FirstStepButton</button>")
    $("body").append(btn)
    btn.click(function () {
        alert("Hello!");
    })
    //////ENDING STEP ONE
    //////STEP TWO
    $("#btnTwo").click(function () {
        let textVal = $("input[type = 'text']").val();
        alert(textVal)
    });
    //////ENDING STEP TWO
    //////STEP THREE
    let colorsRandom = ["red", "blue", "green", "purple", "yellow"]
    $("#divOne").css({ "height": "100px" })
    $("#divOne").mouseover(function () {
        $("#divOne").css({
            "background-color": "red",
        })
    });
    $("#divOne").mouseout(function () {
        $("#divOne").css({
            "background-color": "white",
        })
    });
    //////ENDING STEP THREE
    //////STEP FOUR
    let para = $("<p>This is a paragraph, believe it or not....it is.</p>");
    $("body").append(para);
    para.click(function () {
        para.css({
            "color": changeColor()
        })
    })
    function changeColor() {
        let rNum1 = Math.floor(Math.random() * 255)
        let rNum2 = Math.floor(Math.random() * 255)
        let rNum3 = Math.floor(Math.random() * 255)
        return `rgb(${rNum1},${rNum2},${rNum3})`
    }
    //////ENDING STEP FOUR
    //////STEP FIVE
    let btn2 = $("<button>Click here for my name</button>")
    $("body").append(btn2)
    let span = $("<span>Zachary</span>")
    let div2 = $("<div></div>")
    $("body").append(div2)
    btn2.click(function () {
        div2.append(span);
    })
    //////ENDING STEP FIVE
    //////STEP SIX
    let friendsList = ["Halie", "Cody", "John", "Phil", "Harry", "Bob", "Bill", "Brandon"];
    counter = 0
    $("#friendBtn").click(function () {
        let ul = $("#ulList");
        let li = $("<li></li>");
        li.append(friendsList[counter]);
        ul.append(li);
        if (counter < friendsList.length - 1) {
            counter++;
        } else {
            friendBtn.disabled = true
        }
    })
    //////ENDING STEP ONE

    //////END OF PROJECT






















})