// // const cat = new Cat(
// //     cats[getNumber(cats.length)].name,
// //     cats[getNumber(cats.length)].img_link,
// //     cats[getNumber(cats.length)].age,
// //     cats[getNumber(cats.length)].rate,
// //     cats[getNumber(cats.length)].favourite,
// //     cats[getNumber(cats.length)].description,
// //     cats[getNumber(cats.length)].id,
// // );

// let block = document.getElementsByClassName("wrapper")[0]

// const createCard = (cat, parent) => {
//     let color = getColor();
//     let card = document.createElement("div");
//     card.className = "card";
//     card.style.borderColor = color;
//     let caption = document.createElement("h2");
//     caption.innerText = cat.name;
//     let imgcat = document.createElement("img");
//     caption.innerText = cat.img_link;
//     let agecat = document.createElement("h2");
//     caption.innerText = cat.age;
//     let ratecat = document.createElement("h2");
//     caption.innerText = cat.rate;
//     let favouritecat = document.createElement("h2");
//     caption.innerText = cat.favourite;
//     let descriptioncat = document.createElement("h2");
//     caption.innerText = cat.description;
//     let idcat = document.createElement("h2");
//     caption.innerText = cat.id;
//     card.append(caption, imgcat, agecat, ratecat, favouritecat, descriptioncat, idcat);
//     parent.appendChild(card);
// }

// let catss = []
// let cnt = getNumber(31,1);

// while(cnt--) {
//     catss.push(new Cat(
//         cats[getNumber(cats.length)].name,
//         cats[getNumber(cats.length)].img_link,
//         cats[getNumber(cats.length)].age,
//         cats[getNumber(cats.length)].rate,
//         cats[getNumber(cats.length)].favourite,
//         cats[getNumber(cats.length)].description,
//         cats[getNumber(cats.length)].id,
//     ))
// }

// catss.forEach(p => {
//     createCard(p, block);
// })


const block = document.getElementsByClassName('wrapper')[0]

const createCard = (cat, parent) => {
    let id = document.createElement('p')
    id.innerText = cat.id
    id.className = 'id'
    let card = document.createElement('div')
    card.className = 'flex card'
    let h2 = document.createElement('h2')
    let h3 = document.createElement('p')
    let cat_img = document.createElement('img')
    let rate = document.createElement('p')
    rate.innerText = `Рейтинг ❤ : ` + cat.rate
    rate.className = 'rate'
    let description = document.createElement('p')
    description.innerText = cat.description
    description.className = 'description'
    h2.innerText = `Имя: ${cat.name}`
    h3.innerText = `Возраст: ${cat.age}`
    cat_img.src = cat.img_link
    cat_img.className = 'cat_img'
    card.append(id,h2,cat_img,h3,description,rate)
    parent.append(card)
}

cats.forEach((cat) =>{
    createCard(cat, block)
})
