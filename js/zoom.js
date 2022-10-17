const zoomElement = document.querySelector(".main")
let zoom = 1;
const zoomSpeed = 0.3;

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${zoom += zoomSpeed})`;
    } else {
        zoomElement.style.transform = `scale(${zoom -= zoomSpeed})`;
    }
    });

