const data = [
    {
        id: "de86e2",
        username: "dcode",
        age: 36
    },
    {
        id: "aa11b4",
        username: "code.slayer1",
        age: 24
    },
    {
        id: "be45dd",
        username: "javascriptking",
        age: 42
    }
];

const btnDownloadCsv = document.getElementById("action");

function parsing(d) {
    try {
        const opts = {};
        const parser = new Parser(opts);
        const csv = parser.parse(d);
        console.log(csv);
    } catch (err) {
        console.error(err);
    }
    return csv;
}

btnDownloadCsv.addEventListener("click", () => {
    downloadCsv("dcode-test.csv", parsing(data));
});

function downloadCsv(filename, csvData) {
    const element = document.createElement("a");

    element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    element.setAttribute("download", filename);
    element.style.display = "none";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}