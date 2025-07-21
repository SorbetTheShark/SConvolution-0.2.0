function doNotif(text, title, time, color) {
    doPopup("none", text, title, time, color)
}

function jarbler(input, template = "abcdefghijklmnopqrstuvwxyz") {
    output = ""

    for (let i = 0; i < input.length; i++) {
        if (input[i] != " ") { 
            output += template[Math.floor(Math.random() * template.length)]
        } else {
            output += " "
        }
    }

    return output
}

doNotif("Welcome Back Human", "אֲמַלְגַמָה", 5, "seagreen")
