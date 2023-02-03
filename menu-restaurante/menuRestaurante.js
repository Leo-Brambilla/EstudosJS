// Criar um array de objetos de menu
const menu = [
    {
        img: "https://pixabay.com/get/g610df4fda57ac214c4b5a73f660281dccc2f60f7efe443bf2f6e2552611d8f63c7d47856f682be1099538c53a226c85c_1920.jpg",
        name: "X-Salada",
        category: "Lanches",
        descricao:"Venha experimentar nosso X-Salada! Com 150g de carne suculenta e grelhada, combinada com folhas crocantes de alface, tomates frescos, cebola roxa, queijo derretido e um molho especial que irá elevar seu paladar. Tudo isso servido em um pão macio e crocante. Não perca mais tempo e venha experimentar o melhor hamburguer em forma de salada, o X-Salada Hamburguer!",
        button:"Peça agora"
    },
    {
        img: "https://pixabay.com/get/g7fb59833260adf70c3405ee4d2beb5432efc877baa16045a0272c139a9b64f7c65d496616d60ce9d35315899aef10ae9_1920.jpg",        
        name: "X-Salada Frango",
        category: "Lanches",
        descricao:"Delicioso lanche com folhas crocantes de alface, repolho, cebola, frango empanado extremamente crocante, queijo parmesão ralado, cheddar e nozes picadas no molho para um toque crocante, em um pão com gergilim e chia. Tudo isso regado com um molho da casa que irá deixar o seu paladar pedindo por mais. É o perfeito equilíbrio de sabor",
        button:"Peça agora"
    },
    {
        img: "https://pixabay.com/get/gd7320a3a1ff1c567ecfd5a138b77fc86d51799093a81231f6bb16be3ec724a229ee67bc3b6face3439d3b928b68c0f87_1920.jpg",
        name: "X-Burger",
        category: "Lanches",
        descricao:"Aperte o cinto e se prepare para uma viagem de sabor! Com 150g de carne suculenta e grelhada, combinada com queijo derretido, tomates frescos, alface crocante e um molho especial que vai explodir em sua boca. Tudo isso servido em um pão macio e crocante, este hamburguer é tudo o que você precisa para satisfazer seu apetite. Não perca mais tempo e experimente agora o X-Burger, o lanche perfeito para os verdadeiros amantes de hamburguer!",
        button:"Peça agora"
    },
    {
        img: "https://pixabay.com/get/g78ec143d5c58381f8332de0e1efce5c025a13e1d8d26bd2736eb33ab592e9bc0d43987dbb9061d621a4b1f1b5b632cce_1920.jpg",
        name: "X-Bacon",
        category: "Lanches",
        descricao:"Prepare-se para experimentar o X-Burger Bacon! Com 150g de carne suculenta e grelhada, combinada com queijo derretido, fatias finas e crocantes de bacon, tomates frescos e alface crocante. Tudo isso regado com um molho especial e servido em um pão macio e crocante. Este lanche é o sonho de todos os amantes de bacon e hamburguer! Não perca mais tempo e experimente agora o X-Burger Bacon, o lanche perfeito para quem quer uma combinação perfeita de sabor e satisfação.",
        button:"Peça agora"
    },    
    {
        img: "https://img.kalunga.com.br/fotosdeprodutos/348231d.jpg",
        name: "Agua",
        category: "Bebidas",
        descricao:"Venha experimentar nosso X-Salada! Com 150g de carne suculenta e grelhada, combinada com folhas crocantes de alface, tomates frescos, cebola roxa, queijo derretido e um molho especial que irá elevar seu paladar. Tudo isso servido em um pão macio e crocante. Não perca mais tempo e venha experimentar o melhor hamburguer em forma de salada, o X-Salada Hamburguer!",
        button:"Peça agora"
    },
    {
        img: "https://pixabay.com/get/g641a6be9bf1cf2db22e35984eef1b74b30e41ad991507afae642ed349f37c11bf8cafec5faa232a1af70d92850208061_1920.jpg",        
        name: "Suco Laranja",
        category: "Bebidas",
        descricao:"Delicioso lanche com folhas crocantes de alface, repolho, cebola, frango empanado extremamente crocante, queijo parmesão ralado, cheddar e nozes picadas no molho para um toque crocante, em um pão com gergilim e chia. Tudo isso regado com um molho da casa que irá deixar o seu paladar pedindo por mais. É o perfeito equilíbrio de sabor",
        button:"Peça agora"
    },
    {
        img: "https://pixabay.com/get/g6e45957baafe9213e13df4f819135f68a8f201cc4449c60c6d3ce0002bd9c70a5d44fdc695fea11a533dd2b6d30bfa51_1920.jpg",
        name: "Suco Verde",
        category: "Bebidas",
        descricao:"Aperte o cinto e se prepare para uma viagem de sabor! Com 150g de carne suculenta e grelhada, combinada com queijo derretido, tomates frescos, alface crocante e um molho especial que vai explodir em sua boca. Tudo isso servido em um pão macio e crocante, este hamburguer é tudo o que você precisa para satisfazer seu apetite. Não perca mais tempo e experimente agora o X-Burger, o lanche perfeito para os verdadeiros amantes de hamburguer!",
        button:"Peça agora"
    },
    {
        img: "https://pixabay.com/get/g81a8a50fea9e4fabed2958cdb2b09c6be8c756e3d5d04a8bc1d81e6385f9d372f3d85855b3b50774290a01c96db50774_1920.jpg",
        name: "Coca-cola",
        category: "Bebidas",
        descricao:"Prepare-se para experimentar o X-Burger Bacon! Com 150g de carne suculenta e grelhada, combinada com queijo derretido, fatias finas e crocantes de bacon, tomates frescos e alface crocante. Tudo isso regado com um molho especial e servido em um pão macio e crocante. Este lanche é o sonho de todos os amantes de bacon e hamburguer! Não perca mais tempo e experimente agora o X-Burger Bacon, o lanche perfeito para quem quer uma combinação perfeita de sabor e satisfação.",
        button:"Peça agora"
    },
];
// Função para exibir o menu filtrado na tela
const displayMenu = (menu) => {
    // Limpar a lista anterior
    document.querySelector("#menuList").innerHTML = "";

    // Adicionar cada item do menu na lista
    menu.forEach((item) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
        <img src="${item.img}"/>
        <h6>${item.category}</h6>
        <h4>${item.name}</h4>
        <p>${item.descricao}</p>
        <a>${item.button}</a>`;
        document.querySelector("#menuList").appendChild(listItem);
    });
};

// Executar a função de displayMenu quando o conteúdo da página for carregado
document.addEventListener("DOMContentLoaded", () => {
    displayMenu(menu);
});

// Função para filtrar o menu por categoria
const filterMenu = (event) => {
    // Obter o valor do filtro
    const filterValue = event.target.value.toLowerCase();

    // Filtrar o menu com o método filter e retornar um novo array
    const filteredMenu = menu.filter((item) => {
        return item.category.toLowerCase().includes(filterValue);
    });

    // Exibir o menu filtrado na tela
    displayMenu(filteredMenu);
};

// Adicionar o evento de filtragem ao campo de filtragem
document.querySelector("#filterInput").addEventListener("input", filterMenu);