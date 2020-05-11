const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  $.getJSON(dataURL, handleData);
}


function handleData(data) {
	let theEnd = "";

  const var1 = $("input[name=var1]")[0].value;
  const var2 = $("input[name=var2]")[0].value;
  const var3 = $("input[name=var3]")[0].value;
  const var4 = $("input[name=var4]")[0].value;
  const var5 = $("input[name=var5]")[0].value;
  const var6 = $("input[name=var6]")[0].value;
  const speach = $("input[name=speach]")[0].value;


  data["text"].forEach(function(item, index) {
  	item = item.replace("{var1}", var1);
  	item = item.replace("{var2}", var2);
  	item = item.replace("{var3}", var3);
  	item = item.replace("{var4}", var4);
  	item = item.replace("{var5}", var5);
  	item = item.replace("{var6}", var6);
  	item = item.replace("{speach}", speach);

  	theEnd = theEnd + item + "<BR>";
  });

	$("#result").html(theEnd);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);