const displaycal = document.querySelector(".display-cal");
const calButton = document.querySelectorAll(".cal-button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output ="";
const calculate = (buttonValue) => {
	if(buttonValue === "=" && output !== "")
	{
		output = eval(output.replace("%", "/100"));
	}
	else if(buttonValue === "AC")
	{
		output = ""
	}
	else if(buttonValue == "DEL")
	{
		output = output.toString().slice(0,-1);
	}
	else
	{
        if(output === "" && specialChars.includes(buttonValue)) return;
        output += buttonValue;
	}
        displaycal.value = output;
};

calButton.forEach((calButton) => {
	calButton.addEventListener("click", (e) => calculate(e.target.dataset.value));
});