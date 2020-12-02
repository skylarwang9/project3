var options=[
	"G's dream",
	"Bella's dream",
	"!'s dream",
	"S.L's dream",
	"JY's dream",
	"Cathy's dream",
	"Mark's dream"
	];

var dates = [
    "2020/11/16",
    "2020/12/1",
    "2020/10/27",
    "2020/9/2",
    "2020/10",
    "2020/11",
    "2020/10/13"];

var title=[
"",
"",
"Exotic stone city",
"",
"",
"",
""
]

var content=[
    "The dream is occurring somewhere in the nature; in the open. It is daytime. I walk alone, passing by. Some people come toward me. A river shows up. Something big and black falls from the sky on top of me. Like a lid. I wake up in sweat.",
    "I’m carrying a little black bird on my left shoe. It is motionless. At first I think it may be dead, but then I see clearly that it still breaths and moves almost imperceptibly. I want to nurse it until it gets better; I think about what I should give it to regain its health. The bird is a little black raven. In the other part of this dream the bird is healthy, but it turns into a quite big black bug that awkwardly flies around.",
    "I fell asleep in the afternoon which I don't usually do. I found myself amidst a storm, in darkness, in some past century, next to an immense stone edifice that looked like a castle. While thunders boomed and rain poured down, I was supposed to climb up the stairs of this castle into my safe space. At first I heard howls through the darkness and then I saw a huge elephant gone berserk, running right at me. Afraid that he might run over me, I took shelter behind a bush, hoping that he won't spot me. When he ran up to me, he stood still and spoke to me: 'Don't worry. You’re good. I'm your protector.' I was overwhelmed with happiness.",
    "Water. Plenty of water in somewhat as old, abandoned yet preserved institutional building. I find myself walking, roaming along endless hallways. Grey, cold and monumental corridors. Perspective is flipped, I'm watching myself through someone else's eyes right on my back. I see myself dressed in draped, white toga or something. Water level is rapidly raising up. Every time i find the exit door I end up on the same spot I've started walking... Cold, grey, illusion, thousands of reflections... I'm teared apart. From inside. I transform to a silver bird, still walking, strolling across the water. I wanna fly away... I turn around and see hallway full of me. More and more reflections, holograms of myself trying to strangle me to death. In blink of eye they disappear. I'm lifelessly reposing under the water surface. Flock of silver birds is impending over me... Whole scene vanish in one silver strobe, blast of light...",
    "I dreamt walking through Venice without any tourists",
    "It's the first day of school and I have an 8 a.m. class. The alarm rang but I didn't hear it. When I wake up, it's already 11. I freak out and wake up from my dream to find that it's only 6 a.m.",
    "I am not really sure where I am ... but then the realization vividly comes that I am on the stage, in front of a full audience and I am introducing the next show at the Broadway theater. Then nothing happens, no-one comes, I still stand there getting more and more frantic and then just before I hysterically scream, I wake ... and slowly realise that all is well ..."
];
// var myPix = [
//     "",
//     "",
//     "",
//     "",
//     "",
//     "img/dream2.JPG",
//     ];

var n=Math.floor(Math.random()*options.length);
function randomname(){
	var choice=options[n];
    $('#name').html(choice);
   
};
function randomdate(){
	var datechoice=dates[n];
    $('.date').html(datechoice);
}
function randomtitle(){
	var titlechoice=title[n];
    $('.dreamtitle').html(titlechoice);
}
function randomcontent(){
	var contentchoice=content[n];
    $('.content').html(contentchoice);
}


var btn=document.getElementById("texts");
var box=document.getElementById("wrapper");
function show(){
   // btn.style.top="130px";
   // btn.style.left="40%";
   // btn.style.fontSize = "20px";
   btn.style.visibility="hidden";
   box.style.visibility="visible";
   };


// function choosePic() {
//      $('.image').attr("src","imgchoice");
//  }

// var img=document.getElementById('image');
// if(document.getElementById('name').innerHTML==="Cathy's dream"){
// 	img.style.display = "block";
// }
// else{
// 	img.style.display = 'none';
//     img.style.visibility="hidden";
// }
// function showing(){
// 	var n=Math.floor(Math.random()*options.length);
// 	var choice=options[n];
// 	var img=document.getElementById('image');
//   if (choice==="Cathy's dream"){
// 	img.style.display = "block";
//   }
//   else{
// 	img.style.display = "none";
// 	img.style.visibility="hidden";
//   }
// }

randomname();
randomdate();
randomtitle();
randomcontent();
// choosePic();

// document.write(names[i]);