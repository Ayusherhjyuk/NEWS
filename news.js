 let key= "449363bcaa064a0aaead91c13f504fd9";
 let carddata=document.querySelector(".carddata");
 let searchbtn=document.getElementById("searchbtn");
 let inputdata=document.getElementById("inputdata");
 let searchtype=document.getElementById("type");

 const getData= async(input)=>{
    let res= await fetch(`https://newsapi.org/v2/everything?q=${input}&apikey=${key}`);
    let data=await res.json();
    //console.log(data.articles);

    searchtype.innerHTML="search :"+ input;
          carddata.innerHTML=""
          inputdata.value=""
    data.articles.forEach(article => {
   
    let divs=document.createElement("div");
    divs.classList.add("card");
    carddata.appendChild(divs);

    divs.innerHTML=`
     <img src="${article.urlToImage}"alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p> `

    divs.addEventListener("click",()=>{
      window.open(article.url)
    })

     });
 }

 window.addEventListener("load",()=>{
   getData("india")
 })

 
 searchbtn.addEventListener("click",()=>{
   let inputtext=inputdata.value;
 
 getData(inputtext);
})

function navclick(navname){
 getData(navname)
}

document.querySelector(".hamburger").addEventListener("click",()=>{
  
  document.querySelector(".left").style.left="0%"
  document.querySelector(".left").style.width="120px"
  document.querySelector(".left").style.zIndex='1'
  ocument.querySelector(".left").style.border=' 1px solid black'
  
})

document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector(".left").style.left="-100%"
})











