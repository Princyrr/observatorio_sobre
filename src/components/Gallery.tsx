import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1773803/pexels-photo-1773803.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Polo Industrial de Campina Grande",
    category: "Instalações",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3913002/pexels-photo-3913002.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Indústria de Confecções",
    category: "Produção",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Centro de Tecnologia",
    category: "Tecnologia",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2162489/pexels-photo-2162489.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Automação Industrial",
    category: "Automação",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4481459/pexels-photo-4481459.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Trabalhadores Paraibanos",
    category: "Pessoas",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2280572/pexels-photo-2280572.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Inovação na Paraíba",
    category: "Laboratório",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1829630/pexels-photo-1829630.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Logística no Nordeste",
    category: "Logística",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2578021/pexels-photo-2578021.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Sustainability na Indústria Paraibana",
    category: "Sustentabilidade",
  },
];

const categories = [
  "Todas",
  "Instalações",
  "Produção",
  "Tecnologia",
  "Automação",
  "Pessoas",
  "Laboratório",
  "Logística",
  "Sustentabilidade",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredPhotos =
    selectedCategory === "Todas"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #09435e 25%, transparent 25%),
                            linear-gradient(-45deg, #09435e 25%, transparent 25%)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <ZoomIn className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">
              Galeria de Imagens
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Galeria Fotográfica
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore nossa coleção de imagens que retratam a modernidade e
            inovação do setor industrial.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 rounded bg-secondary/90 text-white text-xs mb-2">
                  {photo.category}
                </span>
                <h3 className="text-white font-semibold">{photo.title}</h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all">
            Ver Mais Fotos
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={filteredPhotos[currentPhotoIndex]?.src}
              alt={filteredPhotos[currentPhotoIndex]?.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">
                {filteredPhotos[currentPhotoIndex]?.title}
              </h3>
              <p className="text-white/60">
                {filteredPhotos[currentPhotoIndex]?.category}
              </p>
              <p className="text-white/40 text-sm mt-2">
                {currentPhotoIndex + 1} de {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
