import { Link } from 'react-router-dom';
import { ChevronRight, Monitor, Palette, ArrowRight, Users, Award, Clock, ShieldCheck } from 'lucide-react';
import {motion} from 'framer-motion'

const Home = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Solutions Digitales",
      description: "Du site vitrine à l'application métier, nous créons des solutions digitales robustes, sécurisées et intuitives, avec des interfaces fluides et une expérience utilisateur optimisée",
      link: "/solutions"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Graphique",
      description: "Nous créons des identités visuelles fortes et des supports graphiques professionnels, pensés pour valoriser votre image de marque et capter l'attention de votre audience.",      
      link: "/graphisme"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Conseils & Audits",
      description: "Notre expertise technique vous guide dans vos choix stratégiques grâce à des audits approfondis pour optimiser vos systèmes d'information.",
      link: "/solutions#conseils-audits"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30"></div>
      {/* Cercles animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 mt-40 bg-amber-100 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 ml-20 mb-20 bg-orange-100 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute left-1/7 w-80 h-80 ml-10 mt-40 bg-orange-100 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/7 right-1/4 w-80 h-80 mt-20 bg-orange-100 rounded-full opacity-20 animate-pulse delay-300"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* H1 avec zoom */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Valorisez votre
          <span className="block pb-3 font-semibold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            vision digitale
          </span>
        </motion.h1>

        {/* Texte avec délai */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 font-light max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Un accompagnement complet pour réussir votre transformation numérique
          avec innovation et excellence visuelle.
        </motion.p>

        {/* Boutons avec zoom */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <Link
            to="/solutions"
            className="group bg-orange-500 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Découvrir nos solutions
            <ChevronRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full text-lg font-medium hover:border-orange-600 hover:text-orange-600 transform hover:scale-105 transition-all duration-300"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>

      {/* Flèche bounce */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
      </div>
    </section>


      {/* Services Preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Nos <span className="font-semibold">expertises</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trois domaines d'excellence pour propulser votre transformation digitale
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <Link 
                  to={feature.link}
                  className="block bg-gradient-to-b from-gray-50 to-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
                >
                  <div className="text-gray-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{feature.description}</p>
                  <div className="flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Explorer <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto leading-relaxed">
              Votre réussite digitale : notre priorité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Savoir-faire confirmé</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Une expertise solide en développement digital et création graphique
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Résultat</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rigueur et souci du détail au service de l'excellence
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Réactivité</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Des solutions personnalisées et des réponses rapides à vos attentes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            Prêt à transformer
            <span className="block font-semibold">votre entreprise ?</span>
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-12 leading-relaxed">
            Discutons de votre projet et créons ensemble votre succès digital
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Commencer votre projet
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Home;