let miNombre= "Mateo"
let miNombreToString= JSON.stringify(miNombre)
localStorage.setItem("userName", miNombreToString)
console.log(localStorage)

let recuperoStorage = localStorage.getItem("username")
let nombreRecuperado = JSON.parse(recuperoStorage)

localStorage.clear()


let peliculasFavoritas = [
    "Nueve Reinas", "Limitless", "Cars"
]
let peliculasFavoritasToString=JSON.stringify(peliculasFavoritas[1])
localStorage.setItem("peliculaFavorita", peliculasFavoritasToString)


let recuperoPelicula = localStorage.getItem("peliculaFavorita")
let peliculaRecuperada = JSON.parse(recuperoStorage)

localStorage.clear()

let peliculasJson= peliculasFavoritas
let peliculasJsonToString= JSON.stringify(peliculasJson)
localStorage.setItem("favoritos", peliculasJsonToString)
console.log(localStorage)


let recuperoArray= localStorage.getItem("favoritos")
let arrayRecuperado = JSON.parse(recuperoArray)

arrayRecuperado.push("The Crawler")

let arrayRecuperadoToString= JSON.stringify(arrayRecuperado)
localStorage.setItem("favoritos", arrayRecuperadoToString)
console.log(localStorage) 


let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = []

for (let i = 0; i < got.length; i++){
    if (got[i].ciudad === "Winterfell"){
        winterIsComing.push(got[i])
    }
}
console.log(winterIsComing)

let winterIsComingToString= JSON.stringify(winterIsComing)
localStorage.setItem("winterfell", winterIsComingToString)

console.log(localStorage)

