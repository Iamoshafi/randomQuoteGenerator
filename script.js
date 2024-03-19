const url = "https://type.fit/api/quotes";
let current = null;
let error = document.getElementById("error-message");

async function getData(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        let randomNumber = Math.floor(Math.random() * 16);

        while (randomNumber == current) {
          randomNumber = Math.floor(Math.random() * 16);
        }
        current = randomNumber;
        console.log(data[randomNumber].text);
        document.getElementById("message").innerHTML =
          '"' + " " + data[randomNumber].text;
        document.getElementById("author").innerHTML =
          "-" + " " + data[randomNumber].author;
        loader.classList.remove("fa-spin");
    } catch(err){
        if (err instanceof TypeError) {
          console.log("There was a network error.");
          error.classList.remove("hidden")
          loader.classList.remove("fa-spin")
        }else{
            error.classList.add("hidden");
        }
        console.log(err)
    }
    
}
getData()

const button = document.getElementById("button");
const loader = document.getElementById("loader");

button.addEventListener("click", function(){
    error.classList.add("hidden");
    loader.classList.add("fa-spin")
    getData()
})





// try {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }




