addLayer("universe", {
    startData() {return {
        unlocked: true,
        points: new Decimal(0),
        resetTime: 0,

        symbol: "",

        anger: new Decimal(1)
    }},
    color: "#5A5A5A",
    symbol() {return player.universe.symbol},
    layerShown: true,
    row: 999,
    resource: "Destroyed Universes",
    hotkeys: [
        {
            key: "U",
            description: "Shift + U: Overflow the current universe with points, destroying everything...",
            onPress() {doReset("universe")}
        }
    ],
    type: "static",
    baseResource: "Points",
    baseAmount() {return player.points},
    requires: new Decimal(100000),
    base: 5.555,
    exponent: 1.09,
    roundUpCost: true,
    prestigeButtonText() {return `Destroy current universe and reset ALL PREVIOUS PROGRESS<br> <br> Overflow Needed: ${formatWhole(player.points)} / ${format(getNextAt(this.layer, canMax = false, useType = "static"))} Points`},
    microtabs: {
        index: {
            Modifiers: {
                content: ["blank", ["display-text", () => `<h2> <crazedCrimson> Anger: ${format(player.universe.anger)} </h2> </crazedCrimson>`], "blank", "milestones", "achievements"]
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text", () => `<crazedCrimson/>Time Since last Universal Destruction: ${format(player.universe.resetTime)} Seconds`],
        "blank",
        ["bar", "overflowBar"],
        "blank",
        ["microtabs", "index"]
    ],
    componentStyles: {
        "microtabs"() {return {"border-color":"transparent"}},
        "prestige-button"() {return {"width":"400px"}},
        "milestone"() {return {"width":"600px"}}
    },
    tooltip: "Multiverse",
    branches: [["money", 2]],
    nodeStyle() {return {"width":"350px", "border-radius":"15px"}},
    update() {
        player.universe.symbol = `Universe ${player.universe.points.add(1)}`
    },
    milestones: {
        11: {
            requirementDescription: "1 Destroyed Universe",
            done() {return player.universe.points.gte(1)},
            effectDescription() {return `Gain 10% less funds on <nocturnalNavy>M Node</nocturnalNavy> reset. <br> <crazedCrimson style="text-shadow: ${player.cX}px ${player.cY}px 3px purple"/>Unlock the 3rd row of upgrades on <b>M Node</b>.`},
            onComplete() {player.universe.anger = player.universe.anger.times(1.1)}
        },

        12: {
            requirementDescription: "2 Destroyed Universes",
            done() {return player.universe.points.gte(2)},
            effectDescription() {return `Gain 12% less points overall. <br> <crazedCrimson style='text-shadow: ${player.cX}px ${player.cY}px 3px purple'/>Unlock the 4th row of upgrade on <b>M Node</b>.`},
            onComplete() {player.universe.anger = player.universe.anger.times(1.2)},
            unlocked() {return player.universe.points.gte(1)}
        },

        13: {
            requirementDescription: "3 Destroyed Universes",
            done() {return player.universe.points.gte(3)},
            effectDescription() {return `Upgrade 1-1 in <nocturnalNavy>M Node</nocturnalNavy> is 5% weaker. <br> <crazedCrimson style="text-shadow: ${player.cX}px ${player.cY}px 3px purple"/>Unlock Achievements Node and 1 Achievement.`},
            onComplete() {player.universe.anger = player.universe.anger.times(1.3)},
            unlocked() {return player.universe.points.gte(2)}
        },

        14: {
            requirementDescription: "4 Destroyed Universes",
            done() {return player.universe.points.gte(4)},
            effectDescription() {return `Current anger boosts overflow needed to destroy a universe. <br><crazedCrimson style="text-shadow: ${player.cX}px ${player.cY}px 3px purple"/> Unlock a buyable in M Node.`},
            onComplete() {player.universe.anger = player.universe.anger.times(1.4)},
            unlocked() {return player.universe.points.gte(3)}
        },

        15: {
            requirementDescription: "5 Destroyed Universes",
            done() {return player.universe.points.gte(5)},
            effectDescription() {return `The previous milestone's debuff is much stronger. (anger -> anger<sup>2</sup>) <br><crazedCrimson style="text-shadow: ${player.cX}px ${player.cY}px 3px purple"/> Unlock an upgrade in M Node.`},
            onComplete() {player.universe.anger = player.universe.anger.times(1.5)},
            unlocked() {return player.universe.points.gte(4)}
        },

         16: {
            requirementDescription: "6 Destroyed Universes",
            done() {return player.universe.points.gte(6)},
            effectDescription() {return `<b>Desolate Rift</b> buyable in <nocturnalNavy>M Node</nocturnalNavy> scales 10% faster in cost. <br><crazedCrimson style="text-shadow: ${player.cX}px ${player.cY}px 3px purple"/> Unlock another buyable in M Node and 1 Achievement.`},
            onComplete() {player.universe.anger = player.universe.anger.times(1.6)},
            unlocked() {return player.universe.points.gte(5)}
         }
    },
    gainMult() {
        let base = new Decimal(1)
        if (hasMilestone("universe", 14)) {
            if (hasMilestone("universe", 15)) {
                base = base.times(player.universe.anger.pow(2))
            } else {
                base = base.times(player.universe.anger)
            }
        }
        return base
    },
    bars: {
        overflowBar: {
            direction: RIGHT,
            width: 600,
            height: 50,
            progress() {return player.points.log(10).div(getNextAt("universe", canMax = false, useType = "static").log(10))},
            display() {return `${format(this.progress().times(100), 3)}% to Overflow (Log<sub>10</sub> Scaling)`},
            fillStyle() {return {'background-color':'#5A5A5A'}},
            borderStyle() {return {'border-color':'#404040', 'border-radius':'50px'}}
        }
    }
})