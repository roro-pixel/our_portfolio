import { useState } from 'react';
import { GraduationCap, Users, Clock, Award, BookOpen, Video, CheckCircle, Star, Code, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Training = () => {
   const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

   const icons = [
    { Icon: GraduationCap },
    { Icon: Users },
    { Icon: Award },
   ];

  const text = "Formations";
  const letters = text.split("");
   
  const programs = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Développement Web",
      level: "Débutant à Avancé",
      duration: "32 semaines",
      description: "Apprenez les technologies web modernes : HTML, CSS, JavaScript, React, Node.js",
      modules: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js", "Bases de données"],
      gradient: "from-gray-400 to-gray-600"
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Design UI/UX",
      level: "Intermédiaire",
      duration: "8 semaines",
      description: "Maîtrisez l'art du design d'interfaces utilisateur et de l'expérience utilisateur",
      modules: ["Principes UX", "Figma/Sketch", "Prototypage", "Tests utilisateur", "Design System"],
      gradient: "from-gray-400 to-gray-600"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Développement Backend avec SpringBoot",
      level: "Tous niveaux",
      duration: "32 semaines",
      description: "Créer des backends robustes grâce au framework Spring Boot",
      modules: ["Sping Core", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring Boot Actuator", "API REST"],
      gradient: "from-gray-400 to-gray-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Management Agile",
      level: "Manager/Chef de projet",
      duration: "6 semaines",
      description: "Méthodes agiles et gestion d'équipe pour projets digitaux",
      modules: ["Scrum/Kanban", "Leadership", "Gestion d'équipe", "Outils collaboratifs", "Communication", "Rétrospective"],
      gradient: "from-gray-400 to-gray-600"
    }
  ];

  const formats = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Présentiel",
      description: "Formation en face à face dans nos locaux",
      benefits: ["Interaction directe", "Networking", "Matériel fourni", "Support immédiat"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Distanciel",
      description: "Classes virtuelles interactives avec nos experts",
      benefits: ["Flexibilité horaire", "Économies transport", "Enregistrements", "Chat en direct"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Hybride",
      description: "Combinaison optimale du présentiel et du distanciel",
      benefits: ["Meilleur des 2 mondes", "Adaptation aux contraintes", "Suivi personnalisé", "Communauté apprenante"]
    }
  ];

  const testimonials = [
    {
      name: "Kani Joseph",
      role: "Développeur Backend",
      rating: 5,
      comment: "La formation SNI m'a permis d'acquérir des compétences solides en programmation. Le formateur était très pédagogue et à l'écoute de mes besoins spécifiques."
    },
  ];

  const stats = [
    { number: "95%", label: "Taux de satisfaction" },
    { number: "5+", label: "Entreprises partenaires" }
  ];

  // Gérer l'expansion des programmes
  const toggleProgram = (index: number) => {
    setExpandedProgram(expandedProgram === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-light mb-6 text-center">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
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
                delay: letters.length * 0.05,
                duration: 0.6,
              }}
            >
              digitales
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Développez vos compétences numériques avec nos formations pratiques animées par des experts.
            Apprenez, pratiquez, réussissez votre transition digitale.
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
                  repeatDelay: (icons.length - 1) * 0.6,
                  delay: index * 0.6,
                }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Nos <span className="font-semibold">programmes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des cursus complets pour acquérir les compétences digitales les plus demandées
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {programs.map((program, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {program.icon}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="text-sm font-medium text-gray-700 mb-4 underline">{program.level}</div>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                
                {/* Bouton Voir détails */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleProgram(index)}
                    className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
                  >
                    {expandedProgram === index ? 'Masquer les modules' : 'Voir les modules'}
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${expandedProgram === index ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                
                {/* Section des modules - apparaît seulement quand développé */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedProgram === index ? 'auto' : 0,
                    opacity: expandedProgram === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {expandedProgram === index && (
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Modules inclus</h4>
                      {program.modules.map((module, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-gray-500 mr-3" />
                          {module}
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

      {/* Formats */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Formats de <span className="font-semibold">formation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choisissez la modalité qui correspond le mieux à vos contraintes et objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-white">
                    {format.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{format.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{format.description}</p>
                
                <ul className="space-y-2">
                  {format.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Témoignages <span className="font-semibold">étudiants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez les retours de nos anciens étudiants sur leur expérience
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.comment}"</p>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            Prêt à développer
            <span className="block font-semibold">vos compétences ?</span>
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed">
            Rejoignez la formation SNI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all duration-300"
            >
              Demander un devis  
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;