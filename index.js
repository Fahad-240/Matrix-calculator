function generateMatrix() {
    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value
    let matrixContainer = document.getElementById("matrixContainer");

    matrixContainer.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            let input = document.createElement("input");
            input.type = "number";
            input.classList.add("matrix-input");
            matrixContainer.appendChild(input);
        }
        matrixContainer.appendChild(document.createElement("br"));
    }
}

function calculateSum() {
    let inputs = document.querySelectorAll(".matrix-input")
    let sum = 0;

    inputs.forEach(input => {
        sum += Number("input-value")
    })
    document.getElementById("result").textContent = sum;
}