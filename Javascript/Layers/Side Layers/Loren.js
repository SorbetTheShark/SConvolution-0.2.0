addLayer("loren", {
    startData() {return {
        unlocked: true
    }},
    color: "#7B7B7B",
    image: "Images/Icons/LorenICON.png",
    row: "side",
    layerShown: true,
    type: "none",
    resource: "",
    tooltip: "Handy Dandy Handbook",
    nodeStyle() {return {"background-size":"75%", "background-repeat":"no-repeat", "background-position":"center"}},
    tabFormat: [
        ["display-text", "<h3><i>\"A handy dandy handbook for your handy dandy info eh...\""],
        "blank",
        ["microtabs", "index"],
    ],
    microtabs: {
        index: {
            Layers: {
                content: ["blank", ["infobox", "ml01"], "blank", ["infobox", "ml02"]]
            },

            Characters: {
                content: ["blank", ["infobox", "char01"]],
                unlocked() {return true}
            },

            "Side Layers": {
                content: ["blank"]
            }
        }
    },
    infoboxes: {
        ml01: {
            title: "Funding [Universe 1 - 7]",
            body() {return "The first layer of the mod. Gather money to buy slow-progressing upgrades and destroy the first few universes."},
            titleStyle() {return {"background-color": "#659B45"}},
            bodyStyle() {return {"border-color":"#659B45", "text-align":"left", "padding-left":"10px"}},
            style() {return {"border-color":"#659B45"}},
        },

        ml02: {
            title: "Boosters [Universe 8 - ???]",
            body() {return "The second layer of the mod. Aquire enough money and you'll be able to get your first booster. As you destroy more universes, boosters will become stronger by having more buffs."},
            titleStyle() {return {"background-color":"#5F9EA0"}},
            bodyStyle() {return {"border-color":"#5F9EA0", "text-align":"left", "padding-left":"10px"}},
            style() {return {"border-color":"#5F9EA0"}},
            unlocked() {return player.universe.points.gte(6)}
        },

        char01: {
            title: "Sorbet [Universe 11]",
            body() {return `Huh whuh what's going on...`},
            titleStyle() {return {"background-color":"#F0EEE3"}},
            bodyStyle() {return {"border-color":"#F0EEE3"}},
            style() {return {"border-color":"#F0EEE3"}},
            unlocked() {return player.universe.points.gte(10)}
        }
    },
    componentStyles: {
        "microtabs"() {return {"border-color":"transparent"}}
    }
})