//your JS code here. If required.
function toUpperCaseInput() {
	const input = document.getElementById("fname");
	input.value = input.value.toUpperCase();
	document.getElementById("fname").addEventListener("blur", toUpperCaseInput);
}
