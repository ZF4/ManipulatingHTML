//////STEP ONE
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    let text = document.createTextNode("Click me");
    btn.appendChild(text);
    document.body.appendChild(btn);
    let alertMsg = "Hello user! N1CE TO SEE YOU!";
    btn.addEventListener('click', function () {
        alert(alertMsg);
    })
    //////ENDING STEP ONE
    //////STEP TWO
    let newBtn = document.getElementById("btnTwo");
    let newText = document.getElementById("textBox");
    newBtn.addEventListener('click', function () {
        alert(newText.value);
        //////ENDING STEP TWO
    })
    //////STEP THREE
    let div = document.getElementById('divOne')
    div.style.height = "50px";
    div.addEventListener("mouseover", function () {
        this.style.backgroundColor = "red";

    })
    div.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
    })
    //////ENDING STEP THREE
    //////STEP FOUR
    let textPara = document.createTextNode("This is a paragraph. I know it may be short, but it is a paragraph I can assure you. Just look at all of these dang ol darn ol words.")
    let para = document.createElement('p');
    para.appendChild(textPara);
    document.body.appendChild(para);
    para.addEventListener("click", function() {
        para.style.color = getRandomColor()
    });
    //////ENDING STEP FOUR
    //////THIS IS A FUNCTION TO GENERATE A RANDOM COLOR
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color
    }
    //////ENDING RANDOM COLOR GENERATOR
    //////STEP FIVE
    let lastBtn = document.createElement('button');
    lastBtn.textContent = 'Click for my name'
    document.body.appendChild(lastBtn);
    lastBtn.addEventListener('click', function(){
        
        let lastDiv = document.createElement('div');
        lastDiv.style.height= "50px";
        let span = document.createElement('span');
        span.innerText = "Zachary"
        lastDiv.appendChild(span);
        document.body.appendChild(lastDiv);
    })
    //////ENDING STEP FIVE
    //////STEP SIX
    counter = 0
   let friendsList = ["Ed", "Edd", "Eddy", "Spongebob", "Patrick", "Ren", "Stimpy", "Jake", "Garrett", "Josh"]
   let friendBtn = document.getElementById('friendBtn')
   let ul = document.getElementById('ulList')
   friendBtn.addEventListener('click', function(){
       let list = document.createElement('li');
       let name = document.createTextNode(friendsList[counter]);
       list.appendChild(name);
       ul.appendChild(list);
       if (counter < friendsList.length - 1){
          counter++;
       } else {
           friendBtn.disabled = true
       }
   })
    //////ENDING STEP SIX

    //////ENDING PROJECT

    
})