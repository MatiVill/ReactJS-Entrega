const products = [
    {
        id: "kimono1",
        name: "Kimono Vital Negro 1",
        descripcion: "Kimono Vital Negro",
        price: 100000,
        stock: 5,
        category: "kimonos",
        image: "/src/assets/ginegro1.webp"
    },
    {
        id: "kimono2",
        name: "Kimono Vital Negro 2",
        descripcion: "Kimono Vital Negro",
        price: 110000,
        stock: 5,
        category: "kimonos",
        image: "/src/assets/ginegro2.webp"
      },
    {
        id: "kimono3",
        name: "Kimono Vital Azul",
        descripcion: "Kimono Vital Azul",
        price: 120000,
        stock: 5,
        category: "kimonos",
        image: "/src/assets/giazul1.webp"
       },
    {
        id: "kimono4",
        name: "Kimono Vital Blanco",
        descripcion: "Kimono Vital Blanco",
        price: 130000,
        stock: 5,
        category: "kimonos",
        image: "/src/assets/giblanco.webp"
     },
    {
        id: "kimono5",
        name: "Kimono Vital Verde Agua",
        descripcion: "Kimono Vital Verde Agua",
        price: 140000,
        stock: 5,
        category: "kimonos",
        image: "/src/assets/giverdeagua.webp"
    },
    {
        id: "kimono6",
        name: "Kimono Vital Naranja",
        descripcion: "Kimono Vital Naranja",
        price: 160000,
        stock: 5,
        category: "kimonos",
        image: "/src/assets/ginaranja.webp"
    },
    {
        id: "rash1",
        name: "Rashguard Vouk Morado",
        descripcion: "Rashguard Roxa",
        price: 40000,
        stock: 10,
        category: "nogi",
        image: "/src/assets/rashvoukroxa.webp"
    },
    {
        id: "rash2",
        name: "Rashguard Vouk Marrón",
        descripcion: "Rashguard Marron",
        price: 40000,
        stock: 10,
        category: "nogi",
        image: "/src/assets/rashvoukmarron.webp"
    },
    {
        id: "polera1",
        name: "Polera",
        descripcion: "Polera",
        price: 20000,
        stock: 10,
        category: "street",
        image: "/src/assets/polera1.webp"
    },
    {
        id: "polera2",
        name: "Polera",
        descripcion: "Polera",
        price: 20000,
        stock: 10,
        category: "street",
        image: "/src/assets/polera2.webp"
    },
    {
        id: "gorro1",
        name: "Gorro Jiu Jitsu",
        descripcion: "Gorro Jiu Jitsu",
        price: 10000,
        stock: 10,
        category: "accesorios",
        image: "/src/assets/gorro1.webp"
    },    
    {
        id: "gorro2",
        name: "Gorro Jiu Jitsu",
        descripcion: "Gorro Jiu Jitsu",
        price: 10000,
        stock: 10,
        category: "accesorios",
        image: "/src/assets/gorro2.webp"
    },
    {
        id: "mochila1",
        name: "Mochila Jiu Jitsu",
        descripcion: "Mochila Jiu Jitsu",
        price: 50000,
        stock: 3,
        category: "accesorios",
        image: "/src/assets/mochila1.webp"
    },
    {
        id: "mochila2",
        name: "Bolso Jiu Jitsu",
        descripcion: "Bolso Jiu Jitsu",
        price: 25000,
        stock: 3,
        category: "accesorios",
        image: "/src/assets/mochila2.webp"
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