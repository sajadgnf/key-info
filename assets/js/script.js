var $ = document

var key = $.querySelector(".key")
var keySelf = $.querySelector('#keyself')
var keyLocation = $.querySelector("#key_location")
var keyWhich = $.querySelector("#key_which")
var keyCode = $.querySelector("#key_code")
var copyAlert = $.getElementById("alert")

$.body.addEventListener("keydown", event => {
    event.preventDefault()

    start.style.display = "none"
    main.style.display = "block"
    key.innerHTML = event.keyCode
    keySelf.innerHTML = event.key
    keyLocation.innerHTML = event.location
    keyWhich.innerHTML = event.which
    keyCode.innerHTML = event.code
})

function selectText() {
    var element = event.target
    var range;
    if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

// function for copying selected text in clipboard
function copyText() {
    selectText();
    document.execCommand("copy");
    copyAlert.style.display = "Block"
    setTimeout(
        () =>{
            copyAlert.style.display = "none"
        },3000
    )

    event.target.style.highlightColor = "transparent"
}