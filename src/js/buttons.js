function changeContentem() {
    var elem = document.getElementById("em");
    var attrs = elem.attributes;
    attrs["data-tooltip"].value = "Copied!";
    setTimeout(() => { attrs["data-tooltip"].value = "Click to copy"; }, 1500);
}

