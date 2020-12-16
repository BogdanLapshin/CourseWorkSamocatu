const container = document.querySelector("#goods_container");
const popular = [0, 5, 9, 12];

getDataFromDB("", function(json) {
    json.forEach((element, index) => {
        if (popular.includes(index)) {
            const card = createCard(element);
            container.appendChild(card);
        }

    });

    alertBusket();
});