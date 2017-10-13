function theme_changer(cssFile, cssLinkIndex)
{
var old=document.getElementsByTagName("link").item(cssLinkIndex);
var new=document.createElement("link");
newlink.setAttribute("rel","stylesheet");
newlink.setAttribute("type","text/css");
newlink.setAttribute("href",cssFile);
document.getElementsByTagName("head").item(0).replaceChild(newlink,oldlink);
}



/*
<html>
    <head>
        <title>Changing CSS</title>
        <link rel="stylesheet" type="text/css" href="positive.css"/>
    </head>
    <body>
        <a href="#" onclick="changeCSS('positive.css', 0);">STYLE 1</a>
        <a href="#" onclick="changeCSS('negative.css', 0);">STYLE 2</a>
    </body>
</html>
*/
