/* SYNEO — scripts du site (aucune animation). Chaque bloc ne s'active que si la page en a besoin. */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const WA = 'https://wa.me/237657300479?text=';

/* Menu téléphone */
(function () {
  const b = $('#burger'), n = $('#nav');
  if (!b || !n) return;
  const set = o => { n.classList.toggle('open', o); b.setAttribute('aria-expanded', String(o)); b.textContent = o ? 'Fermer' : 'Menu'; };
  b.addEventListener('click', () => set(!n.classList.contains('open')));
  addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
})();

/* Compte à rebours : 18 nov. 2026, 11h00 à Yaoundé (UTC+1), mis à jour chaque minute */
(function () {
  const box = $('#cd');
  if (!box) return;
  const t = Date.UTC(2026, 10, 18, 10, 0, 0);
  function tick() {
    const d = t - Date.now();
    if (d <= 0) { box.innerHTML = '<span><b>Le</b>jour J</span>'; return; }
    $('#cd-j').textContent = Math.floor(d / 864e5);
    $('#cd-h').textContent = Math.floor(d % 864e5 / 36e5);
    $('#cd-m').textContent = Math.floor(d % 36e5 / 6e4);
  }
  tick(); setInterval(tick, 60000);
})();

/* Copier (téléphone, e-mail) */
function copy(txt, btn) {
  const o = btn.textContent, done = () => { btn.textContent = 'Copié'; setTimeout(() => btn.textContent = o, 1500); };
  if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done).catch(() => { btn.textContent = txt; });
  else btn.textContent = txt;
}
$$('[data-copy]').forEach(b => b.addEventListener('click', () => copy(b.dataset.copy, b)));

const val = id => (document.getElementById(id) || {}).value?.trim() || '';

/* Formulaire « Contribuer » → message WhatsApp prêt */
(function () {
  const f = $('#form-contrib');
  if (!f) return;
  let msg = '';
  f.addEventListener('submit', e => {
    e.preventDefault();
    const ok = ['f-nom', 'f-tel', 'f-titre', 'f-txt'].every(val);
    $('#f-err').hidden = ok;
    if (!ok) return;
    msg = `Proposition de contenu SYNEO\nRubrique : ${val('f-rub')}\nTitre : ${val('f-titre')}\nAuteur : ${val('f-nom')} (${val('f-tel')})\n\n${val('f-txt')}`;
    $('#f-wa').href = WA + encodeURIComponent(msg);
    $('#f-ok').hidden = false;
  });
  $('#f-copy').addEventListener('click', e => copy(msg, e.currentTarget));
})();

/* Formulaire « Contact » → message WhatsApp prêt */
(function () {
  const f = $('#form-contact');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const ok = val('c-nom') && val('c-msg');
    $('#c-err').hidden = !!ok;
    if (!ok) return;
    const objet = val('c-obj') ? `Objet : ${val('c-obj')}\n` : '';
    const m = `Bonjour SYNEO,\n${objet}${val('c-msg')}\n\n${val('c-nom')}${val('c-tel') ? ' · ' + val('c-tel') : ''}`;
    const a = $('#c-wa'); a.href = WA + encodeURIComponent(m); a.hidden = false;
  });
})();

/* Actualités : filtre par rubrique */
(function () {
  const bar = $('#filters');
  if (!bar) return;
  bar.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', bar).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    const k = b.dataset.f;
    $$('#posts .post').forEach(p => { p.hidden = k !== 'all' && p.dataset.r !== k; });
  });
})();

