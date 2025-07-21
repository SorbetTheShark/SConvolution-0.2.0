addLayer("ach", {
    startData() {return {
        unlocked() {return hasMilestone("universe", 13)},
        points: new Decimal(0),
    }},
    color: "#F2E279",
    symbol: "ACH",
    layerShown() {return hasMilestone("universe", 13)},
    row: 5867,
    resource: "Achievement Points",
    type: "none",
    microtabs: {
        index: {
            "Achievements": {
                content: ["blank", "achievements"]
            },

            "AP Milestones": {
                content: ["blank", "milestones"]
            }
        }
    },
    tabFormat: [
        "main-display",
        "blank",
        ["bar", "completionBar"],
        "blank",
        ["display-text", "<i/>Achievements do not reset upon a Universal Destruction event. <br><br> <b/> AP = Achievement Points"],
        "blank",
        ["microtabs", "index"]
    ],
    tooltip: "Achievements",
    branches: [["universe", 2]],
    componentStyles: {
        "microtabs"() {return {"border-color":"transparent"}},
        "milestone"() {return {"width":"600px"}}
    },
    achievements: {
        11: {
            name: "Millionaire",
            done() {return player.money.points.gte("e6")},
            unlocked() {return hasMilestone("universe", 13)},
            tooltip: "Reach 1,000,000 Money <br><br> (1 AP)",
            onComplete() {player.ach.points = player.ach.points.add(1)}
        },

        12: {
            name: "Billionaire",
            done() {return player.money.points.gte("e9")},
            unlocked() {return hasMilestone("universe", 16)},
            tooltip: "Reach 1.00e9 Money <br><br> (2 AP)",
            onComplete() {player.ach.points = player.ach.points.add(2)}
        }
    },

    milestones: {
        11: {
            requirementDescription: "3 Achievement Points",
            effectDescription: "Point gain and funding gain are doubled",
            done() {return player.ach.points.gte(3)},
            unlocked() {return hasMilestone("universe", 16)}
        }
    },

    bars: {
        completionBar: {
            direction: RIGHT,
            width: 600,
            height: 50,
            progress() {return player.ach.points.div(3)},
            display() {return `Progress to 100% game completion: ${format(this.progress().times(100))}%`},
            fillStyle() {return {'background-color': '#F2E279'}},
            borderStyle() {return {'border-color': '#E0D060', 'border-radius': '50px'}}
        }
    }
})