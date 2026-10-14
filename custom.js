const designfile = document.getElementById("designfile");
const preview = document.getElementById("preview");

designfile.addEventListener("change", function () {

    const file = designfile.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
    console.log("img")

});