/* PRISME : conférences thématiques en onglets */
(function () {
  const tabs = $('#tabs'), panel = $('#panel');
  if (!tabs || !panel) return;
  const F = [
    { n: 'Intelligence Artificielle', c: 'var(--f1)' },
    { n: 'Ingénierie Spatiale', c: 'var(--f2)' },
    { n: 'Cryptomonnaies & Cybersécurité', c: 'var(--f3)' },
    { n: 'Gestion des Données Numériques', c: 'var(--f4)' },
    { n: 'Écosystème Entrepreneurial', c: 'var(--f5)' }
  ];
  const C = [
    { e: 'Compréhension', t: "Technologies de Rupture : Cartographie des Opportunités pour l'Écosystème Camerounais", g: "Poser les fondamentaux et le vocabulaire commun de chaque filière : comprendre avant de bâtir.", cp: "ENSPY — École Nationale Supérieure Polytechnique de Yaoundé",
      p: [["Intelligence Artificielle : Fondements, Promesses et Limites pour les Économies Émergentes", "Diagnostic et audit de maturité IA pour les entreprises locales."], ["Technologies Spatiales et Géospatiales : de l'Observation Satellite à la Donnée Terrain", "Vulgarisation cartographique pour collectivités locales."], ["Cryptomonnaies et Cybersécurité : Principes, Réglementation et Culture du Risque en Zone CEMAC", "Conseil réglementaire et sensibilisation cybersécurité pour PME et administrations."], ["Gestion des Données Numériques : Collecte, Conservation et Valorisation à l'Ère Digitale", "Audit documentaire et maturité data des organisations."], ["Écosystème Entrepreneurial : Logiques de Spécialisation et de Coopération entre Acteurs", "Diagnostic de positionnement dans la chaîne de valeur."]] },
    { e: 'Construction', t: "Ingénierie des Solutions Technologiques : du Concept au Prototype", g: "Comment on conçoit, développe et architecture une solution dans chaque filière.", cp: "Université de Yaoundé I — Département d'Informatique",
      p: [["Ingénierie des Modèles d'IA : Construire des Systèmes Adaptés aux Données Locales", "Studios de développement IA sur mesure."], ["Conception de Solutions Géospatiales : Images Satellite et SIG", "Bureaux d'étude cartographiques pour l'urbanisme et l'agriculture."], ["Infrastructures Numériques Sécurisées : Smart Contracts et Sécurité par Conception", "Contrats intelligents pour la traçabilité agricole ou les paiements."], ["Ingénierie des Systèmes de Gestion des Données : Infrastructures Pérennes", "Coffres-forts numériques pour notaires, banques, administrations."], ["Construire son Modèle d'Affaires : de l'Idée à la Proposition de Valeur", "Accompagnement à la structuration du business model."]] },
    { e: 'Application', t: "Technologies en Action : Cas d'Usage et Déploiements Terrain au Cameroun", g: "Les technologies déployées dans des contextes réels et sectoriels camerounais.", cp: "SUP'PTIC — Postes, Télécommunications et TIC",
      p: [["IA Appliquée : Agriculture de Précision, Santé et Services Publics", "Solutions IA packagées pour coopératives et centres de santé."], ["Applications Géospatiales : Foncier, Catastrophes et Agriculture", "Services cartographiques pour litiges fonciers et assurance agricole."], ["Cryptomonnaies et Cybersécurité en Pratique : Traçabilité et Infrastructures Critiques", "Traçabilité cacao/café pour l'export ; réponse à incident pour PME."], ["Données en Pratique : Dématérialisation, Preuve Juridique et Valorisation", "Dématérialisation pour tribunaux, mairies, entreprises."], ["Écosystèmes en Action : Collaborations Réussies au Cameroun", "Courtage de partenariats intersectoriels."]] },
    { e: 'Production', t: "De la Preuve de Concept à l'Échelle : Industrialiser les Solutions", g: "Passage à l'échelle, qualité et robustesse : du prototype au produit.", cp: "IAI-Cameroun — Centre d'Excellence Technologique Paul BIYA",
      p: [["Industrialisation de l'IA : MLOps, Qualité des Données et Passage à l'Échelle", "Maintenance et supervision de modèles en production."], ["Industrialisation des Services Géospatiaux à Grande Échelle", "Cartographie automatisée pour l'État et l'agro-industrie."], ["Industrialiser la Confiance : Scalabilité Blockchain et SOC", "Paiements blockchain à bas coût ; SOC mutualisés pour PME."], ["Plateformes de Données à Grande Échelle : Standards et Certification", "Hébergement certifié pour grands groupes et administrations."], ["Structurer une Organisation pour Passer à l'Échelle", "Conseil organisationnel pour startups en croissance."]] },
    { e: 'Modèles économiques', t: "Monétiser l'Innovation : Modèles Économiques et Stratégies de Marché", g: "La question du modèle économique et du positionnement commercial de chaque filière.", cp: "ESSTIC — Sciences et Techniques de l'Information et de la Communication",
      p: [["Modèles Économiques de l'IA : de la Licence au Service Prédictif à la Demande", "Facturation à l'usage pour PME."], ["Monétiser la Donnée Spatiale : Abonnements, Licences et Services", "Bulletins cartographiques pour assureurs et agro-industriels."], ["Monétiser la Confiance : Tokenisation, Abonnements et Assurance Cyber", "Tokens communautaires ; assurance cyber packagée."], ["La Conformité et la Donnée comme Services", "Contrats récurrents de conformité documentaire."], ["Financer la Croissance : Mécanismes de Financement au Cameroun", "Levée de fonds et mise en relation investisseurs."]] },
    { e: 'Entrepreneuriat', t: "L'Écosystème comme Chaîne de Création de Valeur : Spécialisation et Collaboration", g: "Comment chaque filière devient une entreprise viable, insérée dans un écosystème interdépendant.", cp: "NUMIATECH — clôture du cycle itinérant",
      p: [["De la Startup IA à l'Entreprise Pérenne : Lever des Fonds et Bâtir une Équipe", "Structuration juridique et levée de fonds."], ["Entrepreneuriat Spatial : Partenariats Institutionnels et Marchés Publics", "Appels d'offres publics (cadastre, cartographie nationale)."], ["Entreprendre dans la Crypto et la Cybersécurité : Cadre, Investisseurs, Confiance", "Accompagnement réglementaire CEMAC ; certification internationale."], ["Entreprendre dans les Données : Contrats Publics et Confiance comme Actif", "Contrats-cadres de dématérialisation avec l'administration."], ["La Chaîne de Valeur Inter-Filières", "Consortiums inter-filières pour grands appels à projets."]] }
  ];
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'];
  $('#fils').innerHTML = F.map(f => `<span class="fil"><i style="background:${f.c}"></i>${f.n}</span>`).join('');
  tabs.innerHTML = C.map((c, i) => `<button class="tab" type="button" role="tab" data-i="${i}" aria-selected="${i === 0}"><small>${months[i]} 2027 · Étape ${i + 1}</small>${c.e}</button>`).join('');
  function show(i) {
    const c = C[i];
    $$('.tab', tabs).forEach((b, j) => b.setAttribute('aria-selected', String(j === i)));
    panel.innerHTML = `<span class="k">Conférence ${i + 1} / 6 · ${c.e}</span><h3>${c.t}</h3><p class="goal">${c.g}</p><span class="campus">Campus hôte suggéré : ${c.cp}</span>
      <div class="talks">${c.p.map((p, j) => `<div class="talk"><div class="f"><i style="background:${F[j].c}"></i>${F[j].n}</div><div class="t">${p[0]}</div><div class="o"><b>Opportunité</b> · ${p[1]}</div></div>`).join('')}</div>`;
  }
  tabs.addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) show(+b.dataset.i); });
  show(0);
})();
