let text = document.getElementById('text')
index = 0

let cbt = [
    {
        Question:  "Question: what is your Fav food?",
        Options : ["Rice","Beans", "Yam","Spag"],
        Answer :"Answer: Beans"
    },
    {
      Question: "Question: What is your Fav Course",
      Options:["HTML","CSS","JS", "BOOTSTRAP"],
      Answer:"JS"
    },
    {
    Question: "Question: What is your courses",
    Options:["HTML","CSS","JS", "BOOTSTRAP"],
      Answer:"Answer: JS"
    },
    {
    Question: "Question: What is your courses",
    Options:["HTML","CSS","JS", "BOOTSTRAP"],
      Answer:"Answer: JS"
    },
    {
    Question: "Question: What is your cur",
    Options:["HTML","CSS","JS", "BOOTSTRAP"],
      Answer:"Answer: JS"
    },
    {
    Question: "Question: What is your curs",
    Options:["HTML","CSS","JS", "BOOTSTRAP"],
      Answer:"Answer: JS"
    },
    {
    Question: "Question: What is your cu",
    Options:["HTML","CSS","JS", "BOOTSTRAP"],
      Answer:"Answer: JS"
    }
]
 display()
function display() {
    text.innerHTML = `<h3 id="myh3"> 
        ${cbt[index].Question}<br>
        ${cbt[index].Options} <br> 
        ${cbt[index].Answer} <br>
         </h3> `
}

function next() {
    if (index == cbt.length - 1) {
        index = 0
    } else {
        index++
    }

    display()

}

function prev() {
    if (index == 0) {
        index = cbt.length - 1
    } else {
        index--
    }
    display()
}