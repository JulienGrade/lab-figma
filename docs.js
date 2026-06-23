const chapters = [
  {
    "title": "Prise en main",
    "id": "01",
    "summary": "Repérer les bons outils, organiser ses fichiers et manipuler les calques.",
    "docs": [
      {
        "id": "interface",
        "title": "Se repérer dans Figma Design",
        "keywords": "UI3 interface outils raccourcis",
        "purpose": "Le navigateur de fichiers sert à retrouver les projets. Dans l’éditeur, le canevas accueille la maquette, Layers affiche sa structure et le panneau des propriétés dépend de la sélection.",
        "steps": "Crée un fichier Design depuis le navigateur. Sélectionne un calque puis repère ses propriétés à droite. Ouvre le menu Actions pour rechercher une commande par nom. Consulte Keyboard shortcuts depuis l’aide pour les raccourcis propres à ton système.",
        "advice": "Les intitulés de ce manuel sont généralement donnés en anglais, tels qu’on peut les rechercher dans l’interface. Si un réglage disparaît, vérifie d’abord la sélection et ton droit d’édition.",
        "source": "https://help.figma.com/hc/en-us/articles/360038511153-Create-a-new-file"
      },
      {
        "id": "structure",
        "title": "Structurer pages, sections et frames",
        "keywords": "calques frames groupes pages sections contraintes",
        "purpose": "Une page organise le fichier. Une section délimite visuellement un ensemble sur le canevas. Un frame peut contenir d’autres calques et définir une taille, un comportement ou un écran de prototype. Un groupe rassemble des calques pour les manipuler ensemble.",
        "steps": "Active Frame avec F puis dessine un cadre ou choisis un préréglage. Donne aux écrans des noms repérables comme Mobile / Catalogue. Place les écrans d’un parcours dans une section et contrôle leur hiérarchie dans Layers.",
        "advice": "Réserve le groupe aux regroupements simples. Utilise un frame pour les conteneurs qui ont une mise en page, un défilement ou des contraintes.",
        "source": "https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma"
      },
      {
        "id": "navigation",
        "title": "Naviguer et sélectionner avec précision",
        "keywords": "calques zoom déplacement verrouillage masquer",
        "purpose": "La hiérarchie des calques détermine les enfants d’un frame, l’ordre d’empilement et le contexte des propriétés.",
        "steps": "Maintiens Espace pour déplacer la vue. Utilise Layers pour sélectionner un enfant difficile à atteindre. Renomme, verrouille ou masque les éléments depuis le panneau. Utilise le menu contextuel pour accéder aux commandes d’alignement et de sélection.",
        "advice": "Contrôle l’indentation dans Layers après un déplacement. Une carte déposée à côté d’un frame dans la hiérarchie ne suivra pas son redimensionnement.",
        "source": "https://help.figma.com/hc/en-us/"
      }
    ]
  },
  {
    "title": "Créer une interface",
    "id": "02",
    "summary": "Passer du parcours et du wireframe à une maquette détaillée.",
    "docs": [
      {
        "id": "wireframe",
        "title": "Cartographier un parcours et créer un wireframe",
        "keywords": "wireframe flux UX maquette basse fidélité user flow",
        "purpose": "Le parcours représente les actions et les décisions. Le wireframe fixe la hiérarchie de chaque écran avant le traitement visuel.",
        "steps": "Identifie le point d’entrée, le résultat attendu et les sorties possibles. Dessine un frame par étape utile. Place le titre, l’action principale et les informations nécessaires. Ajoute les écrans vides, d’erreur et de confirmation qui changent le parcours.",
        "advice": "Écris des libellés réalistes dès le wireframe. Leur longueur peut modifier le nombre de lignes, la hauteur des cartes ou l’ordre des éléments.",
        "source": "https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma"
      },
      {
        "id": "formes",
        "title": "Dessiner formes, icônes et vecteurs",
        "keywords": "pen plume rectangle ellipse boolean vector flatten draw",
        "purpose": "Les formes conservent leurs paramètres. Les opérations booléennes combinent des tracés. Les outils vectoriels servent à modifier les points et les courbes.",
        "steps": "Utilise R pour un rectangle, O pour une ellipse ou P pour la plume. Sélectionne plusieurs formes puis choisis Union, Subtract, Intersect ou Exclude selon la géométrie voulue. Modifie les points en mode d’édition vectorielle.",
        "advice": "Conserve une version éditable avant Flatten. Pour une icône, garde une boîte cohérente avec les autres icônes et vérifie le rendu à sa taille d’usage.",
        "source": "https://help.figma.com/hc/en-us/"
      },
      {
        "id": "texte",
        "title": "Composer et normaliser la typographie",
        "keywords": "texte police font comfortaa styles line height",
        "purpose": "Un style de texte permet de réutiliser une combinaison typographique. La largeur et le mode de redimensionnement déterminent les retours à la ligne.",
        "steps": "Active Text avec T. Sélectionne la famille Comfortaa si elle est disponible, puis règle taille, graisse et interligne. Définis des styles pour titre, corps et libellé depuis les propriétés du texte. Pour un paragraphe dans une carte, fixe ou remplis la largeur et laisse sa hauteur s’adapter.",
        "advice": "Contrôle les libellés longs, les accents et le texte à plusieurs lignes. Évite de vectoriser le texte d’une interface en cours de conception.",
        "source": "https://help.figma.com/hc/en-us/"
      },
      {
        "id": "images",
        "title": "Ajouter des images, masques et effets",
        "keywords": "fill crop fit mask dégradé ombre blend",
        "purpose": "Une image peut remplir une forme. Un masque contrôle la visibilité d’un ensemble de calques. Les effets modifient leur rendu.",
        "steps": "Importe une image ou choisis un remplissage Image. Ajuste Fill, Fit ou Crop selon l’intention. Pour un découpage à partir d’une forme, sélectionne les calques concernés et utilise Use as mask. Règle les ombres dans Effects.",
        "advice": "Vérifie le point focal aux différents formats. Si un texte recouvre la photo, mesure son contraste dans la zone où il se trouve réellement.",
        "source": "https://help.figma.com/hc/en-us/"
      }
    ]
  },
  {
    "title": "Responsive et accessibilité",
    "id": "03",
    "summary": "Faire tenir l’interface quand la largeur, le texte ou les états changent.",
    "docs": [
      {
        "id": "mobile-first",
        "title": "Concevoir mobile first",
        "keywords": "responsive breakpoint téléphone desktop tablette",
        "purpose": "Commencer par une largeur étroite rend visibles les arbitrages de contenu et de navigation. Les grands écrans peuvent ensuite redistribuer l’espace.",
        "steps": "Maquette d’abord un écran autour de 360–390 px. Place les actions et informations par priorité. Vérifie aussi 320 px pour repérer le débordement. Crée une version large, par exemple 1440 px, et choisis tes seuils selon le moment où le contenu cesse de fonctionner.",
        "advice": "Documente les changements de composition entre tailles. Des frames mobile et desktop illustrent les comportements attendus à transmettre au développement.",
        "source": "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
      },
      {
        "id": "auto-layout",
        "title": "Mettre en page avec Auto Layout",
        "keywords": "shift a hug fill fixed gap padding alignement",
        "purpose": "Auto Layout distribue des enfants selon une direction, un espacement et des marges internes. Les frames peuvent s’imbriquer.",
        "steps": "Sélectionne les éléments et utilise Shift + A. Choisis le flux et ajuste padding, gap et alignement. Pour un bouton, essaie Hug contents. Pour une carte qui prend la largeur de son parent Auto Layout, choisis Fill container sur l’axe horizontal. Garde Fixed pour une taille volontairement stable.",
        "advice": "Si Fill container manque, vérifie le parent. Pour diagnostiquer une largeur, remonte la chaîne enfant → parent et contrôle le mode de taille sur l’axe concerné.",
        "source": "https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout-in-Figma"
      },
      {
        "id": "grilles",
        "title": "Choisir Wrap, Grid, guides et contraintes",
        "keywords": "wrap grid layout guides colonnes constraints absolute",
        "purpose": "Wrap redistribue des éléments sur plusieurs lignes. Le flux Grid d’Auto Layout les distribue en cellules. Les guides sont des repères visuels. Les contraintes positionnent un enfant dans un frame lors de son redimensionnement.",
        "steps": "Pour des étiquettes, active Wrap sur le flux adapté. Pour une composition en cellules, explore le flux Grid. Ajoute des Layout guides au frame pour disposer des colonnes de référence. Pour une décoration libre dans un frame, règle ses contraintes et teste en redimensionnant le parent.",
        "advice": "Choisis le mécanisme selon le résultat attendu et vérifie le comportement avec des contenus de tailles différentes.",
        "source": "https://help.figma.com/hc/en-us/articles/31289469907863-Use-the-grid-auto-layout-flow"
      },
      {
        "id": "accessibilite",
        "title": "Préparer une interface accessible",
        "keywords": "WCAG contraste clavier focus cible formulaire erreur",
        "purpose": "La maquette peut expliciter le contraste, le focus, les cibles et les messages. Le produit implémenté permet ensuite de vérifier les comportements avec les technologies d’assistance.",
        "steps": "Vise au moins 4,5:1 pour le texte courant et 3:1 pour le grand texte selon WCAG. Pour les cibles, examine le seuil AA de 24 × 24 CSS px et les exceptions du critère. Prévois un état de focus visible, des libellés persistants et un message d’erreur explicite.",
        "advice": "Ajoute une annotation pour l’ordre de navigation clavier et le nom accessible des boutons à icône. Associe toujours un indice textuel ou visuel distinct à une information portée par la couleur.",
        "source": "https://www.w3.org/TR/WCAG22/"
      }
    ]
  },
  {
    "title": "Design system",
    "id": "04",
    "summary": "Réutiliser des composants, des styles et des valeurs cohérentes.",
    "docs": [
      {
        "id": "composants",
        "title": "Créer des composants et des instances",
        "keywords": "assets component instance override reset detach",
        "purpose": "Le composant principal définit la structure. Une instance réutilise cette structure et peut conserver des personnalisations autorisées.",
        "steps": "Sélectionne le frame du composant puis utilise Create component. Insère une instance depuis Assets. Modifie son libellé, puis ajuste un espacement sur le composant principal et vérifie la propagation.",
        "advice": "Expose les paramètres utiles. Détache une instance uniquement si elle doit devenir indépendante du composant principal.",
        "source": "https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma"
      },
      {
        "id": "variantes",
        "title": "Modéliser états et propriétés",
        "keywords": "variants properties text boolean instance swap default focus disabled",
        "purpose": "Une variante décrit une combinaison d’états ou de types. Une propriété de composant contrôle une personnalisation utile à la personne qui utilise l’instance.",
        "steps": "Combine plusieurs composants en variantes, puis nomme leurs propriétés comme State et Emphasis. Utilise une propriété texte pour le libellé, une propriété booléenne pour la visibilité d’une icône et Instance swap pour permettre de choisir cette icône.",
        "advice": "Réserve les variantes aux différences de structure ou de comportement. Nomme les valeurs selon l’usage, par exemple Default, Focus et Disabled.",
        "source": "https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
      },
      {
        "id": "variables",
        "title": "Organiser variables, alias et modes",
        "keywords": "tokens variable collections modes theme light dark design system",
        "purpose": "Une collection regroupe des variables. Une variable peut porter une couleur, un nombre, une chaîne ou un booléen. Les modes permettent des valeurs distinctes selon le contexte lorsque le forfait le permet.",
        "steps": "Ouvre l’éditeur de variables locales. Crée une couleur de palette puis une variable sémantique comme text/primary qui référence cette couleur. Applique la variable au remplissage d’un texte. Si plusieurs modes sont disponibles, ajoute un mode et vérifie sa résolution sur un frame.",
        "advice": "Utilise des noms d’usage comme surface/default et space/card. Les styles restent utiles pour des ensembles de propriétés comme la typographie ou les effets.",
        "source": "https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes"
      },
      {
        "id": "bibliotheques",
        "title": "Publier et maintenir une bibliothèque",
        "keywords": "library publication assets updates branches version",
        "purpose": "Une bibliothèque rend disponibles des éléments partagés dans d’autres fichiers, selon le forfait et les permissions.",
        "steps": "Organise les composants et variables dans un fichier source. Ouvre Libraries et publie les ressources si ton forfait le permet. Dans un fichier consommateur, active la bibliothèque puis examine les mises à jour proposées.",
        "advice": "Pour un fichier autonome, garde les composants et variables locaux. Pour une évolution partagée, documente les changements d’API visuelle, d’états et de noms.",
        "source": "https://help.figma.com/hc/en-us/articles/13838684089751-Starter-plan-overview"
      }
    ]
  },
  {
    "title": "Prototype",
    "id": "05",
    "summary": "Relier les écrans, représenter les interactions et partager les parcours.",
    "docs": [
      {
        "id": "interactions",
        "title": "Relier des écrans et définir un point de départ",
        "keywords": "prototype present on click navigate back flow",
        "purpose": "Un parcours commence sur un frame. Une interaction associe un déclencheur à une action.",
        "steps": "Sélectionne le bouton de départ, ouvre Prototype et relie-le au frame cible. Vérifie On click → Navigate to. Définis le point de départ du flux sur le premier frame, puis ouvre Present et teste le trajet, y compris le retour.",
        "advice": "Nomme les flux selon les scénarios. Partage le lien du prototype et vérifie que la personne invitée a le niveau d’accès attendu.",
        "source": "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma"
      },
      {
        "id": "overlays",
        "title": "Configurer overlays et défilement",
        "keywords": "modal dialog drawer open overlay close scrolling fixed sticky",
        "purpose": "Un overlay s’ouvre par-dessus un écran. Le défilement montre un contenu plus grand que son cadre.",
        "steps": "Dessine la boîte de dialogue dans son propre frame. Depuis l’élément déclencheur, configure Open overlay et règle sa position. Ajoute une fermeture. Pour un écran long, fixe la hauteur du frame et règle le débordement dans Prototype.",
        "advice": "Teste le retour, la sortie d’overlay et la visibilité des boutons pendant le défilement. Pour une navigation fixe, contrôle le comportement de scroll du calque et de son parent.",
        "source": "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma"
      },
      {
        "id": "motion",
        "title": "Animer les transitions et les états",
        "keywords": "smart animate motion change to interaction hover",
        "purpose": "Smart Animate interpole les propriétés des calques qu’il peut faire correspondre. Les composants interactifs changent de variante.",
        "steps": "Pour une transition, conserve des noms et des hiérarchies cohérents entre les frames. Sélectionne Smart Animate sur l’interaction et ajuste la durée. Pour un bouton ou une bascule, relie deux variantes avec Change to.",
        "advice": "Teste le retour à l’état initial. Prévois une interaction qui fonctionne au clic ou au toucher si un état est montré au survol.",
        "source": "https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants"
      },
      {
        "id": "logique",
        "title": "Simuler des données et des conditions",
        "keywords": "set variable conditional boolean expression compteur",
        "purpose": "Les actions de prototype peuvent représenter un état, selon le forfait. Cela permet de montrer plusieurs branches dans un même scénario.",
        "steps": "Si Set variable est disponible, crée une variable booléenne, lie-la à une visibilité et modifie sa valeur sur un clic. Utilise une condition si l’action suivante dépend de cette valeur. Sans cette option, relie deux frames montrant les deux états.",
        "advice": "Indique ce qui est simulé. Une étape de formulaire, une authentification ou un paiement nécessitent une implémentation dédiée dans le produit.",
        "source": "https://help.figma.com/hc/en-us/articles/14506587589399-Use-variables-in-prototypes"
      }
    ]
  },
  {
    "title": "Collaborer et livrer",
    "id": "06",
    "summary": "Partager, relire, transmettre et exporter un fichier.",
    "docs": [
      {
        "id": "collaboration",
        "title": "Gérer accès, commentaires et versions",
        "keywords": "share comment droits permissions history review branch",
        "purpose": "Le droit d’accès détermine qui peut consulter ou modifier le fichier. Les commentaires ancrent les retours dans le design.",
        "steps": "Ouvre Share, choisis les personnes et le rôle attendu, puis copie le lien pertinent. Pour une revue, ancre le commentaire sur l’élément et résous-le après décision. Utilise l’historique pour identifier les jalons et retrouver une version.",
        "advice": "Les durées d’historique et les fonctions de branchement dépendent du forfait. Vérifie les droits sur le lien du fichier et sur celui du prototype.",
        "source": "https://help.figma.com/hc/en-us/articles/13838684089751-Starter-plan-overview"
      },
      {
        "id": "handoff",
        "title": "Préparer le handoff et utiliser Dev Mode",
        "keywords": "dev mode inspect ready for dev code connect annotations mcp",
        "purpose": "Dev Mode facilite l’inspection et le suivi des écrans prêts à être intégrés. L’accès dépend du forfait et du siège.",
        "steps": "Organise les frames livrables. Lorsque Dev Mode est disponible, marque les éléments prêts pour le développement, inspecte dimensions, variables et exports. Ajoute les règles responsive et les états. Sans accès, regroupe les spécifications dans des annotations et partage les assets.",
        "advice": "Quand l’équipe utilise Code Connect, associe les composants aux implémentations existantes. Les extraits de code et l’accès MCP suivent la configuration et les droits de l’organisation.",
        "source": "https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode"
      },
      {
        "id": "exports",
        "title": "Exporter, importer et automatiser",
        "keywords": "svg png jpg pdf .fig plugin widget rest api",
        "purpose": "Export fournit des fichiers exploitables hors de Figma. Plugins, widgets et API répondent à des besoins d’extension différents.",
        "steps": "Sélectionne le frame ou le calque, ajoute un réglage dans Export puis choisis format et échelle. Prends SVG pour un élément vectoriel et PNG pour une image avec transparence. Pour importer un fichier pris en charge, utilise Import dans le navigateur de fichiers.",
        "advice": "Les plugins agissent dans l’éditeur, les widgets vivent sur le canevas, et l’API REST s’utilise depuis un outil externe avec permissions et authentification adaptées.",
        "source": "https://developers.figma.com/"
      }
    ]
  },
  {
    "title": "Suite Figma",
    "id": "07",
    "summary": "Choisir l’outil adapté au résultat attendu.",
    "docs": [
      {
        "id": "figjam",
        "title": "FigJam · ateliers et diagrammes",
        "keywords": "whiteboard brainstorming user flow cartes sections sticky notes",
        "purpose": "FigJam est un tableau collaboratif pour préparer un parcours, organiser des idées ou synthétiser des retours.",
        "steps": "Crée un fichier FigJam. Utilise des notes pour les observations, des formes et connecteurs pour les flux, et des sections pour délimiter les phases. Partage le tableau avec les participants.",
        "advice": "À la fin d’un atelier, transforme les décisions en éléments identifiables avec un responsable ou un lien vers les écrans concernés.",
        "source": "https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma"
      },
      {
        "id": "slides",
        "title": "Figma Slides · présentations",
        "keywords": "slides présentations templates speaker notes design mode",
        "purpose": "Slides sert à construire et présenter un récit, une revue de conception ou un support de réunion.",
        "steps": "Crée un deck, choisis une disposition, puis organise le propos dans la vue d’ensemble. Ajoute les notes orateur et ouvre le mode présentation. Insère un prototype ou utilise les interactions disponibles si elles servent la revue.",
        "advice": "Mets en évidence sur chaque diapositive la décision attendue ou le changement à discuter.",
        "source": "https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma"
      },
      {
        "id": "draw",
        "title": "Figma Draw · illustration vectorielle",
        "keywords": "draw illustration pinceau brush vector",
        "purpose": "Draw rassemble des outils d’illustration pour enrichir un design avec des éléments vectoriels.",
        "steps": "Accède aux outils Draw depuis l’environnement disponible sur ton compte. Crée ou importe un tracé, ajuste ses points et ses paramètres de trait, puis réutilise l’illustration dans ta composition Design.",
        "advice": "Conserve un tracé éditable et teste le rendu sur les fonds et tailles prévus.",
        "source": "https://www.figma.com/draw/"
      },
      {
        "id": "sites",
        "title": "Figma Sites · sites web",
        "keywords": "website breakpoints publish cms seo",
        "purpose": "Sites sert à concevoir un site responsive et, selon l’accès, à le publier.",
        "steps": "Crée un fichier Sites. Construis les pages et la navigation, vérifie les points de rupture puis teste le rendu avant publication. Si le CMS est disponible, relie une collection de contenus à une structure de page réutilisable.",
        "advice": "Vérifie les droits de publication, les liens, le titre des pages et les interactions à la largeur mobile avant la mise en ligne.",
        "source": "https://www.figma.com/sites/"
      },
      {
        "id": "buzz",
        "title": "Figma Buzz · contenus marketing",
        "keywords": "buzz marketing templates lots csv",
        "purpose": "Buzz sert à produire des déclinaisons de visuels à partir de modèles.",
        "steps": "Crée un fichier Buzz et pars d’un modèle ou d’un visuel de référence. Définis les zones personnalisables, puis crée les formats et variantes nécessaires. Si l’outil de production en lot est disponible, vérifie le mappage des champs avant génération.",
        "advice": "Relis les textes les plus longs et contrôle les recadrages dans chaque format avant l’export.",
        "source": "https://www.figma.com/buzz/"
      },
      {
        "id": "make",
        "title": "Figma Make · génération assistée",
        "keywords": "make prompt ai ia prototype code",
        "purpose": "Make utilise des instructions et, le cas échéant, des éléments de design pour générer une expérience interactive.",
        "steps": "Crée un fichier Make. Décris le public, l’action principale, les états et les contraintes. Fournis un design de référence si pertinent, puis affine une interaction à la fois en vérifiant le rendu et le comportement générés.",
        "advice": "La disponibilité dépend du forfait, des crédits et des réglages administrateur. Relis les résultats générés avant de les utiliser ou de les publier.",
        "source": "https://www.figma.com/make/"
      },
      {
        "id": "weave",
        "title": "Figma Weave · workflows de création",
        "keywords": "weave nodes image vidéo génération",
        "purpose": "Weave organise la création et l’automatisation de contenus à l’aide de workflows visuels.",
        "steps": "Crée un workflow, ajoute les entrées de contenu, relie les opérations nécessaires puis inspecte les sorties intermédiaires. Réutilise la structure pour obtenir des variantes cohérentes.",
        "advice": "Documente les entrées et les paramètres afin que la chaîne soit reproductible. Vérifie séparément l’accès à Weave.",
        "source": "https://www.figma.com/weave/"
      }
    ]
  }
];
