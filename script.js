const openBookButton = document.getElementById("openBook");

openBookButton.addEventListener("click", function () {

    window.location.href = "memories.html";

});

const bucketItems = document.querySelectorAll(".bucket-item input");

bucketItems.forEach(function (item, index) {

    item.addEventListener("change", function () {

        localStorage.setItem(
            "bucket-" + index,
            item.checked
        );

    });

    const saved = localStorage.getItem("bucket-" + index);

    if (saved === "true") {
        item.checked = true;
    }

});