var runnerCards = [
"https://netrunnerdb.com/card_image/01001.png",
"https://netrunnerdb.com/card_image/01017.png",
"https://netrunnerdb.com/card_image/01033.png",
"https://netrunnerdb.com/card_image/02001.png",
"https://netrunnerdb.com/card_image/02046.png",
"https://netrunnerdb.com/card_image/02083.png",
"https://netrunnerdb.com/card_image/03028.png",
"https://netrunnerdb.com/card_image/03029.png",
"https://netrunnerdb.com/card_image/03030.png",
"https://netrunnerdb.com/card_image/04041.png",
"https://netrunnerdb.com/card_image/05028.png",
"https://netrunnerdb.com/card_image/05029.png",
"https://netrunnerdb.com/card_image/05030.png",
"https://netrunnerdb.com/card_image/06017.png",
"https://netrunnerdb.com/card_image/06052.png",
"https://netrunnerdb.com/card_image/06095.png",
"https://netrunnerdb.com/card_image/07028.png",
"https://netrunnerdb.com/card_image/07029.png",
"https://netrunnerdb.com/card_image/07030.png",
"https://netrunnerdb.com/card_image/08025.png",
"https://netrunnerdb.com/card_image/08063.png",
"https://netrunnerdb.com/card_image/08104.png",
"https://netrunnerdb.com/card_image/09029.png",
"https://netrunnerdb.com/card_image/09037.png",
"https://netrunnerdb.com/card_image/09045.png",
"https://netrunnerdb.com/card_image/10006.png",
"https://netrunnerdb.com/card_image/10040.png",
"https://netrunnerdb.com/card_image/11002.png",
"https://netrunnerdb.com/card_image/11027.png",
"https://netrunnerdb.com/card_image/11043.png"];

var corpCards = [
"https://netrunnerdb.com/card_image/01054.png",
"https://netrunnerdb.com/card_image/01067.png",
"https://netrunnerdb.com/card_image/01080.png",
"https://netrunnerdb.com/card_image/01093.png",
"https://netrunnerdb.com/card_image/02010.png",
"https://netrunnerdb.com/card_image/02031.png",
"https://netrunnerdb.com/card_image/02076.png",
"https://netrunnerdb.com/card_image/02114.png",
"https://netrunnerdb.com/card_image/03001.png",
"https://netrunnerdb.com/card_image/03002.png",
"https://netrunnerdb.com/card_image/03003.png",
"https://netrunnerdb.com/card_image/04097.png",
"https://netrunnerdb.com/card_image/05001.png",
"https://netrunnerdb.com/card_image/05002.png",
"https://netrunnerdb.com/card_image/05003.png",
"https://netrunnerdb.com/card_image/06005.png",
"https://netrunnerdb.com/card_image/06021.png",
"https://netrunnerdb.com/card_image/06068.png",
"https://netrunnerdb.com/card_image/06105.png",
"https://netrunnerdb.com/card_image/07001.png",
"https://netrunnerdb.com/card_image/07002.png",
"https://netrunnerdb.com/card_image/07003.png",
"https://netrunnerdb.com/card_image/08012.png",
"https://netrunnerdb.com/card_image/08050.png",
"https://netrunnerdb.com/card_image/08092.png",
"https://netrunnerdb.com/card_image/08111.png",
"https://netrunnerdb.com/card_image/09001.png",
"https://netrunnerdb.com/card_image/09002.png",
"https://netrunnerdb.com/card_image/09003.png",
"https://netrunnerdb.com/card_image/10030.png",
"https://netrunnerdb.com/card_image/10107.png",
"https://netrunnerdb.com/card_image/11017.png",
"https://netrunnerdb.com/card_image/11038.png",
"https://netrunnerdb.com/card_image/11054.png"];

/*$.get("https://netrunnerdb.com/api/2.0/public/cards", function(data, status){
  console.log(data["data"].length);
  for (var i = 0; i < data["data"].length; i++) {
  	if (data["data"][i]["type_code"] == "identity" && data["data"][i]["side_code"] == "corp") {
    	console.log("https://netrunnerdb.com/card_image/" + data["data"][i]["code"] + ".png");
    }
  }
});*/

randomRunner = runnerCards[Math.floor(Math.random()*runnerCards.length)];
randomCorp = corpCards[Math.floor(Math.random()*corpCards.length)];

$("#runner").attr("src", randomRunner);
$("#corp").attr("src", randomCorp);

function reveal() {
	$("#runner").attr("class", "card card-initial-2")
	$("#corp").attr("class", "card card-initial-2")
}
setTimeout(reveal, 200);

function reveal2() {
	$("#runner").attr("class", "card")
	$("#corp").attr("class", "card")
}
setTimeout(reveal2, 1000);
