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
        ["display-text", "<h3><i>\"A handy dandy handbook for your handy dandy info eh...\"<br>\"Well there's nothing to be had here yet...\""]
    ]
})