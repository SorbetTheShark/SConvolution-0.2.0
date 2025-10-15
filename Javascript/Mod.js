let modInfo = {
	name: "Sorbet's Convolution",
	id: "changedspecialedition",
	author: "Sorbet",
	pointsName: "Points",
	modFiles: [
		"Tree.js",

		"Layers/Universe.js",
		"Layers/Money.js",
		"Layers/Achievements.js",
		"Layers/Booster.js",
//      "Layers/Side Layers/SIDE_TEST.js",

		"layers/Side Layers/Loren.js"
	],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(0),
	offlineLimit: 1,
}


let VERSION = {
	num: "0.1.1",
	name: "Money Money Money",
	withoutName: "",
}

let changelog = (
	`
	<h1> <RWetPaint> Changelog </RWetPaint> </h1> <br> <br>
	<small><i style="color: gray">"Why is everything so damn gooey here and why does it smell like latex..."</i></small><br>
	<small><i style="color: gray">"Nah it's just latex paint drying out. Just don't touch it under any circumstances..."</i></small><br>
	<small><i style="color: gray">"Why not?"</i></small> <br>
	<small><i style="color: gray">"Trust me, you wouldn't want to touch it if you value your humanity..."</i></small>
	<hr style='width:600px'> <br> <br>

	<h3><RWetPaint> v0.1.0 (Oops, Just the First Layer) </RWetPaint></h3> <br><br>
	Added Funding Layer <br>
	Added Achievements Layer <br>
	<crimson style="text-shadow: 0 0 3px purple"> Current Endgame: 7 Destroyed Universes </crimson>

	<br><br><br>

	<h3><RWetPaint> v0.1.1 (Money Money Money) </RWetPaint></h3> <br><br>
	Tweaked funding cost scaling <br>
	Tweaked upgrade 1-1's effect <br>
	<crimson style="text-shadow: 0 0 3px purple"> Current Endgame: 7 Destroyed Universes </crimson>

	<br><br><br>

	<h3><RWetPaint> v0.2.0 (Finally Some More Stuff) </RWetPaint></h3> <br><br>
	Tweaked upgrade 3-1's effect <br>
	LORE <br>
	Added Boosters Layer <br>
	Removed<crazedCrimson> ֲמַלְגַמָה </crazedCrimson> <br>
	Tweaked Universe Layer Overflow Requirements <br>
	Sorbet regurgitated the themes button... <br>
	<crimson style="text-shadow: 0 0 3px purple"> Current Endgame: 15 Destroyed Universes </crimson>

	<br><br><br>`
)

let devMode = false

let winText = ``

var doNotCallTheseFunctionsEveryTick = ["jarbler"]

function getStartPoints() {return new Decimal(modInfo.initialStartPoints)}

function canGenPoints() {return true}

function getPointGen() {
	if(!canGenPoints() || (player.points.gte(getNextAt("universe")))) {
		return new Decimal(0)
	} else {
		let gain = new Decimal(1)
		if (hasUpgrade("money", 11)) gain = gain.times(upgradeEffect("money", 11))
		if (hasMilestone("universe", 12)) gain = gain.times(0.88)
		if (hasMilestone("ach", 11)) gain = gain.times(2)
		if (hasMilestone("universe", 17)) gain = gain.times(player.booster.buffList[0])
		return gain
	}
}

setInterval(function() {
	player.cX = (Math.sin(player.timePlayed) * (Math.random() * 2)) * (Math.cos(player.timePlayed) * (Math.random() * 2))
	player.cY = (Math.cos(player.timePlayed) * (Math.random() * 2)) * (Math.sin(player.timePlayed) * (Math.random() * 2))

	displayThings = [
		`<i/> <crimson style="text-shadow: ${player.cX}px ${player.cY}px 2px purple"/> Current Endgame: ???`
	]

	if (devMode == true) {
		player.devSpeed = new Decimal(10)
	} else {
		player.devSpeed = new Decimal(1)
	}

}, 50)

function addedPlayerData() { return {
	cX: 0,
	cY: 0,
	devSpeed: new Decimal(1)
}}

var displayThings

function isEndgame() {return player.universe.points.gte(15)}

var backgroundStyle = {"background": "url('Images/Background.png')", "opacity": "10%"}

function maxTickLength() {return(3600)}

function fixOldSave(oldVersion) {oldVersion}