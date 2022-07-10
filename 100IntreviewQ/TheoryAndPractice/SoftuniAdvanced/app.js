window.addEventListener("load", solve);

function solve() {
    const makeField = document.querySelector("#make");
    const modelField = document.querySelector("#model");
    const yeardField = document.querySelector("#year");
    const fuelField = document.querySelector("#fuel");
    const originalCostField = document.querySelector("#original-cost");
    const sellingPriceField = document.querySelector("#selling-price");
    const submitBtn = document.querySelector("#publish");
    const tbody = document.querySelector("#table-body");
    let profit = document.querySelector("#profit");
    let ul = document.querySelector("#cars-list");




    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if ((makeField.value.length < 1 || modelField.value.length < 1 || yeardField.value.length < 1) || (originalCostField > sellingPriceField)) {

            alert("Please enter valid information! There shouoldn't be empty fields!")
        } else {
            let tr = document.createElement("tr");
            tr.className = "row";
            tbody.appendChild(tr);
            let tdVals = [makeField, modelField, yeardField, fuelField, originalCostField, sellingPriceField];
            for (let i = 0; i < 7; i++) {

                let td = document.createElement("td");
                if (i == 6) {
                    let btnEdit = document.createElement("button");
                    btnEdit.classList.add("action-btn");
                    btnEdit.classList.add("edit");
                    btnEdit.textContent = "Edit";
                    let btnSell = document.createElement("button");
                    btnSell.classList.add("action-btn");
                    btnSell.classList.add("sell");
                    btnSell.textContent = "Sell";
                    td.appendChild(btnEdit);
                    td.appendChild(btnSell);
                } else {

                    td.textContent = tdVals[i].value;
                    console.log(td);
                }
                tr.appendChild(td);
            }


        }
        makeField.value = "";
        modelField.value = "";
        yeardField.value = "";
        fuelField.value = "petrol";
        originalCostField.value = "";
        sellingPriceField.value = "";

    })
    tbody.addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target.className.includes("edit")) {
            let tr = e.target.parentNode.parentNode;
            tbody.removeChild(tr);
            let trChildrenArr = tr.childNodes;

            makeField.value = trChildrenArr[0].textContent;
            modelField.value = trChildrenArr[1].textContent;
            yeardField.value = trChildrenArr[2].textContent;
            fuelField.value = trChildrenArr[3].textContent;
            originalCostField.value = trChildrenArr[4].textContent;
            sellingPriceField.value = trChildrenArr[5].textContent;


        }
        if (e.target.className.includes("sell")) {
            let tr = e.target.parentNode.parentNode;
            tbody.removeChild(tr);
            let trChildrenArr = tr.childNodes;
            let li = document.createElement("li");
            li.className = "each-list";

            let span1 = document.createElement("span");
            span1.textContent = trChildrenArr[0].textContent + " " + trChildrenArr[1].textContent;
            let span2 = document.createElement("span");
            span2.textContent = trChildrenArr[2].textContent;
            let span3 = document.createElement("span");
            span3.textContent = Number(trChildrenArr[5].textContent) - Number(trChildrenArr[4].textContent);
            li.appendChild(span1);
            li.appendChild(span2);
            li.appendChild(span3);
            ul.appendChild(li);

            let profitSum = 0;
            let liArr = ul.children;
            for (let i = 0; i < liArr.length; i++) {

                profitSum += Number(liArr[i].childNodes[2].textContent);
            }

            profit.textContent = Math.round(profitSum, 2);
        }

    })
}