"use strict";

let iconsLight = new Array [
    URL("../components/icons/HtmlLogo.png"),
    URL("../components/icons/CssLogo.png"),
    URL("../components/icons/JsLogo.png"),
    URL("../components/icons/GithubLogo.png"),
    URL("../components/icons/NodeLogo.png"),
    URL("../components/icons/FigmaLogo.png")
]

let iconsDark = new Array [
    URL("../components/icons/HtmlLogoDark.png"),
    URL("../components/icons/CssLogoDark.png"),
    URL("../components/icons/JsLogoDark.png"),
    URL("../components/icons/GithubLogoDark.png"),
    URL("../components/icons/NodeLogoDark.png"),
    URL("../components/icons/FigmaLogoDark.png")
]

/*
Fazer uma lista [] com as URLs das imagens 

*/

function trocarImagem(){
    let image = document.getElementById("HTML-LOGO");
    if(image.src = "components/icons/HtmlLogo.png"){
        image.src = "../components/icons/HtmlLogoDark.png"
        console.log("mudou para dark")
    }
    else if(image.src = "../components/icons/HtmlLogoDark.png"){
        image.src = "components/icons/HtmlLogo.png"
        console.log("mudou prara light")
    }
}