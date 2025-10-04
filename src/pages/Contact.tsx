import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const text = "Parlons de votre";
  const letters = text.split("");

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Email',
      details: ['contact@sni-cg.com'],
      color: 'bg-gray-500'
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: 'Téléphone',
      details: ['+242 06 695 04 31', '+1 (438) 226-9794'],
      color: 'bg-gray-500'
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: 'Adresse',
      details: [
        '- 520 boulevard Général de Gaulle, Brazzaville, République du Congo',
        '- Boulevard Jean XXIII, Trois-Rivières Québec Canada'
      ],
      color: 'bg-gray-500'
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'Horaires',
      details: ['Lun - Ven: 9h00 - 18h00', 'Sam: 09h00 - 14h00'],
      color: 'bg-gray-500'
    }
  ];

  const faqItems = [
    {
      question: 'Quels sont vos délais de réalisation ?',
      answer: 'Les délais varient selon la complexité du projet. En moyenne, comptez 4-8 semaines pour un site web et 3-6 mois pour une application complète.'
    },
    {
      question: 'Proposez-vous un accompagnement après livraison ?',
      answer: 'Oui, nous offrons un support technique et une maintenance pour tous nos projets. Plusieurs formules sont disponibles selon vos besoins.'
    },
    {
      question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
      answer: 'Absolument ! Nous accompagnons des startups, PME et grandes entreprises. Nos solutions s\'adaptent à votre budget et vos objectifs.'
    }
  ];

  const subjectOptions = [
    'Développement web',
    'Application mobile',
    'Conseil technique',
    'Formation',
    'Maintenance',
    'Autre'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSubject(value);
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="pt-40 sm:pt-40 md:pt-32 min-h-[60vh] md:min-h-[80vh] bg-gradient-to-br from-amber-100 to-orange-40 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center text-gray">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semi-bold mb-6">
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
              className="font-semibold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent ml-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: letters.length * 0.05,
                duration: 0.6,
              }}
            >
              projet
            </motion.span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-12">
            Notre équipe d'experts est là pour vous accompagner dans la réalisation de vos
            ambitions digitales. Contactez-nous pour discuter de vos besoins.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-10">
            {['Réponse sous 24h', 'Devis gratuit', 'Conseil personnalisé', 'Accompagnement complet'].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mb-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm sm:text-base text-gray font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Restons connectés</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Plusieurs moyens pour nous contacter et échanger sur votre projet.
              Notre équipe vous répond rapidement pour vous accompagner.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${info.color} rounded-2xl p-3 flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm sm:text-base">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="h-56 sm:h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.578421059163!2d15.24573733952689!3d-4.301741295690253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3240b5a025bb%3A0x7f396b0073d8666!2sBd%20du%20G%C3%A9n%C3%A9ral%20de%20Gaulle%2C%20Brazzaville!5e0!3m2!1sfr!2scg!4v1743778735924!5m2!1sfr!2scg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Envoyez-nous un message</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nom de votre entreprise"
                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+242 XX XXX XX XX"
                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                <select
                  value={selectedSubject}
                  onChange={handleSubjectChange}
                  className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                  className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-orange-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-3 text-sm sm:text-base"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 text-center">
                <p className="text-gray-700 text-xs sm:text-sm">
                  Vos données sont protégées et ne seront jamais partagées avec des tiers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 sm:py-16 px-3 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Questions <span className="text-orange-500">fréquentes</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
