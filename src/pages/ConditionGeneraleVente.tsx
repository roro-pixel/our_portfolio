import { FileText, Download } from 'lucide-react';

const ConditionGeneraleVente = () => {
  const handleDownload = () => {
    import('../documents/condition-general-vente.pdf')
      .then((module) => {
        const pdfUrl = module.default;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'SNI_Conditions_Generales_Vente.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Erreur de chargement du PDF:", error);
        window.open('../../documents/conditions-generales-sni.pdf', '_blank');
      });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-12">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="flex items-center mb-6 md:mb-0">
          <FileText className="h-10 w-10 text-orange-600 mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold">
            Conditions Générales de Vente
          </h1>
        </div>

        <button
          onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
        >
          <Download className="h-5 w-5 mr-2" />
          Télécharger en PDF
        </button>
      </div>

      {/* Contenu du document */}
      <div className="prose prose-lg max-w-none">
        {/* Préambule */}
        <h2>Préambule</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
          entre SNI et ses clients dans le cadre de la vente de prestations informatiques,
          de développement logiciel, d'infrastructure IT, de conseils, et d'hébergement.
        </p>

        {/* Article 1 */}
        <h2>Article 1 – Objet</h2>
        <p>
          Les présentes CGV définissent les conditions dans lesquelles SNI fournit ses prestations de
          service, y compris mais sans s'y limiter, le développement de logiciels, la conception de
          systèmes d'information, le déploiement d'infrastructures, le conseil, la formation et la
          maintenance technique.
        </p>

        {/* Article 2 */}
        <h2>Article 2 – Commande et devis</h2>
        <p>
          Toute prestation donne lieu à l'établissement d'un devis détaillé. La commande est réputée
          ferme et définitive à réception du devis signé par le client, accompagné de l'acompte prévu.
        </p>

        {/* Article 3 */}
        <h2>Article 3 – Tarifs et modalités de paiement</h2>
        <p>
          Sauf indication contraire, les modalités usuelles de paiement sont : 60 % à la commande,
          30 % à la livraison, et 10 % après un mois de test validé. Les paiements peuvent être
          effectués par virement bancaire, mobile money, chèque ou en espèces, selon les coordonnées
          figurant sur la facture.
        </p>
        <p>
          Tout retard de paiement excédant 15 jours calendaires fera l'objet d'une renégociation ou
          pourra entraîner des frais supplémentaires.
        </p>

        {/* Article 4 */}
        <h2>Article 4 – Démos personnalisées</h2>
        <p>
          Toute démonstration réalisée à la demande du client, intégrant des critères spécifiques ou
          ayant fait l'objet de tests et de validations, peut être facturée même en cas de
          non-continuation du projet. Dans ce cas, la facturation sera distincte et ne pourra être
          déduite du montant de la future prestation.
        </p>

        {/* Article 5 */}
        <h2>Article 5 – Délais</h2>
        <p>
          Les délais de réalisation sont donnés à titre indicatif. SNI met tout en œuvre pour respecter
          les délais convenus mais ne pourra être tenu responsable des retards imputables au client ou
          à des circonstances extérieures.
        </p>

        {/* Article 6 */}
        <h2>Article 6 – Obligations du client</h2>
        <p>
          Le client s'engage à fournir à SNI l'ensemble des informations, documents et accès nécessaires
          à la bonne exécution de la prestation dans les délais requis.
        </p>

        {/* Article 7 */}
        <h2>Article 7 – Confidentialité</h2>
        <p>
          SNI s'engage à ne jamais divulguer les informations sensibles confiées par ses clients,
          ni à les utiliser à des fins autres que celles prévues dans le cadre du contrat de prestation.
        </p>

        {/* Article 8 */}
        <h2>Article 8 – Propriété intellectuelle</h2>
        <p>
          Les livrables (code source, documentation, maquettes, schémas, plans techniques, etc.)
          restent la propriété exclusive de SNI jusqu'au paiement intégral de la prestation.
          L'application livrée devient la propriété du client une fois le paiement intégral effectué,
          à l'exception du code source qui demeure, par défaut, la propriété de SNI, sauf disposition
          contraire précisée par écrit dans le contrat ou le devis.
        </p>
        <p>
          Une cession des droits sur le code source (exclusifs ou non) peut être accordée au client
          sur demande et contre rémunération complémentaire ou dans le cadre d'un accord spécifique.
        </p>
        <p>
          SNI s'engage formellement à ne pas divulguer ou réutiliser tout ou partie du code source
          d'un développement sur mesure sans l'accord écrit et préalable du client concerné.
        </p>

        {/* Article 9 */}
        <h2>Article 9 – Loi applicable et juridiction compétente</h2>
        <p>
          Les présentes CGV sont soumises au droit congolais. En cas de litige, les parties
          s'efforceront de régler le différend à l'amiable. À défaut, compétence exclusive est
          attribuée aux tribunaux du commerce de Brazzaville.
        </p>
      </div>
    </div>
  );
};

export default ConditionGeneraleVente;
