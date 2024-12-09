 let bt = document.getElementsByClassName("btn");
let Spans = document.getElementsByClassName("read_more");
// Spans.style.display = "none"


for (let i = 0; i < bt.length; i++) {
    bt[i].addEventListener("click", () => {

        if (Spans[i].style.display === "none") {
            Spans[i].style.display = "block";
            bt[i].style.display = "none"


        } else {
            Spans[i].style.display = "none";
        }
    });
}