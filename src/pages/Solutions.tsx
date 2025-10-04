import { Monitor, Globe, Code, Database, Shield, ShieldCheck, Rocket, Gauge, ChevronRight, Users, BarChart, Server, ChevronDown, ChevronUp } from 'lucide-react';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';

const Solutions = () => {
const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [showAllTechs, setShowAllTechs] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false); 

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleShowAllServices = () => {
  if (showAllServices) {
    // On va masquer les cartes, scroll vers la dernière visible
    setTimeout(() => {
      const lastVisibleIndex = 1; // index de la dernière carte visible avant expansion (0 à 5 pour mobile)
      const element = document.querySelector(`#solution-${lastVisibleIndex}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // commence la vue depuis le haut de l'élément
        });
      }
    }, 100); // délai pour que le DOM se mette à jour
  }
  setShowAllServices(!showAllServices);
};;

const toggleShowAllTechs = () => {
  if (showAllTechs) {
    // On va masquer les cartes, scroll vers la dernière visible
    setTimeout(() => {
      const techs = document.querySelectorAll('[id^="tech-"]');
      let numVisible: number;

      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 768) numVisible = 6;       // mobile
        else if (width < 1024) numVisible = 10; // tablette
        else numVisible = 15;                   // desktop
      } else {
        numVisible = 6;
      }

      const lastVisibleElement = techs[numVisible - 1];
      if (lastVisibleElement) {
        lastVisibleElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  }

  setShowAllTechs(!showAllTechs);
};



    // Effet pour gérer le scroll vers la section demandée
    useEffect(() => {
      // Vérifie s'il y a un hash dans l'URL
      const hash = window.location.hash;
      if (hash) {
        // Petit délai pour s'assurer que le DOM est rendu
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }, 100);
      }
    }, []);

    const icons = [
    { Icon: Rocket },
    { Icon: Gauge },
    { Icon: ShieldCheck },
   ];

   const text = "Solutions";
  const letters = text.split("")

const solutions = [
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Applications",
    shortDescription: "Création d'applications web et mobiles performantes et sécurisées, adaptées à vos besoins métiers.",
    fullDescription: "Nous concevons des applications web et mobiles sur mesure, alliant performances, sécurité et expérience utilisateur optimale. Que ce soit en natif, hybride ou web, nos solutions couvrent toutes les plateformes. Nous assurons le cycle complet : conception, développement, déploiement, publication sur stores et maintenance. Chaque projet est pensé pour être évolutif et facile à maintenir.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Maintenance & Support",
    shortDescription: "Assistance continue pour garantir la performance et la sécurité de vos applications.",
    fullDescription: "Nous proposons des services de maintenance et de support pour vos applications afin d'assurer leur bon fonctionnement, corriger les bugs, effectuer les mises à jour et garantir la sécurité. Notre équipe réactive est disponible pour résoudre rapidement tout problème et optimiser vos systèmes sur le long terme.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Conseils & Audits",
    id: "conseils-audits",
    shortDescription: "Expertise conseil et audits techniques pour optimiser vos systèmes d'information.",
    fullDescription: "Notre expertise technique vous aide à faire les bons choix stratégiques. Nous réalisons des audits approfondis de vos systèmes existants, identifions les axes d'amélioration et vous proposons des recommandations concrètes. Nos conseils couvrent l'architecture technique, la sécurité, les performances, la scalabilité et l'optimisation des coûts. Nous vous accompagnons également dans la définition de votre stratégie technologique.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Software Integration",
    shortDescription: "Intégration fluide de logiciels et systèmes pour automatiser vos processus métiers.",
    fullDescription: "Nous intégrons vos logiciels existants et nouveaux systèmes pour créer un environnement cohérent et automatisé. Nos solutions permettent l'échange sécurisé de données entre applications, l'optimisation des flux opérationnels et la réduction des erreurs humaines. Nous veillons à ce que vos systèmes communiquent efficacement et restent évolutifs.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Product Design",
    shortDescription: "Conception de produits digitaux centrés utilisateur pour maximiser l'impact et l'expérience.",
    fullDescription: "Nous accompagnons vos projets depuis l'idéation jusqu'au produit final, en créant des interfaces intuitives et esthétiques. Notre approche inclut la recherche utilisateur, le prototypage, les tests UX/UI et l'itération continue. L'objectif est de transformer vos idées en produits digitaux attractifs, performants et alignés avec vos objectifs business.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Solutions Cloud",
    shortDescription: "Architecture cloud scalable et sécurisée pour héberger et faire évoluer vos applications.",
    fullDescription: "Nous concevons et déployons des infrastructures cloud hautement disponibles et sécurisées. Notre approche DevOps garantit des déploiements fiables et automatisés. Nous optimisons les coûts tout en assurant la scalabilité de vos solutions. Migration d'infrastructures existantes, conteneurisation et orchestration font partie de notre expertise.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Transformation Digitale",
    shortDescription: "Accompagnement complet dans votre transition numérique et modernisation de vos processus.",
    fullDescription: "Nous vous accompagnons dans votre transformation digitale en analysant vos processus existants et en proposant des solutions innovantes. Notre approche méthodique inclut l'audit de l'existant, la définition d'une roadmap claire, la modernisation progressive des systèmes et la formation de vos équipes. Nous assurons une transition en douceur vers le digital.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Gestion de Données",
    shortDescription: "Solutions de gestion, analyse et visualisation de données pour optimiser vos décisions business.",
    fullDescription: "Nous transformons vos données en véritables actifs stratégiques. De la collecte à la visualisation, en passant par le traitement et l'analyse, nous créons des systèmes qui vous donnent une vue d'ensemble de votre activité. Nos solutions incluent la mise en place de data lakes, l'implémentation d'outils BI et le développement de modèles prédictifs.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Cybersécurité",
    shortDescription: "Protection de vos systèmes et données avec les meilleures pratiques de sécurité informatique.",
    fullDescription: "La sécurité est au cœur de toutes nos réalisations. Nous implémentons une approche de sécurité by design, en intégrant les meilleures pratiques dès la conception. Nos services incluent les audits de sécurité, la mise en place de systèmes de surveillance, le chiffrement des données et la formation de vos équipes aux enjeux de cybersécurité.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Gouvernements et Citoyens numériques",
    shortDescription: "Numérisation des institutions pour une gouvernance ouverte et centrée citoyen.",
    fullDescription: "Nous accompagnons les gouvernements dans leur transition vers le numérique et renforçons la place des citoyens dans cet écosystème. Nos solutions favorisent une interaction fluide entre administrations et usagers, en intégrant la dématérialisation des services publics, la participation citoyenne, les guichets numériques, la transparence institutionnelle et l’accessibilité pour tous. Nos plateformes garantissent la sécurité et la confidentialité des données, tout en soutenant la construction de sociétés plus inclusives et connectées.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "Data Science",
    shortDescription: "Exploitation intelligente des données pour générer des insights et des modèles prédictifs.",
    fullDescription: "Nous mettons en œuvre des solutions de data science pour extraire la valeur cachée dans vos données. Cela inclut la modélisation statistique, l’apprentissage automatique, la segmentation client, la détection d’anomalies et la prédiction de comportements. Nos experts transforment vos données en leviers de performance.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "Systèmes d'information",
    shortDescription: "Conception et optimisation de systèmes d'information robustes et évolutifs.",
    fullDescription: "Nous concevons des systèmes d'information adaptés à vos enjeux métiers. De l’architecture technique à l’intégration des processus, nous assurons la cohérence, la sécurité et la performance de vos SI. Notre approche modulaire permet une évolution progressive et une interopérabilité avec vos outils existants.",
    gradient: "from-gray-400 to-gray-600"
  }
];


  const process = [
    {
      step: "01",
      title: "Analyse",
      description: "Étude approfondie de vos besoins et contraintes techniques"
    },
    {
      step: "02",
      title: "Conception",
      description: "Architecture et design de la solution optimale"
    },
    {
      step: "03",
      title: "Développement",
      description: "Réalisation avec les meilleures pratiques et technologies"
    },
    {
      step: "04",
      title: "Déploiement",
      description: "Mise en production sécurisée et formation des équipes"
    }
  ];

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
        digitales
      </motion.span>
    </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Des outils digitaux de dernière génération pour faire évoluer votre entreprise, alliant innovation, efficacité et sécurité.
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

      {/* Solutions Grid */}
  <section id="solutions-section" className="py-16 lg:py-24 bg-gray-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="pt-6 text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Notre <span className="font-semibold">expertise technique</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes adaptées à chaque secteur d'activité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {(showAllServices ? solutions : solutions.slice(0, 6)).map((solution, index) => (
              <div
                key={index}
                id={solution.id || `solution-${index}`}
                className="group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-white">{solution.icon}</div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>

                <div className="text-gray-600 leading-relaxed mb-4">
                  <p className="text-xs md:text-sm">
                    {expandedCards[index] ? solution.fullDescription : solution.shortDescription}
                  </p>

                  <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center mt-2 text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium text-xs"
                  >
                    {expandedCards[index] ? (
                      <>
                        Voir moins
                        <ChevronUp className="w-3 h-3 ml-1" />
                      </>
                    ) : (
                      <>
                        Voir plus
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Voir plus/moins de services */}
          <div className="text-center mt-8">
<button
  onClick={toggleShowAllServices}
  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
>
  {showAllServices ? (
    <>
      Voir moins de services
      <ChevronUp className="w-4 h-4 ml-2" />
    </>
  ) : (
    <>
      Voir tous nos services
      <ChevronDown className="w-4 h-4 ml-2" />
    </>
  )}
</button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Notre <span className="font-semibold">méthodologie</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un processus éprouvé pour garantir la réussite de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
<section className="py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
        Technologies <span className="font-semibold">modernes</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Nous utilisons les outils et frameworks les plus avancés
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {[
        'React', 'Vue.js', 'SpringBoot', 'Node.js', 'Python', 'AWS', 'Docker',
        'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'TypeScript', 'ElasticSearch', 'RabbitMQ'
      ]
      .slice(0, (() => {
        if (!showAllTechs && typeof window !== 'undefined') {
          const width = window.innerWidth;
          if (width < 768) return 6;       // mobile
          else if (width < 1024) return 10; // tablette
          else return 15;                   // desktop
        }
        return 15;
      })())
      .map((tech, index) => (
        <div
          key={index}
          id={`tech-${index}`}
          className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center"
        >
          <div className="text-lg font-semibold text-gray-700">{tech}</div>
        </div>
      ))}
    </div>

    {/* Bouton Voir plus/moins */}
    {(() => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 0;
      const numDefault = width < 768 ? 6 : width < 1024 ? 10 : 15;
      return (
        numDefault < 15 && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAllTechs}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {showAllTechs ? (
                <>
                  Voir moins
                  <ChevronUp className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Voir toutes les technologies
                  <ChevronDown className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        )
      );
    })()}
  </div>
</section>
    </div>
  );
};

export default Solutions;