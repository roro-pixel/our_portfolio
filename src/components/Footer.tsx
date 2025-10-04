import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, FileText, Download } from 'lucide-react';
import { toast } from "react-toastify";
import bronzePartner from '../documents/BronzePartner.png';

const Footer = () => {
  const handleDownload = () => {
    import('../documents/grille-tarifaire-sni.pdf').then((module) => {
      const pdfUrl = module.default;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'SNI_Grille_Tarifaire.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(error => {
      console.error("Erreur de chargement du PDF:", error);
      window.open('../../documents/grille-tarifaire-sni.pdf', '_blank');
    });
  };

  const handleDownloadCGV = () => {
    import("../documents/condition-general-vente.pdf")
      .then((module) => {
        const pdfUrl = module.default;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "SNI_Conditions_Generales_Vente.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Erreur lors du téléchargement du PDF :", error);
      });
  };

  const handleSupportClick = () => {
    toast.info("Notre espace support est en cours de finalisation. Merci de patienter.", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Colonne 1 - Logo SNI */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">SNI</span>
            </div>
            <p className="text-gray-600">
              Concevons autrement
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className=" hover:text-orange-500 transition-colors">Accueil</Link></li>
              <li><Link to="/solutions" className="hover:text-orange-500 transition-colors">Solutions</Link></li>
              <li><Link to="/graphisme" className=" hover:text-orange-500 transition-colors">Graphismes</Link></li>
              <li><Link to="/training" className="hover:text-orange-500 transition-colors">Formations</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-600">
                 <li className="flex items-center space-x-3">
                     <Mail className="h-5 w-5" />
                     <a href="mailto:contact@sni-cg.com?subject=Contact%20from%20SNI%20Website" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      contact@sni-cg.com
                      </a>
                 </li>
                 <li className="flex items-center space-x-3">
                     <div className="flex-shrink-0 pt-0.5 mr-3">
                         <Phone className="h-5 w-5" />
                     </div>
                     <div className="text-base leading-snug">
                         +242 06 695 04 31<br />
                         +1 (438) 226-9794
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="flex-shrink-0 pt-0.5 mr-3">
                        <MapPin className="h-6 w-6" />
                     </div>
                     <div className="text-base leading-snug">
                         520 boulevard Général de Gaulle,<br />
                         Brazzaville, République du Congo<br /><br />
                         Boulevard Jean XXIII, Trois-Rivières<br />
                         Québec Canada
                    </div>
                 </li>
              </ul>
          </div>

          {/* Colonne 4 - Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="mb-4 text-gray-600">
              Besoin d'aide ? Notre équipe de support est disponible 24/7.
            </p>
            <button
              onClick={handleSupportClick}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
            >
              <span>Support</span>
            </button>
          </div>

          {/* Colonne Partenariat */}
          <div className="space-y-4">
              <h3 className="text-md font-semibold">Partenaires</h3>
              <div className="flex items-start space-x-3 p-3 rounded-lg">
                <img 
                    src={bronzePartner} 
                    alt="Logo CloudWays"
                    className="h-10 w-10"
                />
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">CloudWays</p>
                    <p className="text-xs text-gray-600">AGENCY PARTNER</p>
                    <p className="text-gray-500 text-xs font-bold tracking-wider">BRONZE</p>
                </div>
              </div>
          </div>
        </div>

        {/* Liens légaux */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-6">
          <div className="flex space-x-6">
            <button
              onClick={handleDownloadCGV}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-400 transition focus:outline-none"
            >
              <FileText className="h-5 w-5" />
              <span>Conditions Générales de Vente</span>
            </button>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center text-gray-600 hover:text-amber-700 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Télécharger la grille tarifaire
          </button>
        </div>

        <div className="mt-8 pt-8 text-gray-600 border-t border-gray-800 flex justify-center items-center h-20">
          <p className="text-center ">
            © {new Date().getFullYear()} SNI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
