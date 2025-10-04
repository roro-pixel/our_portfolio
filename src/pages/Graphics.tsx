import {useState} from 'react';
import { Palette, Brush, Image, Layout, Award, Eye, Lightbulb, Target, ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ChrisBrownPoster from '../assets/works/chris-brown.webp';
import DipClip from '../assets/works/dip.webp';
import VoixJeunesLogo from '../assets/works/voix-jeunes.webp';
import NiskaPoster from '../assets/works/niska.webp';
import SambaPeuzziClip from '../assets/works/samba-peuzzi.webp';

const Graphics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const icons = [
    { Icon: Palette },
    { Icon: Brush },
    { Icon: Image },
   ];

  const text = "Design";
  const letters = text.split("");

  const clients = [
    "DIP", "CHRIS BROWN", "NISKA", "SAMBA PEUZZI", "NIX", "NINHO",
    "OIM Sénégal", "Voix des jeunes", "Sivop Sénégal", "MEDUSA"
  ];

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Identité Visuelle",
      description: "Création complète de votre image de marque : logo, charte graphique, couleurs et typographies.",
      deliverables: ["Logo & déclinaisons", "Charte graphique", "Palette couleurs", "Guide d'utilisation"],
      gradient: "from-gray-400 to-orange-gray"
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Design Web & UI/UX",
      description: "Interfaces utilisateur modernes et intuitives pour vos sites web et applications.",
      deliverables: ["Maquettes web", "Prototypes interactifs", "Design système", "Tests utilisateur"],
      gradient: "from-gray-400 to-orange-gray"
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: "Supports de Communication",
      description: "Tous vos outils de communication visuelle pour promouvoir efficacement votre activité.",
      deliverables: ["Brochures & flyers", "Cartes de visite", "Affiches"],
      gradient: "from-gray-400 to-orange-gray"
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Packaging & Print",
      description: "Design d'emballages et supports imprimés qui marquent les esprits.",
      deliverables: ["Design packaging", "Étiquettes produits", "PLV"],
      gradient: "from-gray-400 to-orange-gray"
    }
  ];
  
  // Données des œuvres pour le carrousel
const artworks = [
  {
    id: 1,
    title: "Affiche Chris Brown",
    description: "Affiche officielle pour l'after party de la tournée Under the Influence",
    category: "Affiche événementielle",
    image: ChrisBrownPoster
  },
  {
    id: 2,
    title: "Clip 'Lolou mo gueune' - DIP",
    description: "Animation 2D et effets visuels pour le clip musical",
    category: "Animation 2D",
    image: DipClip
  },
  {
    id: 3,
    title: "Logo Voix des Jeunes",
    description: "Identité visuelle pour l'organisation communautaire",
    category: "Design de logo",
    image: VoixJeunesLogo
  },
  {
    id: 4,
    title: "Affiche NISKA",
    description: "Conception d'affiche pour le concert au Sénégal",
    category: "Affiche événementielle",
    image: NiskaPoster
  },
  {
    id: 5,
    title: "Clip 'Arido' - Samba Peuzzi",
    description: "Montage et animation 2D complète du clip",
    category: "Animation 2D",
    image: SambaPeuzziClip
  }
];

  const process = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Briefing",
      description: "Compréhension approfondie de vos objectifs et de votre univers"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Création",
      description: "Développement des concepts et premières propositions créatives"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Validation",
      description: "Présentation et ajustements selon vos retours"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Finalisation",
      description: "Livraison des fichiers finaux et accompagnement"
    }
  ];

  // Navigation du carrousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  // Gérer l'expansion des services
  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-pink-40 to-purple-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-light mb-6 text-center">
        {letters.map((letter, index) => (
             <motion.span
             key={index}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{
                 delay: index * 0.05, // délai entre chaque lettre
                 duration: 0.4,
             }}
            >
           {letter === " " ? "\u00A0" : letter}
            </motion.span>
         ))}
        <motion.span
            className="block pb-3 font-medium font-semibold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent ml-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: letters.length * 0.05, // après la première partie
                duration: 0.6,
           }}
         >
        graphique
      </motion.span>
    </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Créons ensemble une identité visuelle forte qui vous démarque et captive votre audience.
            Design, créativité et impact au service de votre marque.
          </p>
           <div className="flex items-center justify-center space-x-12 text-gray-400 mb-16">
            {icons.map(({ Icon }, index) => (
                  <motion.div
                      key={index}
                      initial={{ y: 0 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatDelay: (icons.length - 1) * 0.6, // attendre que tous les autres passent
                          delay: index * 0.6, // décalage entre icônes
                  
                       }}
                  >
                  <Icon className="w-8 h-8" />
                  </motion.div>
             ))}
           </div>
        </div>
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Nos <span className="font-semibold">services créatifs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              De l'identité visuelle aux supports de communication, nous donnons vie à vos idées
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                {/* Bouton Voir détails */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleService(index)}
                    className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
                  >
                    {expandedService === index ? 'Masquer les détails' : 'Voir détails'}
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${expandedService === index ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                
                {/* Section des livrables - apparaît seulement quand développé */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedService === index ? 'auto' : 0,
                    opacity: expandedService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {expandedService === index && (
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Livrables inclus</h4>
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrousel des œuvres */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Nos Réalisations</h2>
      <p className="text-xl text-gray-600">Découvrez quelques-unes de nos créations</p>
    </motion.div>

    <div className="relative">
      {/* Conteneur du carrousel - Hauteur ajustable selon besoin */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
        {/* Slides */}
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {artworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="w-full flex-shrink-0 h-full relative flex items-center justify-center"
            >
              {/* Conteneur d'image avec taille limitée et object-contain */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
              
              {/* Contenu textuel positionné en bas */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-2">{artwork.title}</h3>
                  <p className="mb-4">{artwork.description}</p>
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {artwork.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boutons de navigation - Position absolue sur les côtés */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-colors"
        aria-label="Précédent"
      >
        <ArrowLeft className="h-6 w-6 text-gray-800" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-colors"
        aria-label="Suivant"
      >
        <ArrowRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Indicateurs de slide */}
      <div className="flex justify-center mt-6">
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-1 h-2 w-2 rounded-full transition-all ${currentSlide === index ? 'bg-amber-500 w-6' : 'bg-gray-300'}`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Process */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Notre <span className="font-semibold">processus créatif</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une méthode éprouvée pour transformer vos idées en créations impactantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-400 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Outils <span className="font-semibold">professionnels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous maîtrisons les logiciels de référence pour des créations de qualité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Photoshop', 'Illustrator', 'InDesign', 'Figma', 'Sketch', 'After Effects',
              'Premiere Pro', 'XD', 'Canva', 'Procreate', 'Blender', 'Cinema 4D'
            ].map((tool, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center">
                <div className="text-lg font-semibold text-gray-700">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ils nous ont fait confiance</h2>
            <p className="text-xl text-gray-600">Artistes et organisations avec qui nous avons collaboré</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-100 px-6 py-3 rounded-full shadow-sm"
              >
                <span className="font-medium text-gray-800">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-gray-600 px-4 mb-10"
        >
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Grâce au professionnel Boubacar BA de Imaginel, SNI propose des services de graphismes créatifs et sur mesure
          </p>
        </motion.div>
    </div>
  );
};

export default Graphics;