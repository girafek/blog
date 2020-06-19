function copyText() {
    var text = "romanwojciechowski@yandex.pl";
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function changeTooltip() {
    console.log("Zamieniono!")
    document.getElementById('wrapper__main__contact--email--em').setAttribute('data-title', 'Skopiowano!');
}

function changeTooltipAndCopyText(){
    copyText();
    changeTooltip();
}