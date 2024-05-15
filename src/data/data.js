const products = [
    {
        id: "kimono1",
        name: "Kimono Vital Negro 1",
        descripcion: "Kimono Vital Negro",
        price: 100000,
        stock: 5,
        category: "Kimonos",
        image: "/src/assets/ginegro1.webp"
    },
    {
        id: "kimono2",
        name: "Kimono Vital Negro 2",
        descripcion: "Kimono Vital Negro",
        price: 110000,
        stock: 5,
        category: "Kimonos",
        image: "/src/assets/ginegro2.webp"
      },
    {
        id: "kimono3",
        name: "Kimono Vital Azul",
        descripcion: "Kimono Vital Azul",
        price: 120000,
        stock: 5,
        category: "Kimonos",
        image: "/src/assets/giazul1.webp"
       },
    {
        id: "kimono4",
        name: "Kimono Vital Blanco",
        descripcion: "Kimono Vital Blanco",
        price: 130000,
        stock: 5,
        category: "Kimonos",
        image: "/src/assets/giblanco.webp"
     },
    {
        id: "kimono5",
        name: "Kimono Vital Verde Agua",
        descripcion: "Kimono Vital Verde Agua",
        price: 140000,
        stock: 5,
        category: "Kimonos",
        image: "/src/assets/giverdeagua.webp"
    },
    {
        id: "kimono6",
        name: "Kimono Vital Naranja",
        descripcion: "Kimono Vital Naranja",
        price: 160000,
        stock: 5,
        category: "Kimonos",
        image: "/src/assets/ginaranja.webp"
    }
]

//obtener porductos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(() => {
            resolve(products)
        }, 3000);
    });
};

export default getProducts