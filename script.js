let inputString = document.getElementById("textbox")
let button = document.getElementById("button1")
let reply = document.getElementById("output")
let image = document.getElementById("dougie-image")

let pictureArray = ["https://cdn.vox-cdn.com/thumbor/YL3mJBTIA34SYqrWTMkIfN_lqtk=/0x0:1800x978/920x613/filters:focal(962x121:1250x409):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54990163/twinpeaksdougiejones.0.png", "https://www.indiewire.com/wp-content/uploads/2017/05/tp_pancakes.png?resize=960,540", "https://wearethemutantsdotcom.files.wordpress.com/2018/02/twin-peaks-the-return-episode-8-dougie-jones-cowboy-statue.png"]

function pictureUpdater () {
let randomPicture = Math.floor(Math.random() * pictureArray.length);
image.src = pictureArray[randomPicture];
}

//function to generate new string from one supplied
function stringEnd(string) {
  let newArray = [];
  let words = string.split(' ');
//generates random number of words for Dougie to say
let randomNumber = (Math.floor(Math.random() * 3) + 1);
//puts up to 3 words from end of string into new array and returns
for (i = words.length - randomNumber; i < words.length; i++){
newArray.push(words[i]);
}
return newArray.join(' ');
}

//changes output accordingly
function answerer(){
reply.innerHTML = `"${stringEnd(inputString.value)}"`;
}

button.addEventListener('click', answerer)
button.addEventListener('click', pictureUpdater)