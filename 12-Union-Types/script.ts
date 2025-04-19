// Union Types. En TypeScript, un tipo de unión (Union Type) permite que una variable o función acepte valores de diferentes tipos. Se define usando el operador | (barra vertical) entre los tipos permitidos.

type HeroId = `${string}-${string}-${string}-${string}-${string}`

// Supongamos que estamos haciendo una escala de poder para los heroes
// Estos serían los tipos permitidos en la escala de poder
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// Esto aplica también para las variables, de manera fácil, esto es una unión de tipos

let a: number | string | boolean
a = 1
a = '1'
a = true

// Se pueden usar valores también (solo aceptará esos valores)
let binary: 0 | 1
binary = 0
binary = 1

type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScale
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const spiderman = createHero({ name: 'Peter Parker', age: 25 })
spiderman.powerScale = 'local'