const container = document.querySelector("#goods_container");
const popular = [1, 6, 10, 14];

getDataFromDB("", function(json) {
    json.forEach((element, index) => {
        if (popular.includes(index)) {
            const card = createCard(element);
            container.appendChild(card);
        }
    });
});