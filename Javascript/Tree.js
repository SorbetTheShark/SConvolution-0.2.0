var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: [
        ["universe", "ach"],
        ["money"]
    ]

    
}

addNode("null", {
    layerShown: "ghost"
})

addLayer("tree-tab", {
    tabFormat: [
        ["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]
    ],
    previousTab: "",
    leftTab: true
})