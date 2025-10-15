// ************ Themes ************
var themes = ["Default", "Aqua", "Potassium"]

var colors = {
	Default: {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	Aqua: {
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#5f6f7f",
		color: "#bfdfff",
		points: "#dfefff",
		locked: "#c4a7b3",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	Potassium: {
		1: "#ffee00",
		2: "#c1cf00",
		3: "#9aa500",
		color: "#059b00",
		points: "#058b00",
		locked: "#028b47",
		background: "#e5ff00",
		background_tooltip: "rgba(0, 15, 31, 0.75)",

	}
}
function changeTheme() {

	colors_theme = colors[options.theme || "Default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme? options.theme : "Default";
}

function switchTheme() {
	let index = themes.indexOf(options.theme)
	if (options.theme === null || index >= themes.length-1 || index < 0) {
		options.theme = themes[0];
	}
	else {
		index ++;
		options.theme = themes[index];
		options.theme = themes[1];
	}
	changeTheme();
	resizeCanvas();
}
