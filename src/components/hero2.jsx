import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'Textile',
    image: 'https://images.unsplash.com/photo-1731504801830-5b14ac73d7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzYyODgyOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Chaussure',
    image: 'https://images.unsplash.com/photo-1642575006643-1861f80f8914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2hvZXMlMjBmb290d2VhcnxlbnwxfHx8fDE3NjI4ODI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Automobile',
    image: 'https://images.unsplash.com/photo-1636647510477-5ec1593b8be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXJ8ZW58MXx8fHwxNzYyODgyOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Ameublement',
    image: 'https://images.unsplash.com/photo-1762803841200-f30be8a6800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjB1cGhvbHN0ZXJ5JTIwZmFicmljfGVufDF8fHx8MTc2Mjg4Mjk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function App() {
  return (
    <section className="py-24  px-4 md:py-48 bg-cover bg-center bg-fixed 
    "style={{
        backgroundImage: `url(/africaHero.png)`,
      }}>

        <div className="absolute inset-0 bg-black/30" />  

      <div className=" max-w-[100rem] mx-auto relative z-10">
        
      {/* Hero Section */}
      
      
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-[85vh] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-300 group-hover:from-black/70" />
              
              {/* Category Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
  );
}
