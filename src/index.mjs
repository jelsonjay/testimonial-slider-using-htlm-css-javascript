import "./styles.css";

const data = [
  {
    id: 1,
    name: "Betty Faria",
    job: "Front-end Developer",
    image: "https://images.pexels.com/photos/3755710/pexels-photo-3755710.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Dolore inventore odit quia aut! Aut mollitia, impedit cupiditate`
  },
  {
    id: 2,
    name: "Jeo Deo",
    job: "IOS Developer",
    image: "https://images.pexels.com/photos/6334886/pexels-photo-6334886.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Dolore inventore odit quia aut! Aut mollitia, impedit cupiditate
     maxime delectus accusantium ?
    
     `
  },
  {
    id: 3,
    name: "Philp Jame",
    job: "UI / UX Design",
    image: "https://images.pexels.com/photos/3772712/pexels-photo-3772712.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
     odit quia aut! Aut mollitia, impedit cupiditate?`
  },
  {
    id: 4,
    name: "Spencer Mark",
    job: "Front-end Developer",
    image: "https://images.pexels.com/photos/5324824/pexels-photo-5324824.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Dolore inventore odit quia aut! Aut mollitia, impedit cupiditate
     ?`
  }
]

//==============CURRENT SLIDE============

let i = 0

//==============TOTAL SLIDES============
let k = data.length

const testimContent = document.getElementById("testimonial-content")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")


//==========NEXT & PREV BUTTON===============
nextBtn.addEventListener("click" , ()=> {
  i = (k + i + 1) % k;
  screen()
})


prevBtn.addEventListener("click" , ()=> {
  i = (k + i - 1) % k;
  screen()
})


//=============DISPLAY IN HTML============
const screen = () => {

testimContent.innerHTML = `
<img src=${data[i].image}>
<h2>${data[i].name}</h2>
<h5>${data[i].job}</h5>
<p>${data[i].desc}</p>
`
}

//=============ON LOAD============
window.onload = screen()

