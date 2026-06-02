/* =========================================================================
   Contenu de la formation — Trading (Smart Money Concepts)
   Données pures : consommées par app.js pour générer la navigation et les pages.
   ========================================================================= */

const COURSE = {
  title: "Formation Trading",
  subtitle: "De débutant à trader structuré — Smart Money Concepts",
  modules: [

    /* ===================== MODULE 1 ===================== */
    {
      number: 1,
      title: "Introduction au Trading",
      icon: "📊",
      summary: "Les fondations : marchés, actifs, mécanique d'un trade et styles de trading.",
      lessons: [
        {
          title: "Qu'est-ce qu'un marché financier ?",
          minutes: 8,
          html: `
<p>Un <strong>marché financier</strong> est un lieu — aujourd'hui essentiellement électronique — où acheteurs et vendeurs s'échangent des actifs : devises, actions, matières premières, cryptomonnaies. Le prix d'un actif est le point d'équilibre temporaire entre l'offre et la demande.</p>
<h3>Le rôle du prix</h3>
<p>Le prix n'est pas « la vraie valeur » d'un actif : c'est le dernier prix auquel un acheteur et un vendeur se sont mis d'accord. Il bouge en permanence parce que de nouveaux ordres arrivent à chaque seconde.</p>
<ul>
  <li><strong>Offre &gt; Demande</strong> → le prix baisse.</li>
  <li><strong>Demande &gt; Offre</strong> → le prix monte.</li>
</ul>
<h3>Les acteurs du marché</h3>
<ul>
  <li><strong>Particuliers (retail)</strong> : vous et moi, via un broker.</li>
  <li><strong>Institutions</strong> : banques, hedge funds, market makers. Ils déplacent l'essentiel du volume.</li>
  <li><strong>Brokers</strong> : intermédiaires qui vous donnent accès au marché.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> en tant que particulier, vous ne « bougez » pas le marché. Votre travail est de <em>lire</em> ce que font les gros acteurs et de vous positionner avec eux.</div>`
        },
        {
          title: "Les différents actifs",
          minutes: 10,
          html: `
<p>Tous les actifs ne se tradent pas de la même manière. Voici les principaux que vous croiserez dans cette formation.</p>
<h3>Forex (devises)</h3>
<p>L'échange de paires de devises (EUR/USD, GBP/JPY…). C'est le marché le plus liquide au monde, ouvert 24h/24 du lundi au vendredi.</p>
<h3>Or (XAU/USD)</h3>
<p>Valeur refuge par excellence. Très volatil, réagit fortement aux taux d'intérêt et à l'incertitude économique.</p>
<h3>Indices</h3>
<p>Paniers d'actions : NASDAQ (US100), S&amp;P 500 (US500), DAX (GER40). On trade « le marché » dans son ensemble plutôt qu'une action isolée.</p>
<h3>Matières premières</h3>
<p>Pétrole, gaz, blé, argent… Sensibles à l'offre/demande physique et à la géopolitique.</p>
<h3>Bitcoin / Crypto</h3>
<p>Marché ouvert 24h/24, 7j/7. Très volatil, idéal pour s'entraîner mais à manier avec une gestion du risque stricte.</p>
<div class="callout callout-tip"><strong>Conseil :</strong> au début, spécialisez-vous sur <strong>1 à 2 actifs</strong> (ex. EUR/USD et XAU/USD). Chaque actif a son « caractère ».</div>`
        },
        {
          title: "Comment fonctionne un trade",
          minutes: 12,
          html: `
<p>Un trade consiste à <strong>acheter</strong> (parier sur la hausse) ou <strong>vendre</strong> (parier sur la baisse) un actif. Comprendre les coûts est essentiel.</p>
<h3>Achat (Long)</h3>
<p>Vous achetez en espérant revendre plus cher. Profit si le prix monte.</p>
<h3>Vente (Short)</h3>
<p>Vous vendez à découvert en espérant racheter moins cher. Profit si le prix baisse. (Possible grâce à l'effet de levier du broker.)</p>
<h3>Le Spread</h3>
<p>La différence entre le prix d'achat (<em>ask</em>) et le prix de vente (<em>bid</em>). C'est le premier coût payé à chaque trade. Un spread de 0,5 pip signifie que vous démarrez légèrement en négatif.</p>
<h3>La Commission</h3>
<p>Frais fixes prélevés par certains brokers (souvent sur les comptes « raw spread ») à l'ouverture/fermeture de la position.</p>
<h3>Le Swap</h3>
<p>Intérêt payé ou reçu lorsqu'une position reste ouverte la nuit (rollover). Peut être positif ou négatif selon les taux des devises.</p>
<table class="tbl">
  <thead><tr><th>Coût</th><th>Quand ?</th></tr></thead>
  <tbody>
    <tr><td>Spread</td><td>À chaque ouverture</td></tr>
    <tr><td>Commission</td><td>Ouverture + clôture</td></tr>
    <tr><td>Swap</td><td>Position gardée la nuit</td></tr>
  </tbody>
</table>`
        },
        {
          title: "Les différents styles de trading",
          minutes: 10,
          html: `
<p>Votre style dépend de votre temps disponible, votre tempérament et votre capital. Aucun n'est « meilleur » — il faut trouver le vôtre.</p>
<h3>Scalping</h3>
<p>Trades très courts (secondes à minutes) sur M1–M5. Beaucoup de trades, petits gains, exige concentration et discipline extrêmes.</p>
<h3>Day Trading</h3>
<p>Positions ouvertes et fermées dans la même journée. Pas de risque overnight. Timeframes M5–H1.</p>
<h3>Swing Trading</h3>
<p>Positions tenues plusieurs jours à plusieurs semaines. Analyse sur H4–Daily. Moins de temps écran, plus de patience.</p>
<h3>Position Trading</h3>
<p>Long terme (semaines à mois). Proche de l'investissement, basé sur les grandes tendances et le fondamental.</p>
<div class="callout callout-key"><strong>À retenir :</strong> un débutant qui travaille à côté est souvent plus à l'aise en <strong>swing</strong> ou <strong>day trading</strong> qu'en scalping, qui demande une exécution parfaite.</div>`
        },
        {
          title: "Les erreurs des débutants",
          minutes: 9,
          html: `
<p>La majorité des débutants perdent leur compte pour les mêmes raisons. Les connaître, c'est déjà les éviter.</p>
<ol>
  <li><strong>Trop de levier</strong> — risquer 20 % du compte sur un trade. Un seul mauvais trade et c'est fini.</li>
  <li><strong>Pas de stop-loss</strong> — « ça va revenir »… jusqu'à l'appel de marge.</li>
  <li><strong>Overtrading</strong> — vouloir trader en permanence, par ennui ou pour « se refaire ».</li>
  <li><strong>Revenge trading</strong> — re-rentrer immédiatement après une perte, par émotion.</li>
  <li><strong>Aucun plan</strong> — entrer « au feeling », sans règles d'entrée ni de sortie.</li>
  <li><strong>Changer de stratégie chaque semaine</strong> — jamais assez de données pour savoir si ça marche.</li>
  <li><strong>Ignorer la psychologie</strong> — croire que c'est uniquement technique.</li>
</ol>
<div class="callout callout-warn"><strong>Vérité dérangeante :</strong> 90 % des traders particuliers perdent. La différence ne se joue pas sur la stratégie, mais sur la <strong>gestion du risque</strong> et la <strong>discipline</strong>.</div>`
        }
      ]
    },

    /* ===================== MODULE 2 ===================== */
    {
      number: 2,
      title: "Installation de l'environnement",
      icon: "🛠️",
      summary: "Préparer ses outils : compte démo, MT5, TradingView, graphiques et calendrier.",
      lessons: [
        {
          title: "Création d'un compte démo",
          minutes: 7,
          html: `
<p>Un <strong>compte démo</strong> est un compte d'entraînement avec de l'argent virtuel mais des prix réels. C'est obligatoire avant de risquer le moindre euro.</p>
<h3>Étapes</h3>
<ol>
  <li>Choisissez un broker régulé (FCA, CySEC, ASIC…).</li>
  <li>Ouvrez un compte démo (gratuit, sans dépôt).</li>
  <li>Choisissez un solde virtuel <strong>réaliste</strong> (ex. 1 000 $ ou 10 000 $), pas 1 million.</li>
  <li>Sélectionnez un levier raisonnable (1:30 à 1:100).</li>
</ol>
<div class="callout callout-tip"><strong>Conseil :</strong> tradez votre démo comme si c'était du réel. Un solde virtuel de 1 M$ vous donne de mauvaises habitudes de gestion du risque.</div>`
        },
        {
          title: "Installation de MetaTrader 5 (MT5)",
          minutes: 8,
          html: `
<p><strong>MetaTrader 5</strong> est la plateforme d'exécution la plus répandue. C'est là que vous passerez vos ordres.</p>
<h3>Installation</h3>
<ol>
  <li>Téléchargez MT5 depuis le site de votre broker (jamais une source douteuse).</li>
  <li>Installez et connectez-vous avec les identifiants de votre compte démo.</li>
  <li>Vérifiez en bas à droite que le statut est <em>connecté</em> (débit/montant qui bouge).</li>
</ol>
<h3>Repères de l'interface</h3>
<ul>
  <li><strong>Observation du marché</strong> : liste des actifs (Ctrl+M).</li>
  <li><strong>Fenêtre des graphiques</strong> : le cœur de l'analyse.</li>
  <li><strong>Terminal</strong> : positions ouvertes, historique, solde (Ctrl+T).</li>
</ul>
<p><a href="https://www.metatrader5.com/fr/download" target="_blank" rel="noopener">→ Télécharger MetaTrader 5</a></p>`
        },
        {
          title: "Installation de TradingView",
          minutes: 7,
          html: `
<p><strong>TradingView</strong> est l'outil d'analyse graphique de référence. Beaucoup de traders analysent sur TradingView et exécutent sur MT5.</p>
<h3>Mise en route</h3>
<ol>
  <li>Créez un compte gratuit sur tradingview.com.</li>
  <li>La version gratuite suffit largement pour débuter (1 alerte, quelques indicateurs).</li>
  <li>Cherchez votre actif (ex. « EURUSD », « XAUUSD », « BTCUSD »).</li>
</ol>
<h3>Pourquoi TradingView plutôt que MT5 pour l'analyse ?</h3>
<ul>
  <li>Outils de dessin bien plus pratiques.</li>
  <li>Graphiques plus lisibles et personnalisables.</li>
  <li>Partage facile de vos analyses (captures, liens).</li>
</ul>
<p><a href="https://www.tradingview.com/" target="_blank" rel="noopener">→ Accéder à TradingView</a></p>`
        },
        {
          title: "Configuration des graphiques",
          minutes: 9,
          html: `
<p>Un graphique propre = une analyse claire. Évitez la « soupe d'indicateurs ».</p>
<h3>Réglages recommandés</h3>
<ul>
  <li><strong>Type</strong> : chandeliers japonais (candlesticks).</li>
  <li><strong>Couleurs</strong> : haussier/baissier bien contrastés (ex. vert/rouge ou blanc/noir).</li>
  <li><strong>Fond</strong> : sombre pour le confort des yeux, ou clair selon votre préférence.</li>
  <li><strong>Indicateurs</strong> : aucun au début ! On apprend à lire le <em>prix nu</em> (price action).</li>
</ul>
<div class="callout callout-tip"><strong>Règle d'or :</strong> si vous ne savez pas expliquer ce qu'un indicateur fait, retirez-le. Moins = plus.</div>`
        },
        {
          title: "Utilisation du calendrier économique",
          minutes: 8,
          html: `
<p>Le <strong>calendrier économique</strong> liste les annonces qui font bouger le marché : taux d'intérêt, inflation, emploi…</p>
<h3>Lire le calendrier</h3>
<ul>
  <li><strong>Impact</strong> : faible / moyen / fort (souvent codé par couleur). Concentrez-vous sur le <strong>fort</strong> (rouge).</li>
  <li><strong>Prévision vs Réel</strong> : l'écart entre les deux crée la volatilité.</li>
  <li><strong>Heure</strong> : notez-la dans VOTRE fuseau horaire.</li>
</ul>
<div class="callout callout-warn"><strong>Important :</strong> ne tradez pas juste avant une annonce à fort impact (NFP, CPI, FOMC). Le marché peut devenir erratique et déclencher votre stop dans les deux sens.</div>
<p>Sources : Forex Factory, Investing.com, Myfxbook.</p>`
        }
      ]
    },

    /* ===================== MODULE 3 ===================== */
    {
      number: 3,
      title: "Lecture des graphiques",
      icon: "📈",
      summary: "Chandeliers, unités de temps, supports/résistances, tendances et ranges.",
      lessons: [
        {
          title: "Les chandeliers japonais",
          minutes: 11,
          html: `
<p>Le <strong>chandelier japonais</strong> (candlestick) est l'unité de base de la lecture du prix. Chaque bougie raconte une bataille entre acheteurs et vendeurs sur une période donnée.</p>
<h3>Anatomie d'une bougie</h3>
<ul>
  <li><strong>Corps</strong> : distance entre l'ouverture et la clôture.</li>
  <li><strong>Mèches (ombres)</strong> : extrêmes atteints (haut et bas) durant la période.</li>
  <li><strong>Couleur</strong> : haussière (clôture &gt; ouverture) ou baissière (clôture &lt; ouverture).</li>
</ul>
<h3>Signaux clés</h3>
<ul>
  <li><strong>Grand corps</strong> = forte conviction directionnelle.</li>
  <li><strong>Longue mèche</strong> = rejet d'un niveau (le prix a été repoussé).</li>
  <li><strong>Doji</strong> = indécision (ouverture ≈ clôture).</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> ne mémorisez pas 50 figures par cœur. Comprenez la <em>logique</em> : où le prix a-t-il été accepté, où a-t-il été rejeté ?</div>`
        },
        {
          title: "Les unités de temps (timeframes)",
          minutes: 9,
          html: `
<p>Une <strong>unité de temps</strong> (timeframe) définit la durée représentée par chaque bougie : M1 = 1 minute, H4 = 4 heures, D1 = 1 jour…</p>
<h3>Catégories</h3>
<ul>
  <li><strong>Hautes UT</strong> (Weekly, Daily, H4) : donnent la <em>direction</em> et le contexte.</li>
  <li><strong>Basses UT</strong> (M15, M5, M1) : donnent les <em>points d'entrée</em> précis.</li>
</ul>
<h3>Principe fondamental</h3>
<p>Les hautes unités de temps <strong>dominent</strong> les basses. Une configuration haussière en M5 ne vaut rien si le Daily est clairement baissier.</p>
<div class="callout callout-tip"><strong>Conseil :</strong> on analyse <strong>du haut vers le bas</strong> (top-down). On verra ça en détail au Module 7.</div>`
        },
        {
          title: "Supports et résistances",
          minutes: 11,
          html: `
<p>Un <strong>support</strong> est une zone où le prix a tendance à rebondir vers le haut ; une <strong>résistance</strong> est une zone où il a tendance à être repoussé vers le bas.</p>
<h3>Ce sont des zones, pas des lignes</h3>
<p>Le débutant trace une ligne fine au pixel près. En réalité, ce sont des <strong>zones</strong> (rectangles) car le prix « respire » autour de ces niveaux.</p>
<h3>Polarité</h3>
<p>Un support cassé devient souvent une résistance, et inversement. C'est le principe de <strong>polarité</strong> (flip).</p>
<h3>Plus un niveau est touché…</h3>
<p>…plus il est « connu » du marché. Mais attention : un niveau trop touché finit souvent par céder, car la liquidité s'y accumule (Module 5).</p>`
        },
        {
          title: "Tendances",
          minutes: 9,
          html: `
<p>« The trend is your friend. » Trader dans le sens de la tendance augmente nettement vos probabilités.</p>
<h3>Définition simple</h3>
<ul>
  <li><strong>Tendance haussière</strong> : sommets et creux de plus en plus hauts.</li>
  <li><strong>Tendance baissière</strong> : sommets et creux de plus en plus bas.</li>
  <li><strong>Range</strong> : pas de direction claire, le prix oscille horizontalement.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> on formalisera tout ça avec les structures HH/HL/LH/LL au Module 4. C'est LA compétence centrale.</div>`
        },
        {
          title: "Ranges",
          minutes: 8,
          html: `
<p>Un <strong>range</strong> (ou trading range) est une phase où le prix évolue entre un plafond (résistance) et un plancher (support) sans direction nette.</p>
<h3>Comment trader un range ?</h3>
<ul>
  <li>Acheter près du bas, vendre près du haut (range trading).</li>
  <li>OU attendre la <strong>cassure</strong> (breakout) pour suivre la nouvelle direction.</li>
</ul>
<div class="callout callout-warn"><strong>Piège :</strong> au milieu d'un range, il n'y a pas de trade évident. Le « no man's land » est l'endroit où l'on perd de l'argent par impatience.</div>`
        },
        {
          title: "Consolidations",
          minutes: 7,
          html: `
<p>Une <strong>consolidation</strong> est une pause dans une tendance : le marché « digère » son mouvement avant de repartir (souvent dans le même sens).</p>
<h3>Range vs Consolidation</h3>
<ul>
  <li><strong>Range</strong> : absence de tendance globale.</li>
  <li><strong>Consolidation</strong> : pause à l'intérieur d'une tendance existante.</li>
</ul>
<p>Reconnaître une consolidation permet de se préparer à la reprise de tendance plutôt que de parier contre elle.</p>`
        },
        {
          title: "Exercices pratiques",
          minutes: 15,
          type: "exercise",
          html: `
<p>Mettez en pratique sur TradingView avec des données réelles.</p>
<div class="callout callout-exercise">
<strong>Exercice 1 — Anatomie</strong><br>
Ouvrez EUR/USD en H1. Identifiez 3 bougies à longue mèche et expliquez quel niveau a été rejeté.
</div>
<div class="callout callout-exercise">
<strong>Exercice 2 — Niveaux</strong><br>
Tracez 2 supports et 2 résistances majeurs en H4. Vérifiez la polarité : un ancien support est-il devenu résistance ?
</div>
<div class="callout callout-exercise">
<strong>Exercice 3 — Classification</strong><br>
Sur 5 actifs, dites pour chacun : tendance haussière, baissière ou range ? Justifiez en une phrase.
</div>
<p class="muted">Notez vos réponses dans votre journal. On y reviendra au Module 13.</p>`
        }
      ]
    },

    /* ===================== MODULE 4 ===================== */
    {
      number: 4,
      title: "Structure de marché",
      icon: "🧱",
      summary: "Lire la structure : HH/HL/LH/LL, BOS, CHoCH et cartographie du marché.",
      lessons: [
        {
          title: "HH - HL - LH - LL",
          minutes: 12,
          html: `
<p>La structure de marché se lit avec quatre points fondamentaux. C'est l'alphabet du trader.</p>
<table class="tbl">
  <thead><tr><th>Sigle</th><th>Signification</th><th>Indique</th></tr></thead>
  <tbody>
    <tr><td><strong>HH</strong></td><td>Higher High (sommet plus haut)</td><td>Force haussière</td></tr>
    <tr><td><strong>HL</strong></td><td>Higher Low (creux plus haut)</td><td>Tendance haussière saine</td></tr>
    <tr><td><strong>LH</strong></td><td>Lower High (sommet plus bas)</td><td>Force baissière</td></tr>
    <tr><td><strong>LL</strong></td><td>Lower Low (creux plus bas)</td><td>Tendance baissière saine</td></tr>
  </tbody>
</table>
<h3>Lecture</h3>
<ul>
  <li>Tendance <strong>haussière</strong> = succession de <strong>HH + HL</strong>.</li>
  <li>Tendance <strong>baissière</strong> = succession de <strong>LH + LL</strong>.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> tant que la séquence se maintient, la tendance est intacte. Une rupture de cette séquence annonce un changement (BOS / CHoCH).</div>`
        },
        {
          title: "Break Of Structure (BOS)",
          minutes: 10,
          html: `
<p>Un <strong>Break Of Structure (BOS)</strong> est la cassure d'un point structurel <em>dans le sens de la tendance</em>. Il confirme la continuation.</p>
<h3>Exemple haussier</h3>
<p>Le prix forme un HH, recule en faisant un HL, puis <strong>casse le précédent HH</strong> → BOS haussier = la tendance continue.</p>
<h3>Validation</h3>
<p>On privilégie une <strong>clôture</strong> de bougie au-delà du niveau (pas une simple mèche), pour éviter les fausses cassures.</p>
<div class="callout callout-key"><strong>À retenir :</strong> BOS = continuation. Il valide que le « courant » va toujours dans la même direction.</div>`
        },
        {
          title: "Change Of Character (CHoCH)",
          minutes: 11,
          html: `
<p>Le <strong>Change Of Character (CHoCH)</strong> est le premier signal d'un <em>retournement</em> potentiel. C'est la rupture de la structure <strong>contre</strong> la tendance en cours.</p>
<h3>Exemple</h3>
<p>En tendance haussière (HH/HL), le prix échoue à faire un nouveau HH et <strong>casse le dernier HL</strong> → CHoCH baissier. La dynamique haussière est remise en question.</p>
<h3>BOS vs CHoCH</h3>
<table class="tbl">
  <thead><tr><th></th><th>Sens</th><th>Signifie</th></tr></thead>
  <tbody>
    <tr><td><strong>BOS</strong></td><td>Avec la tendance</td><td>Continuation</td></tr>
    <tr><td><strong>CHoCH</strong></td><td>Contre la tendance</td><td>Retournement possible</td></tr>
  </tbody>
</table>
<div class="callout callout-warn"><strong>Attention :</strong> un CHoCH n'est pas une garantie de retournement, c'est un <em>avertissement</em>. On attend confirmation avant d'agir.</div>`
        },
        {
          title: "Identification de tendance",
          minutes: 9,
          html: `
<p>Mettez tout ensemble : pour identifier une tendance, lisez la séquence des points structurels sur l'unité de temps qui vous intéresse.</p>
<h3>Méthode en 3 étapes</h3>
<ol>
  <li>Repérez les sommets et creux majeurs (ignorez le bruit).</li>
  <li>Étiquetez-les : HH, HL, LH, LL.</li>
  <li>Concluez : haussière, baissière, ou en transition (CHoCH récent) ?</li>
</ol>
<div class="callout callout-tip"><strong>Conseil :</strong> la tendance dépend de l'UT. On peut être baissier en M15 et haussier en Daily. Précisez toujours « sur quelle unité de temps ».</div>`
        },
        {
          title: "Cartographie du marché",
          minutes: 10,
          html: `
<p>La <strong>cartographie</strong> (market mapping) consiste à annoter votre graphique pour avoir une vue d'ensemble claire avant de trader.</p>
<h3>Ce qu'on annote</h3>
<ul>
  <li>Les points structurels (HH/HL/LH/LL).</li>
  <li>Les derniers BOS et CHoCH.</li>
  <li>Les supports/résistances majeurs.</li>
  <li>Les zones de liquidité (Module 5) et institutionnelles (Module 6).</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> un graphique bien cartographié vous dit où le prix « veut » aller. Vous ne devinez plus, vous suivez un plan.</div>`
        },
        {
          title: "Exercices guidés",
          minutes: 15,
          type: "exercise",
          html: `
<div class="callout callout-exercise">
<strong>Exercice 1 — Étiquetage</strong><br>
Sur GBP/USD en H4, étiquetez les 6 derniers points structurels (HH/HL/LH/LL).
</div>
<div class="callout callout-exercise">
<strong>Exercice 2 — BOS / CHoCH</strong><br>
Repérez le dernier BOS et le dernier CHoCH. Lequel est arrivé en premier ? Que vous dit-il sur la tendance actuelle ?
</div>
<div class="callout callout-exercise">
<strong>Exercice 3 — Conclusion</strong><br>
En une phrase : quelle est la tendance dominante en H4 ? Et en M15 ?
</div>`
        },
        {
          title: "Études de cas",
          minutes: 14,
          type: "exercise",
          html: `
<p>Analysez des situations réelles (utilisez le mode <em>Replay</em> de TradingView).</p>
<div class="callout callout-exercise">
<strong>Cas A — Continuation</strong><br>
Trouvez une tendance haussière qui enchaîne 3 BOS. Auriez-vous pu rentrer sur chaque HL ? À quel risque/rendement ?
</div>
<div class="callout callout-exercise">
<strong>Cas B — Retournement</strong><br>
Trouvez un CHoCH suivi d'un vrai retournement. Repérez le moment précis où la structure a basculé.
</div>
<div class="callout callout-exercise">
<strong>Cas C — Piège</strong><br>
Trouvez un CHoCH qui n'a PAS mené à un retournement (faux signal). Qu'est-ce qui manquait comme confirmation ?
</div>`
        }
      ]
    },

    /* ===================== MODULE 5 ===================== */
    {
      number: 5,
      title: "Comprendre la liquidité",
      icon: "💧",
      summary: "Le carburant du marché : stops, stop hunt, equal highs/lows et pools de liquidité.",
      lessons: [
        {
          title: "Qu'est-ce que la liquidité ?",
          minutes: 11,
          html: `
<p>La <strong>liquidité</strong>, c'est la présence d'ordres en attente sur le marché. Sans contrepartie, aucune transaction n'est possible. Les gros acteurs ont besoin de liquidité pour remplir leurs positions massives.</p>
<h3>Pourquoi c'est crucial</h3>
<p>Une institution qui veut acheter 10 000 lots a besoin de 10 000 lots de vendeurs en face. Elle va donc « chercher » la liquidité là où elle s'accumule : sous les supports, au-dessus des résistances, autour des stops des particuliers.</p>
<div class="callout callout-key"><strong>Changement de paradigme :</strong> le marché ne monte/baisse pas « par hasard ». Il se dirige souvent vers les zones de liquidité pour permettre aux gros de se positionner.</div>`
        },
        {
          title: "Pourquoi les stops attirent le marché",
          minutes: 10,
          html: `
<p>Vos ordres <strong>stop-loss</strong> sont des ordres en attente. Quand ils se déclenchent, ils deviennent des ordres marché — donc de la <strong>liquidité</strong> pour quelqu'un d'autre.</p>
<h3>La logique</h3>
<ul>
  <li>Les acheteurs placent leur stop <strong>sous</strong> un support.</li>
  <li>Les vendeurs placent leur stop <strong>au-dessus</strong> d'une résistance.</li>
  <li>Ces zones deviennent des « réservoirs » d'ordres opposés.</li>
</ul>
<p>Quand le prix « pique » sous un support évident, il déclenche une vague de ventes (stops des acheteurs) que les institutions absorbent pour… acheter.</p>
<div class="callout callout-warn"><strong>Conséquence pratique :</strong> ne placez jamais votre stop à l'endroit « évident » où tout le monde le met.</div>`
        },
        {
          title: "Stop Hunt",
          minutes: 10,
          html: `
<p>Le <strong>stop hunt</strong> (chasse aux stops) est un mouvement rapide qui va déclencher les stops d'un côté avant de repartir dans l'autre sens. C'est l'une des manœuvres les plus frustrantes pour le débutant… et les plus exploitables une fois comprise.</p>
<h3>Schéma typique</h3>
<ol>
  <li>Le prix s'approche d'un niveau évident (support, plus-bas récent).</li>
  <li>Il le casse brièvement (mèche) → déclenche les stops.</li>
  <li>Il repart violemment dans l'autre sens.</li>
</ol>
<div class="callout callout-key"><strong>À retenir :</strong> au lieu de subir le stop hunt, on apprend à l'<em>anticiper</em> : on attend que la liquidité soit prise, puis on entre dans le sens du vrai mouvement.</div>`
        },
        {
          title: "Equal Highs",
          minutes: 8,
          html: `
<p>Des <strong>Equal Highs</strong> (sommets égaux) sont deux ou plusieurs sommets au même niveau. Ils signalent une accumulation de liquidité <strong>au-dessus</strong> (stops des vendeurs + ordres d'achat breakout).</p>
<h3>Lecture</h3>
<p>Le marché « voit » cette cible évidente. Il y a de fortes chances qu'il vienne <strong>balayer</strong> ces sommets pour récupérer la liquidité avant de potentiellement retourner.</p>
<div class="callout callout-tip"><strong>Conseil :</strong> les equal highs sont souvent des <em>aimants</em> à prix. On les marque comme objectifs probables.</div>`
        },
        {
          title: "Equal Lows",
          minutes: 8,
          html: `
<p>Des <strong>Equal Lows</strong> (creux égaux) sont l'inverse : plusieurs creux au même niveau, avec une accumulation de liquidité <strong>en dessous</strong> (stops des acheteurs).</p>
<h3>Lecture</h3>
<p>Le marché a tendance à venir « ramasser » ces creux égaux. Une cassure suivie d'un retour rapide au-dessus = signal de retournement haussier potentiel (la liquidité a été prise).</p>
<div class="callout callout-key"><strong>À retenir :</strong> equal highs/lows = liquidité « facile » que le marché ira souvent chercher. Pensez-y comme des cibles.</div>`
        },
        {
          title: "Pools de liquidité",
          minutes: 10,
          html: `
<p>Un <strong>pool de liquidité</strong> (liquidity pool) est une zone où de nombreux ordres s'accumulent : equal highs/lows, plus-hauts/plus-bas de session, niveaux ronds (1.1000, 2000$ sur l'or…).</p>
<h3>Types de pools</h3>
<ul>
  <li><strong>Buy-side liquidity</strong> : au-dessus des sommets (stops des shorts).</li>
  <li><strong>Sell-side liquidity</strong> : sous les creux (stops des longs).</li>
</ul>
<h3>Comment l'utiliser</h3>
<p>On lit le marché comme une succession : <em>prise de liquidité</em> → <em>déséquilibre</em> → <em>mouvement vers le pool suivant</em>. On entre après la prise de liquidité, pas avant.</p>`
        },
        {
          title: "Exercices pratiques",
          minutes: 15,
          type: "exercise",
          html: `
<div class="callout callout-exercise">
<strong>Exercice 1 — Repérage</strong><br>
Sur XAU/USD en M15, trouvez 2 zones d'equal highs et 2 zones d'equal lows. Marquez-les.
</div>
<div class="callout callout-exercise">
<strong>Exercice 2 — Stop hunt</strong><br>
Trouvez un exemple clair de stop hunt (mèche qui balaye un niveau puis retournement). Mesurez l'ampleur du retournement.
</div>
<div class="callout callout-exercise">
<strong>Exercice 3 — Anticipation</strong><br>
Sur un graphique actuel, où est le prochain pool de liquidité que le marché pourrait viser ? Au-dessus ou en dessous ?
</div>`
        }
      ]
    },

    /* ===================== MODULE 6 ===================== */
    {
      number: 6,
      title: "Zones institutionnelles",
      icon: "🏦",
      summary: "Order Blocks, FVG, imbalances, premium/discount et confluence.",
      lessons: [
        {
          title: "Offre et demande",
          minutes: 10,
          html: `
<p>Les <strong>zones d'offre et de demande</strong> (supply &amp; demand) sont des zones d'où sont partis des mouvements puissants — preuve qu'un gros acteur y a passé des ordres.</p>
<ul>
  <li><strong>Demande</strong> : zone d'achat institutionnel → le prix y rebondit à la hausse.</li>
  <li><strong>Offre</strong> : zone de vente institutionnel → le prix y est repoussé à la baisse.</li>
</ul>
<h3>Repérer une zone valable</h3>
<p>Cherchez un départ <strong>explosif</strong> (déséquilibre net) après une base de consolidation. Plus le départ est franc, plus la zone est « fraîche » et fiable.</p>
<div class="callout callout-key"><strong>À retenir :</strong> une zone n'est valable que tant qu'elle n'a pas été retestée puis cassée. Une zone « fraîche » (non retestée) est la plus puissante.</div>`
        },
        {
          title: "Order Blocks",
          minutes: 12,
          html: `
<p>Un <strong>Order Block (OB)</strong> est la dernière bougie opposée avant un mouvement impulsif. C'est l'empreinte des ordres institutionnels.</p>
<h3>Order Block haussier</h3>
<p>La dernière bougie <strong>baissière</strong> avant une forte hausse. Quand le prix y revient, il a tendance à rebondir (les institutions complètent leurs achats).</p>
<h3>Order Block baissier</h3>
<p>La dernière bougie <strong>haussière</strong> avant une forte baisse.</p>
<h3>Critères de qualité</h3>
<ul>
  <li>Provoque un <strong>BOS</strong> (casse la structure) → OB validé.</li>
  <li>Crée un <strong>déséquilibre</strong> / FVG juste après.</li>
  <li>Idéalement, prend de la liquidité avant de partir.</li>
</ul>
<div class="callout callout-tip"><strong>Conseil :</strong> un OB + une prise de liquidité + un FVG = configuration de très haute probabilité.</div>`
        },
        {
          title: "Fair Value Gap (FVG)",
          minutes: 11,
          html: `
<p>Un <strong>Fair Value Gap (FVG)</strong> est un déséquilibre de prix : une zone laissée « vide » par un mouvement trop rapide pour que toutes les transactions s'y fassent.</p>
<h3>Comment l'identifier</h3>
<p>On regarde 3 bougies consécutives. S'il existe un <strong>espace</strong> entre la mèche de la 1ʳᵉ et la mèche de la 3ᵉ (la bougie du milieu étant impulsive), il y a un FVG.</p>
<h3>Pourquoi ça compte</h3>
<p>Le marché a tendance à <strong>revenir combler</strong> (rebalance) ce gap avant de continuer. Un FVG devient donc une zone d'entrée potentielle.</p>
<div class="callout callout-key"><strong>À retenir :</strong> FVG = zone d'inefficacité que le prix vient souvent « réparer ». On l'utilise comme point d'entrée dans le sens de la tendance.</div>`
        },
        {
          title: "Imbalances",
          minutes: 8,
          html: `
<p>Une <strong>imbalance</strong> (déséquilibre) est le terme général pour une zone où l'achat ou la vente a largement dominé, créant un mouvement à sens unique. Le FVG en est la forme la plus repérable.</p>
<h3>Lecture</h3>
<ul>
  <li>Imbalance haussière → pression acheteuse massive → le prix peut revenir la tester par le bas.</li>
  <li>Imbalance baissière → pression vendeuse massive → retest possible par le haut.</li>
</ul>
<p>Le marché « aime » l'équilibre : il revient souvent rééquilibrer ces zones avant de poursuivre.</p>`
        },
        {
          title: "Premium & Discount",
          minutes: 10,
          html: `
<p>Les notions de <strong>premium</strong> et <strong>discount</strong> appliquent une logique simple : acheter « en solde », vendre « cher ».</p>
<h3>La méthode (Fibonacci 50%)</h3>
<p>Sur une jambe de prix (d'un creux à un sommet), tracez le 50 %. Il divise la zone en deux :</p>
<ul>
  <li><strong>Discount</strong> (sous 50 %) : zone « pas chère » → on cherche à <strong>acheter</strong>.</li>
  <li><strong>Premium</strong> (au-dessus 50 %) : zone « chère » → on cherche à <strong>vendre</strong>.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> en tendance haussière, on attend que le prix revienne en <em>discount</em> pour acheter. On ne court jamais après le prix en premium.</div>`
        },
        {
          title: "Confluence",
          minutes: 9,
          html: `
<p>La <strong>confluence</strong> est l'alignement de plusieurs facteurs au même endroit. Plus il y a de confluences, plus la probabilité est élevée.</p>
<h3>Exemple de confluence forte</h3>
<ul>
  <li>Order Block haussier…</li>
  <li>…situé en zone de <strong>discount</strong>…</li>
  <li>…avec un <strong>FVG</strong> non comblé…</li>
  <li>…juste après une <strong>prise de liquidité</strong> (equal lows balayés)…</li>
  <li>…dans le sens de la tendance Daily.</li>
</ul>
<div class="callout callout-warn"><strong>Attention :</strong> ne forcez jamais la confluence. Si vous devez « tordre » votre analyse pour justifier un trade, c'est qu'il n'y est pas.</div>`
        },
        {
          title: "Exercices",
          minutes: 15,
          type: "exercise",
          html: `
<div class="callout callout-exercise">
<strong>Exercice 1 — Order Block</strong><br>
Trouvez un OB haussier qui a provoqué un BOS. Le prix est-il revenu le tester ? Qu'a-t-il fait ?
</div>
<div class="callout callout-exercise">
<strong>Exercice 2 — FVG</strong><br>
Identifiez 3 FVG sur EUR/USD en M15. Combien ont été comblés ensuite ?
</div>
<div class="callout callout-exercise">
<strong>Exercice 3 — Premium/Discount</strong><br>
Sur une tendance haussière, tracez le 50 %. Les meilleurs points d'achat étaient-ils en discount ?
</div>
<div class="callout callout-exercise">
<strong>Exercice 4 — Confluence</strong><br>
Trouvez UNE configuration cumulant au moins 3 confluences. Décrivez-les.
</div>`
        }
      ]
    },

    /* ===================== MODULE 7 ===================== */
    {
      number: 7,
      title: "Analyse multi-timeframe",
      icon: "🔭",
      summary: "Top-down du Weekly au M5 pour construire un plan cohérent.",
      lessons: [
        {
          title: "Top Down Analysis",
          minutes: 11,
          html: `
<p>La <strong>Top Down Analysis</strong> consiste à analyser du plus grand au plus petit timeframe pour que vos trades soient alignés avec le contexte global.</p>
<h3>Le principe</h3>
<ul>
  <li><strong>Hautes UT</strong> → définissent le <em>biais</em> directionnel (où va le marché).</li>
  <li><strong>UT intermédiaires</strong> → repèrent les <em>zones</em> d'intérêt.</li>
  <li><strong>Basses UT</strong> → donnent l'<em>entrée</em> précise (timing).</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> ne jamais trader une basse UT contre la haute UT. Le « gros poisson » mange toujours le petit.</div>`
        },
        {
          title: "Weekly",
          minutes: 7,
          html: `
<p>Le <strong>Weekly</strong> (1 bougie = 1 semaine) donne la photo macro. C'est le point de départ de l'analyse.</p>
<h3>Ce qu'on y cherche</h3>
<ul>
  <li>La tendance de fond (sur plusieurs mois).</li>
  <li>Les niveaux majeurs et les pools de liquidité historiques.</li>
  <li>Le biais directionnel général : haussier, baissier ou range.</li>
</ul>`
        },
        {
          title: "Daily",
          minutes: 8,
          html: `
<p>Le <strong>Daily</strong> affine le biais du Weekly. C'est souvent l'unité de référence du swing trader.</p>
<h3>Ce qu'on y cherche</h3>
<ul>
  <li>Confirme ou nuance la tendance Weekly.</li>
  <li>Repère les zones institutionnelles majeures (OB, FVG Daily).</li>
  <li>Identifie la prochaine cible de liquidité.</li>
</ul>`
        },
        {
          title: "H4",
          minutes: 8,
          html: `
<p>Le <strong>H4</strong> est l'unité « pont » entre le contexte et l'exécution. Beaucoup de traders y construisent leur scénario principal.</p>
<h3>Ce qu'on y cherche</h3>
<ul>
  <li>La structure intermédiaire (BOS/CHoCH récents).</li>
  <li>Les zones d'entrée potentielles dans le sens du Daily.</li>
  <li>Le niveau 50 % (premium/discount) du dernier mouvement.</li>
</ul>`
        },
        {
          title: "H1",
          minutes: 7,
          html: `
<p>Le <strong>H1</strong> précise le scénario H4 et prépare l'entrée. On commence à voir le détail des réactions sur les zones.</p>
<h3>Ce qu'on y cherche</h3>
<ul>
  <li>Confirmation de la réaction sur la zone H4.</li>
  <li>Un premier CHoCH allant dans le sens souhaité.</li>
</ul>`
        },
        {
          title: "M15",
          minutes: 8,
          html: `
<p>Le <strong>M15</strong> est une unité d'entrée très populaire en day trading. Bon compromis entre précision et lisibilité.</p>
<h3>Ce qu'on y cherche</h3>
<ul>
  <li>Le CHoCH de confirmation sur la zone.</li>
  <li>Un OB / FVG M15 pour affiner l'entrée et le stop.</li>
</ul>`
        },
        {
          title: "M5",
          minutes: 7,
          html: `
<p>Le <strong>M5</strong> sert au timing fin et au scalping. À utiliser uniquement quand les UT supérieures sont alignées.</p>
<div class="callout callout-warn"><strong>Attention :</strong> plus on descend en UT, plus il y a de « bruit ». Ne descendez en M5 que pour exécuter un plan déjà validé en haut.</div>`
        },
        {
          title: "Construction d'un plan complet",
          minutes: 14,
          type: "exercise",
          html: `
<p>Assemblez tout dans un plan top-down structuré.</p>
<h3>Modèle de plan</h3>
<ol>
  <li><strong>Weekly</strong> : biais = ?</li>
  <li><strong>Daily</strong> : confirme ? zone majeure = ?</li>
  <li><strong>H4</strong> : structure + zone d'entrée = ?</li>
  <li><strong>H1/M15</strong> : confirmation attendue (CHoCH) = ?</li>
  <li><strong>Entrée</strong> : prix, <strong>Stop</strong> : prix, <strong>TP</strong> : prix (prochain pool de liquidité).</li>
  <li><strong>R:R</strong> = ?</li>
</ol>
<div class="callout callout-exercise">
<strong>Exercice :</strong> rédigez un plan complet sur l'actif de votre choix en suivant ce modèle. Gardez-le pour le comparer au résultat réel.
</div>`
        }
      ]
    },

    /* ===================== MODULE 8 ===================== */
    {
      number: 8,
      title: "Sessions de marché",
      icon: "🕐",
      summary: "Asie, Londres, New York, kill zones et horaires à éviter.",
      lessons: [
        {
          title: "Session Asiatique",
          minutes: 8,
          html: `
<p>La <strong>session asiatique</strong> (Tokyo) est généralement la plus calme. Le prix construit souvent un range qui servira de référence pour les sessions suivantes.</p>
<h3>Caractéristiques</h3>
<ul>
  <li>Faible volatilité, ranges serrés.</li>
  <li>Le « Asian range » est souvent balayé plus tard (prise de liquidité).</li>
  <li>Bon moment pour <strong>préparer</strong> son plan, moins pour trader agressivement.</li>
</ul>`
        },
        {
          title: "Session Londres",
          minutes: 9,
          html: `
<p>La <strong>session de Londres</strong> ouvre le bal de la vraie volatilité. C'est l'une des plus actives, surtout sur l'EUR, la GBP et l'or.</p>
<h3>Caractéristiques</h3>
<ul>
  <li>Souvent un mouvement initial qui balaye le range asiatique.</li>
  <li>Tendance directionnelle marquée sur la matinée.</li>
  <li>Très observée par les traders SMC.</li>
</ul>`
        },
        {
          title: "Session New York",
          minutes: 9,
          html: `
<p>La <strong>session de New York</strong> apporte le volume américain. Le <em>chevauchement</em> Londres–New York (l'après-midi européen) est la fenêtre la plus volatile de la journée.</p>
<h3>Caractéristiques</h3>
<ul>
  <li>Forte volatilité, surtout sur indices US (NASDAQ, S&amp;P) et l'or.</li>
  <li>La plupart des annonces US sortent en début de session.</li>
  <li>Reversals fréquents après le mouvement de Londres.</li>
</ul>`
        },
        {
          title: "London Kill Zone",
          minutes: 8,
          html: `
<p>La <strong>London Kill Zone</strong> est la fenêtre la plus propice aux setups de qualité en session de Londres (généralement ~7h–10h, heure de Londres — adaptez à votre fuseau).</p>
<div class="callout callout-key"><strong>À retenir :</strong> les « kill zones » sont des plages horaires où la liquidité et les mouvements institutionnels sont les plus probables. On y concentre son attention.</div>`
        },
        {
          title: "New York Kill Zone",
          minutes: 8,
          html: `
<p>La <strong>New York Kill Zone</strong> couvre l'ouverture US (généralement ~8h–11h heure de New York). Fenêtre clé pour les indices et l'or.</p>
<h3>Pourquoi c'est puissant</h3>
<ul>
  <li>Arrivée du volume institutionnel américain.</li>
  <li>Reversals fréquents (« NY reversal ») après le faux mouvement du matin.</li>
</ul>`
        },
        {
          title: "Horaires à éviter",
          minutes: 7,
          html: `
<p>Tous les moments ne se valent pas. Certains horaires détruisent les comptes.</p>
<ul>
  <li><strong>Juste avant/pendant une annonce majeure</strong> (NFP, CPI, FOMC).</li>
  <li><strong>Fin de session NY / nuit</strong> : faible liquidité, mouvements erratiques.</li>
  <li><strong>Vendredi après-midi</strong> : clôtures de positions, comportement imprévisible.</li>
  <li><strong>Ouverture du dimanche soir</strong> : gaps et spreads élargis.</li>
</ul>
<div class="callout callout-tip"><strong>Conseil :</strong> mieux vaut 2 bonnes fenêtres par jour que 12h d'écran. La qualité prime sur la quantité.</div>`
        },
        {
          title: "Exercices en replay",
          minutes: 14,
          type: "exercise",
          html: `
<div class="callout callout-exercise">
<strong>Exercice 1 — Asian range</strong><br>
En replay, marquez le range asiatique. A-t-il été balayé pendant Londres ? Dans quel sens ?
</div>
<div class="callout callout-exercise">
<strong>Exercice 2 — Kill zone</strong><br>
Trouvez un setup propre survenu pendant la London Kill Zone. Notez l'heure exacte.
</div>
<div class="callout callout-exercise">
<strong>Exercice 3 — NY reversal</strong><br>
Repérez une journée où NY a inversé le mouvement de Londres. Comment l'auriez-vous tradée ?
</div>`
        }
      ]
    },

    /* ===================== MODULE 9 ===================== */
    {
      number: 9,
      title: "Analyse fondamentale du trader",
      icon: "📰",
      summary: "Calendrier, CPI, NFP, taux, FOMC et impact des annonces.",
      lessons: [
        {
          title: "Calendrier économique",
          minutes: 8,
          html: `
<p>Même un trader 100 % technique doit surveiller le <strong>calendrier économique</strong> — non pas pour prédire, mais pour <strong>éviter</strong> les pièges.</p>
<h3>Routine quotidienne</h3>
<ol>
  <li>Chaque matin, repérez les annonces à fort impact du jour.</li>
  <li>Notez l'heure dans votre fuseau.</li>
  <li>Décidez à l'avance : je ne trade pas dans les X minutes autour.</li>
</ol>`
        },
        {
          title: "CPI (inflation)",
          minutes: 9,
          html: `
<p>Le <strong>CPI</strong> (Consumer Price Index) mesure l'inflation. C'est l'une des annonces les plus impactantes pour le dollar, l'or et les indices.</p>
<h3>Lecture</h3>
<ul>
  <li>CPI <strong>plus haut</strong> que prévu → inflation persistante → banques centrales plus « hawkish » → souvent dollar fort, indices/or sous pression.</li>
  <li>CPI <strong>plus bas</strong> → espoir de baisse de taux → souvent indices/or en hausse.</li>
</ul>
<div class="callout callout-warn"><strong>Volatilité extrême :</strong> le CPI provoque des bougies énormes en quelques secondes. Restez à l'écart au moment de la sortie.</div>`
        },
        {
          title: "NFP (emploi US)",
          minutes: 9,
          html: `
<p>Le <strong>NFP</strong> (Non-Farm Payrolls) mesure les créations d'emplois non agricoles aux US. Publié le premier vendredi du mois.</p>
<h3>Pourquoi c'est suivi</h3>
<p>L'emploi est un pilier de la politique de la Fed. Un marché de l'emploi fort peut justifier des taux élevés.</p>
<div class="callout callout-warn"><strong>Règle :</strong> le NFP est notoirement piégeux — faux mouvements dans les deux sens. La plupart des pros ne tradent que <em>après</em> la poussière retombée.</div>`
        },
        {
          title: "Décisions de taux",
          minutes: 9,
          html: `
<p>Les <strong>décisions de taux d'intérêt</strong> des banques centrales (Fed, BCE, BoE…) sont parmi les événements les plus puissants du marché.</p>
<h3>Logique de base</h3>
<ul>
  <li><strong>Hausse de taux</strong> → devise généralement renforcée.</li>
  <li><strong>Baisse de taux</strong> → devise généralement affaiblie.</li>
</ul>
<p>Mais c'est surtout le <strong>ton</strong> du communiqué et les attentes <em>déjà intégrées</em> qui font le mouvement, pas seulement le chiffre.</p>`
        },
        {
          title: "FOMC",
          minutes: 9,
          html: `
<p>Le <strong>FOMC</strong> (Federal Open Market Committee) est la réunion de la Fed qui fixe la politique monétaire US. La conférence de presse qui suit peut renverser le marché en direct.</p>
<h3>Structure</h3>
<ul>
  <li>Décision de taux (le chiffre).</li>
  <li>Communiqué (le ton).</li>
  <li>Conférence de presse (questions/réponses → volatilité prolongée).</li>
</ul>
<div class="callout callout-warn"><strong>Jour FOMC :</strong> souvent journée à éviter en intraday classique. Attendez la clôture de la séance pour réévaluer la structure.</div>`
        },
        {
          title: "Impact des annonces",
          minutes: 8,
          html: `
<p>Une annonce ne bouge pas le marché par son chiffre absolu, mais par l'<strong>écart avec les attentes</strong> (surprise).</p>
<h3>Trois scénarios</h3>
<ul>
  <li><strong>Conforme aux attentes</strong> → réaction limitée (déjà « pricé »).</li>
  <li><strong>Surprise positive/négative</strong> → mouvement violent.</li>
  <li><strong>Contradiction technique/fondamental</strong> → faux mouvements, prudence.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> votre edge est technique. Le fondamental sert surtout à savoir <em>quand ne pas être exposé</em>.</div>`
        },
        {
          title: "Quand ne pas trader",
          minutes: 7,
          html: `
<p>Savoir <strong>ne pas trader</strong> est une compétence à part entière.</p>
<ul>
  <li>Pendant les annonces à fort impact.</li>
  <li>Quand le marché est en plein « no man's land » (milieu de range).</li>
  <li>Quand vous êtes fatigué, énervé ou en tilt après une perte.</li>
  <li>Quand votre plan n'a pas de setup clair : <strong>pas de setup, pas de trade.</strong></li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> le cash est une position. Ne rien faire est souvent la meilleure décision de la journée.</div>`
        }
      ]
    },

    /* ===================== MODULE 10 ===================== */
    {
      number: 10,
      title: "Gestion du risque",
      icon: "🛡️",
      summary: "Le module le plus important : sizing, drawdown, R:R et espérance.",
      lessons: [
        {
          title: "Pourquoi les traders perdent",
          minutes: 9,
          html: `
<p>La cause n°1 des comptes brûlés n'est pas une mauvaise analyse — c'est une <strong>mauvaise gestion du risque</strong>.</p>
<h3>Le calcul fatal</h3>
<p>Si vous perdez 50 % de votre compte, il faut faire <strong>+100 %</strong> pour revenir à l'équilibre. La perte est mathématiquement plus dure à rattraper qu'on ne le croit.</p>
<table class="tbl">
  <thead><tr><th>Perte</th><th>Gain nécessaire pour récupérer</th></tr></thead>
  <tbody>
    <tr><td>-10 %</td><td>+11 %</td></tr>
    <tr><td>-25 %</td><td>+33 %</td></tr>
    <tr><td>-50 %</td><td>+100 %</td></tr>
    <tr><td>-90 %</td><td>+900 %</td></tr>
  </tbody>
</table>
<div class="callout callout-key"><strong>À retenir :</strong> protégez le capital d'abord. Les gains viennent ensuite.</div>`
        },
        {
          title: "Risque fixe",
          minutes: 8,
          html: `
<p>Le <strong>risque fixe</strong> consiste à risquer le même pourcentage du capital à chaque trade (souvent <strong>1 %</strong>, parfois 0,5 % ou 2 % max).</p>
<h3>Avantages</h3>
<ul>
  <li>Simple, prévisible, émotionnellement stable.</li>
  <li>Protège contre les séries de pertes.</li>
</ul>
<p>Avec 1 % de risque, il faudrait <strong>100 trades perdants d'affilée</strong> pour ruiner le compte — statistiquement quasi impossible avec une stratégie correcte.</p>`
        },
        {
          title: "Risque variable",
          minutes: 8,
          html: `
<p>Le <strong>risque variable</strong> ajuste la taille du risque selon la confiance dans le setup ou la phase de performance.</p>
<h3>Exemples</h3>
<ul>
  <li>Réduire à 0,5 % après une série de pertes (préserver le mental et le capital).</li>
  <li>Augmenter légèrement (jamais brutalement) sur les setups A+ uniquement.</li>
</ul>
<div class="callout callout-warn"><strong>Attention :</strong> le risque variable est réservé aux traders expérimentés. Débutant = risque fixe, point.</div>`
        },
        {
          title: "Position sizing",
          minutes: 11,
          html: `
<p>Le <strong>position sizing</strong> est le calcul de la taille de lot pour ne risquer QUE le montant prévu. C'est non négociable.</p>
<h3>La formule</h3>
<p class="formula">Taille de position = (Capital × % risque) ÷ (Distance du stop en valeur par unité)</p>
<h3>Exemple concret</h3>
<ul>
  <li>Capital : 10 000 $</li>
  <li>Risque : 1 % = 100 $</li>
  <li>Stop : 50 pips</li>
  <li>→ On choisit la taille de lot telle que 50 pips = 100 $.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> on ajuste TOUJOURS la taille de position en fonction du stop, jamais l'inverse. Le stop dépend de la technique, pas du montant qu'on « veut » risquer.</div>`
        },
        {
          title: "Drawdown",
          minutes: 8,
          html: `
<p>Le <strong>drawdown</strong> est la baisse depuis un sommet de votre courbe de capital. Il mesure les séries de pertes.</p>
<h3>Pourquoi c'est clé</h3>
<ul>
  <li>Toute stratégie connaît des drawdowns — c'est normal.</li>
  <li>Ce qui compte : sa profondeur et votre capacité à la traverser sans paniquer.</li>
</ul>
<div class="callout callout-tip"><strong>Conseil :</strong> fixez-vous une limite (ex. -5 % sur la journée, -10 % sur le mois). Atteinte ? On arrête et on revoit.</div>`
        },
        {
          title: "Ratio risque/rendement (R:R)",
          minutes: 10,
          html: `
<p>Le <strong>ratio risque/rendement</strong> compare ce que vous risquez à ce que vous visez. Un R:R de 1:3 = risquer 1 pour gagner 3.</p>
<h3>La puissance du R:R</h3>
<p>Avec un R:R de 1:3, vous pouvez avoir <strong>raison seulement 1 fois sur 3</strong> et être à l'équilibre. Au-delà, vous êtes profitable même avec un faible taux de réussite.</p>
<table class="tbl">
  <thead><tr><th>R:R</th><th>Win rate pour être rentable</th></tr></thead>
  <tbody>
    <tr><td>1:1</td><td>&gt; 50 %</td></tr>
    <tr><td>1:2</td><td>&gt; 34 %</td></tr>
    <tr><td>1:3</td><td>&gt; 25 %</td></tr>
  </tbody>
</table>
<div class="callout callout-key"><strong>À retenir :</strong> visez un minimum de 1:2. Cela vous donne le droit de vous tromper souvent.</div>`
        },
        {
          title: "Espérance mathématique",
          minutes: 10,
          html: `
<p>L'<strong>espérance mathématique</strong> est le gain moyen attendu par trade. C'est l'indicateur ultime de la viabilité d'une stratégie.</p>
<h3>La formule</h3>
<p class="formula">Espérance = (Win% × Gain moyen) − (Loss% × Perte moyenne)</p>
<h3>Exemple</h3>
<ul>
  <li>Win rate 40 %, R:R 1:3, risque 100 $.</li>
  <li>= (0,40 × 300) − (0,60 × 100) = 120 − 60 = <strong>+60 $ par trade</strong>.</li>
</ul>
<p>Espérance positive = stratégie rentable sur le long terme, malgré les pertes individuelles.</p>
<div class="callout callout-key"><strong>À retenir :</strong> on ne juge JAMAIS une stratégie sur un trade. On la juge sur l'espérance, mesurée sur des dizaines de trades.</div>`
        },
        {
          title: "Gestion du capital",
          minutes: 8,
          html: `
<p>La <strong>gestion du capital</strong> (money management) englobe toutes les règles qui gardent votre compte en vie sur la durée.</p>
<h3>Règles d'or</h3>
<ul>
  <li>Risque ≤ 1 % par trade.</li>
  <li>Risque total simultané ≤ 2–3 % (plusieurs positions).</li>
  <li>Limite de perte journalière (ex. -3 %).</li>
  <li>Ne jamais « ajouter » à une position perdante (moyenner à la baisse).</li>
  <li>Retirer régulièrement une partie des gains.</li>
</ul>`
        },
        {
          title: "Exercices",
          minutes: 14,
          type: "exercise",
          html: `
<div class="callout callout-exercise">
<strong>Exercice 1 — Sizing</strong><br>
Capital 5 000 $, risque 1 %, stop 30 pips sur EUR/USD. Calculez la taille de lot.
</div>
<div class="callout callout-exercise">
<strong>Exercice 2 — Espérance</strong><br>
Win rate 50 %, R:R 1:2, risque 50 $. Quelle est l'espérance par trade ? Sur 100 trades ?
</div>
<div class="callout callout-exercise">
<strong>Exercice 3 — Drawdown</strong><br>
Vous perdez 8 trades d'affilée à 1 % chacun. Quel est votre drawdown approximatif ? Est-ce gérable ?
</div>`
        }
      ]
    },

    /* ===================== MODULE 11 ===================== */
    {
      number: 11,
      title: "Psychologie du trading",
      icon: "🧠",
      summary: "Discipline, patience, FOMO, revenge trading et routine mentale.",
      lessons: [
        {
          title: "Discipline",
          minutes: 8,
          html: `
<p>La <strong>discipline</strong> est l'exécution de votre plan, à chaque fois, même quand l'émotion vous pousse à faire autrement.</p>
<h3>Ce que ça signifie concrètement</h3>
<ul>
  <li>Pas de trade hors setup, même si « ça a l'air bien ».</li>
  <li>Respecter le stop, toujours.</li>
  <li>Suivre les règles de risque sans exception.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> un trader moyen discipliné bat un trader brillant indiscipliné. À tous les coups.</div>`
        },
        {
          title: "Patience",
          minutes: 7,
          html: `
<p>La <strong>patience</strong> est l'art d'attendre LE setup plutôt que de forcer UN trade. Le marché est là tous les jours ; vos opportunités, non.</p>
<div class="callout callout-tip"><strong>Image :</strong> soyez un sniper, pas une mitraillette. Un trade A+ par jour vaut mieux que dix trades médiocres.</div>`
        },
        {
          title: "FOMO",
          minutes: 8,
          html: `
<p>Le <strong>FOMO</strong> (Fear Of Missing Out) est la peur de rater le mouvement. Il pousse à entrer trop tard, au pire moment, sans setup.</p>
<h3>Comment le combattre</h3>
<ul>
  <li>Acceptez qu'il y aura TOUJOURS un autre trade.</li>
  <li>Si vous avez raté l'entrée, vous avez raté le trade. Point.</li>
  <li>Ne courez jamais après le prix en premium.</li>
</ul>`
        },
        {
          title: "Revenge Trading",
          minutes: 8,
          html: `
<p>Le <strong>revenge trading</strong> est la tentative de « se refaire » immédiatement après une perte, par émotion. C'est l'un des destructeurs de comptes les plus rapides.</p>
<h3>Le cercle vicieux</h3>
<p>Perte → frustration → trade impulsif (souvent plus gros) → nouvelle perte → tilt total.</p>
<div class="callout callout-warn"><strong>Règle absolue :</strong> après 2 pertes consécutives, fermez la plateforme pour la journée. Aucune exception.</div>`
        },
        {
          title: "Surconfiance",
          minutes: 7,
          html: `
<p>La <strong>surconfiance</strong> arrive souvent après une série de gains. On augmente la taille, on saute des étapes, on « sait mieux que le marché ».</p>
<div class="callout callout-warn"><strong>Attention :</strong> les plus grosses pertes surviennent souvent juste après les plus belles séries. Restez humble, gardez le même risque.</div>`
        },
        {
          title: "Gestion émotionnelle",
          minutes: 9,
          html: `
<p>La <strong>gestion émotionnelle</strong> consiste à reconnaître vos états (peur, euphorie, frustration) et à ne pas les laisser piloter vos décisions.</p>
<h3>Outils pratiques</h3>
<ul>
  <li>Respiration / pause avant chaque clic.</li>
  <li>Journal émotionnel : noter son état avant/après chaque trade.</li>
  <li>Règle « 1 trade = 1 décision rationnelle », pas une réaction.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> vous ne tradez pas le marché, vous tradez votre psychologie face au marché.</div>`
        },
        {
          title: "Création d'une routine",
          minutes: 9,
          html: `
<p>Une <strong>routine</strong> stable réduit les décisions émotionnelles et professionnalise votre approche.</p>
<h3>Exemple de routine</h3>
<ol>
  <li><strong>Avant marché</strong> : check calendrier, top-down analysis, écriture du plan.</li>
  <li><strong>Pendant</strong> : exécuter UNIQUEMENT les setups du plan, respecter le risque.</li>
  <li><strong>Après marché</strong> : journal (captures, émotions, respect du plan).</li>
  <li><strong>Hebdo</strong> : revue des statistiques et des erreurs.</li>
</ol>`
        }
      ]
    },

    /* ===================== MODULE 12 ===================== */
    {
      number: 12,
      title: "Construire sa stratégie",
      icon: "🎯",
      summary: "Transformer les concepts en règles écrites et reproductibles.",
      lessons: [
        {
          title: "Définir ses règles",
          minutes: 9,
          html: `
<p>Une <strong>stratégie</strong> est un ensemble de règles écrites, claires et reproductibles. Si elle n'est pas écrite, elle n'existe pas.</p>
<h3>Les questions à trancher</h3>
<ul>
  <li>Quels actifs ? Quelles sessions ?</li>
  <li>Quel biais directionnel (comment je le détermine) ?</li>
  <li>Qu'est-ce qui constitue une entrée valide ?</li>
  <li>Où va le stop ? Où va le take profit ?</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> une bonne stratégie tient sur une page et ne laisse aucune place à l'interprétation au moment d'agir.</div>`
        },
        {
          title: "Critères d'entrée",
          minutes: 10,
          html: `
<p>Vos <strong>critères d'entrée</strong> doivent être une checklist binaire (oui/non), pas un « feeling ».</p>
<h3>Exemple de checklist SMC</h3>
<ol>
  <li>Biais Daily clair ? (oui/non)</li>
  <li>Prix dans une zone institutionnelle (OB/FVG) en discount/premium ? (oui/non)</li>
  <li>Liquidité prise avant la zone ? (oui/non)</li>
  <li>CHoCH de confirmation en M15 ? (oui/non)</li>
  <li>R:R ≥ 1:2 atteignable jusqu'au prochain pool ? (oui/non)</li>
</ol>
<div class="callout callout-tip"><strong>Règle :</strong> si UN critère manque, pas de trade. La checklist est votre garde-fou contre l'impulsivité.</div>`
        },
        {
          title: "Critères de sortie",
          minutes: 9,
          html: `
<p>Savoir sortir est aussi important que savoir entrer. Définissez vos sorties <strong>avant</strong> d'entrer.</p>
<h3>Sortie gagnante (Take Profit)</h3>
<ul>
  <li>Prochain pool de liquidité.</li>
  <li>Zone d'offre/demande opposée.</li>
  <li>R:R cible atteint (1:2, 1:3…).</li>
</ul>
<h3>Sortie perdante (Stop Loss)</h3>
<ul>
  <li>Au-delà de l'invalidation structurelle (sous l'OB, sous le dernier creux…).</li>
</ul>`
        },
        {
          title: "Gestion du trade",
          minutes: 10,
          html: `
<p>La <strong>gestion en cours de trade</strong> définit ce que vous faites une fois la position ouverte.</p>
<h3>Options courantes</h3>
<ul>
  <li><strong>Set &amp; forget</strong> : on ne touche à rien, stop et TP fixes. Idéal débutant.</li>
  <li><strong>Break-even</strong> : déplacer le stop à l'entrée une fois un certain profit atteint.</li>
  <li><strong>Trailing stop</strong> : suivre le prix pour sécuriser les gains.</li>
  <li><strong>Prises partielles</strong> : sécuriser une partie, laisser courir le reste.</li>
</ul>
<div class="callout callout-warn"><strong>Attention :</strong> trop gérer = saboter. Au début, privilégiez le set &amp; forget pour mesurer la vraie performance de votre stratégie.</div>`
        },
        {
          title: "Invalidations",
          minutes: 8,
          html: `
<p>Une <strong>invalidation</strong> est le point précis qui prouve que votre idée était fausse. Sans invalidation claire, pas de trade.</p>
<h3>Pourquoi c'est vital</h3>
<ul>
  <li>Elle place logiquement votre stop-loss.</li>
  <li>Elle vous évite de « espérer » contre l'évidence.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> avant chaque trade, demandez-vous : « Qu'est-ce qui me ferait dire que j'ai tort ? » La réponse = votre stop.</div>`
        },
        {
          title: "Création d'un plan de trading",
          minutes: 12,
          type: "exercise",
          html: `
<p>Assemblez tout dans un <strong>plan de trading</strong> écrit, votre document de référence.</p>
<h3>Structure recommandée</h3>
<ol>
  <li><strong>Identité</strong> : style, actifs, sessions.</li>
  <li><strong>Biais</strong> : comment je détermine la direction.</li>
  <li><strong>Checklist d'entrée</strong> (binaire).</li>
  <li><strong>Stop &amp; TP</strong> : règles précises.</li>
  <li><strong>Gestion</strong> : set&amp;forget / BE / partiels.</li>
  <li><strong>Risque</strong> : % par trade, limites journalières.</li>
  <li><strong>Règles psychologiques</strong> : après 2 pertes, j'arrête, etc.</li>
</ol>
<div class="callout callout-exercise">
<strong>Exercice :</strong> rédigez VOTRE plan de trading complet (1 à 2 pages). C'est le livrable le plus important de cette formation.
</div>`
        }
      ]
    },

    /* ===================== MODULE 13 ===================== */
    {
      number: 13,
      title: "Backtesting",
      icon: "🔬",
      summary: "Valider sa stratégie sur le passé avec rigueur et statistiques.",
      lessons: [
        {
          title: "Pourquoi backtester",
          minutes: 8,
          html: `
<p>Le <strong>backtesting</strong> consiste à tester votre stratégie sur des données passées pour vérifier qu'elle a un <em>edge</em> avant de risquer de l'argent.</p>
<h3>Ce que ça vous apporte</h3>
<ul>
  <li>La confiance de savoir que votre stratégie fonctionne statistiquement.</li>
  <li>Des chiffres : win rate, R:R moyen, drawdown max.</li>
  <li>La capacité de tenir vos pertes sans douter à chaque trade.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> sans backtest, vous ne tradez pas une stratégie, vous pariez.</div>`
        },
        {
          title: "Collecte des données",
          minutes: 9,
          html: `
<p>Pour backtester, il faut un environnement de données et une méthode rigoureuse.</p>
<h3>Outils</h3>
<ul>
  <li><strong>TradingView Replay</strong> : rejouer l'historique bougie par bougie.</li>
  <li><strong>MT5 Strategy Tester</strong> : pour les approches automatisables.</li>
  <li><strong>Tableur</strong> : pour consigner chaque trade.</li>
</ul>
<div class="callout callout-warn"><strong>Piège :</strong> évitez le « biais du regard en arrière ». En replay, ne dévoilez jamais les bougies futures avant d'avoir pris votre décision.</div>`
        },
        {
          title: "Journal de trading",
          minutes: 10,
          html: `
<p>Le <strong>journal de trading</strong> est votre outil de progression n°1. Chaque trade y est consigné.</p>
<h3>Colonnes essentielles</h3>
<ul>
  <li>Date, actif, session.</li>
  <li>Sens, entrée, stop, TP.</li>
  <li>R:R prévu et obtenu.</li>
  <li>Setup respecté ? (oui/non)</li>
  <li>Capture d'écran avant/après.</li>
  <li>État émotionnel + commentaire.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> les trades « respectés mais perdants » sont bons. Les trades « gagnants hors plan » sont dangereux : ils renforcent de mauvaises habitudes.</div>`
        },
        {
          title: "Analyse statistique",
          minutes: 10,
          html: `
<p>Une fois 50–100 trades consignés, faites parler les chiffres.</p>
<h3>Métriques clés</h3>
<ul>
  <li><strong>Win rate</strong> : % de trades gagnants.</li>
  <li><strong>R:R moyen</strong>.</li>
  <li><strong>Espérance</strong> par trade.</li>
  <li><strong>Drawdown maximal</strong>.</li>
  <li><strong>Facteur de profit</strong> (gains totaux / pertes totales).</li>
</ul>
<div class="callout callout-tip"><strong>Conseil :</strong> segmentez par actif, par session, par type de setup. Vous découvrirez souvent que 80 % de vos gains viennent de 20 % de vos configurations.</div>`
        },
        {
          title: "Optimisation",
          minutes: 9,
          html: `
<p>L'<strong>optimisation</strong> consiste à améliorer la stratégie à partir des données — sans tomber dans le sur-ajustement.</p>
<h3>Bonnes pratiques</h3>
<ul>
  <li>Couper ce qui ne marche pas (ex. une session peu rentable).</li>
  <li>Renforcer ce qui marche (se concentrer sur les setups A+).</li>
</ul>
<div class="callout callout-warn"><strong>Piège du surajustement :</strong> ne « bricolez » pas vos règles pour qu'elles collent parfaitement au passé. Une stratégie trop optimisée échoue en réel.</div>`
        },
        {
          title: "Validation d'une stratégie",
          minutes: 9,
          html: `
<p>Une stratégie est <strong>validée</strong> quand elle prouve un edge stable sur un échantillon suffisant.</p>
<h3>Critères de validation</h3>
<ul>
  <li>Au moins 100 trades testés.</li>
  <li>Espérance positive et stable.</li>
  <li>Drawdown supportable psychologiquement.</li>
  <li>Résultats cohérents sur différentes périodes de marché.</li>
</ul>
<div class="callout callout-key"><strong>Étape suivante :</strong> forward testing en démo, puis passage progressif au réel (Module 14).</div>`
        }
      ]
    },

    /* ===================== MODULE 14 ===================== */
    {
      number: 14,
      title: "Trading en réel",
      icon: "💸",
      summary: "Le passage en réel : taille de compte, premiers mois, gestion des émotions.",
      lessons: [
        {
          title: "Passage démo → réel",
          minutes: 9,
          html: `
<p>Le passage au réel change une chose : l'<strong>émotion</strong>. La technique est identique, mais l'argent réel réveille la peur et l'avidité.</p>
<h3>Quand franchir le pas ?</h3>
<ul>
  <li>Stratégie backtestée et validée.</li>
  <li>Plusieurs mois de démo rentables et disciplinés.</li>
  <li>Plan de trading écrit et respecté.</li>
</ul>
<div class="callout callout-tip"><strong>Conseil :</strong> commencez TRÈS petit. L'objectif des premiers mois en réel n'est pas de gagner, mais de prouver que vous restez discipliné avec de l'argent réel.</div>`
        },
        {
          title: "Taille de compte",
          minutes: 8,
          html: `
<p>Choisissez une <strong>taille de compte</strong> que vous pouvez vous permettre de perdre intégralement sans impact sur votre vie.</p>
<h3>Règles</h3>
<ul>
  <li>Jamais d'argent emprunté, jamais le loyer.</li>
  <li>Un compte trop petit = stress de « ça ne sert à rien ». Un compte trop gros = stress de la perte. Trouvez l'équilibre.</li>
</ul>
<div class="callout callout-warn"><strong>Important :</strong> un petit compte bien géré qui croît régulièrement vaut mieux qu'un gros compte risqué qui explose.</div>`
        },
        {
          title: "Premier mois",
          minutes: 8,
          html: `
<p>Le <strong>premier mois en réel</strong> est un test psychologique, pas un sprint de profit.</p>
<h3>Objectifs réalistes</h3>
<ul>
  <li>Respecter le plan à 100 %.</li>
  <li>Risque réduit (0,25–0,5 %).</li>
  <li>Tenir son journal religieusement.</li>
  <li>Ne PAS juger la performance sur le P&amp;L mais sur la discipline.</li>
</ul>`
        },
        {
          title: "Gestion des pertes",
          minutes: 9,
          html: `
<p>Les <strong>pertes</strong> font partie du métier. Un trader pro perd régulièrement et reste serein.</p>
<h3>Mentalité à adopter</h3>
<ul>
  <li>Une perte « dans les règles » est un succès d'exécution.</li>
  <li>Le stop est un coût du business, pas un échec.</li>
  <li>Pensez en séries de trades, jamais en trade isolé.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> votre travail n'est pas d'avoir raison, c'est de bien gérer le risque trade après trade.</div>`
        },
        {
          title: "Gestion des gains",
          minutes: 8,
          html: `
<p>Gérer les <strong>gains</strong> est étonnamment difficile : euphorie, surconfiance, envie d'augmenter le risque trop vite.</p>
<h3>Bonnes pratiques</h3>
<ul>
  <li>Garder le même % de risque après une belle série.</li>
  <li>Retirer régulièrement une partie des profits (se payer).</li>
  <li>Ne pas confondre chance ponctuelle et compétence.</li>
</ul>`
        },
        {
          title: "Objectifs réalistes",
          minutes: 8,
          html: `
<p>Les promesses de « 100 % par mois » sont des mensonges. Les <strong>objectifs réalistes</strong> protègent votre mental et votre compte.</p>
<h3>Repères</h3>
<ul>
  <li>Les meilleurs fonds visent quelques dizaines de % par <em>an</em>.</li>
  <li>Un objectif sain en progression : la <strong>régularité</strong> avant le rendement.</li>
  <li>Mesurez-vous en <strong>R</strong> (multiples de risque) plutôt qu'en euros.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> le trading enrichit lentement ceux qui sont patients et ruine vite ceux qui sont pressés.</div>`
        }
      ]
    },

    /* ===================== MODULE 15 ===================== */
    {
      number: 15,
      title: "Prop Firms",
      icon: "🏆",
      summary: "Challenges, drawdown, règles cachées et gestion d'un compte financé.",
      lessons: [
        {
          title: "Qu'est-ce qu'une Prop Firm",
          minutes: 9,
          html: `
<p>Une <strong>prop firm</strong> (proprietary trading firm) vous donne accès à un capital à trader en échange d'un partage des profits — après avoir réussi un <em>challenge</em> d'évaluation.</p>
<h3>L'intérêt</h3>
<ul>
  <li>Trader un capital bien supérieur au vôtre (50k, 100k, 200k…).</li>
  <li>Risque limité à la frais d'inscription au challenge.</li>
  <li>Partage des profits souvent de 70 à 90 % en votre faveur.</li>
</ul>
<div class="callout callout-warn"><strong>Réalité :</strong> les prop firms gagnent surtout sur les frais de challenge des nombreux échecs. Réussir exige une discipline supérieure à celle d'un compte perso.</div>`
        },
        {
          title: "Fonctionnement des Challenges",
          minutes: 10,
          html: `
<p>Un <strong>challenge</strong> est un test : atteindre un objectif de profit sans violer les règles de risque.</p>
<h3>Structure typique (2 phases)</h3>
<ul>
  <li><strong>Phase 1</strong> : objectif ~8–10 % de profit.</li>
  <li><strong>Phase 2</strong> : objectif ~5 %, conditions plus souples.</li>
  <li>Puis <strong>compte financé</strong> : vous tradez le capital de la firme.</li>
</ul>
<p>Tout en respectant : drawdown journalier, drawdown global, parfois nombre de jours minimum.</p>`
        },
        {
          title: "Drawdown journalier",
          minutes: 9,
          html: `
<p>Le <strong>drawdown journalier</strong> (daily drawdown) est la perte maximale autorisée sur une seule journée (souvent ~5 %). Le dépasser = échec immédiat.</p>
<h3>Comment le respecter</h3>
<ul>
  <li>Fixez VOTRE limite bien en dessous (ex. -2 %).</li>
  <li>Après 2 pertes, stop pour la journée.</li>
  <li>Attention au mode de calcul (basé sur le solde ou l'équité de départ de journée).</li>
</ul>
<div class="callout callout-warn"><strong>Piège :</strong> certaines firms calculent le DD journalier sur l'équité <em>incluant les positions ouvertes</em>. Un trade flottant peut vous éliminer.</div>`
        },
        {
          title: "Drawdown global",
          minutes: 8,
          html: `
<p>Le <strong>drawdown global</strong> (max drawdown) est la perte totale autorisée depuis le départ (souvent ~10 %). C'est la ligne rouge ultime.</p>
<h3>Types</h3>
<ul>
  <li><strong>Statique</strong> : seuil fixe basé sur le solde initial.</li>
  <li><strong>Trailing</strong> : le seuil « suit » vos gains vers le haut (plus exigeant).</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> lisez TRÈS attentivement le type de drawdown. Un trailing DD mal compris a éliminé d'innombrables traders.</div>`
        },
        {
          title: "Règles cachées",
          minutes: 9,
          html: `
<p>Au-delà des objectifs, les prop firms ont des <strong>règles souvent négligées</strong> qui invalident des comptes par surprise.</p>
<h3>À vérifier dans le contrat</h3>
<ul>
  <li>Interdiction de trader pendant les news ?</li>
  <li>Limite de lots / d'exposition ?</li>
  <li>Interdiction du holding week-end / overnight ?</li>
  <li>Règle de « consistance » (un seul jour ne doit pas dépasser X % du profit total) ?</li>
  <li>Stratégies interdites (HFT, arbitrage, copy trading) ?</li>
</ul>
<div class="callout callout-warn"><strong>Important :</strong> lisez l'intégralité des règles AVANT d'acheter un challenge. L'ignorance n'est jamais une excuse acceptée.</div>`
        },
        {
          title: "Gestion du risque adaptée",
          minutes: 9,
          html: `
<p>En prop firm, la <strong>gestion du risque</strong> est encore plus stricte qu'en perso : votre objectif n°1 est de NE PAS être éliminé.</p>
<h3>Paramètres recommandés</h3>
<ul>
  <li>Risque 0,25–0,5 % par trade (au lieu de 1 %).</li>
  <li>Maximum 1–2 trades par jour.</li>
  <li>Stop net sur l'objectif : une fois atteint, on arrête de pousser.</li>
</ul>`
        },
        {
          title: "Réussir un challenge",
          minutes: 9,
          html: `
<p>Réussir un challenge, c'est de la <strong>gestion</strong>, pas du héroïsme.</p>
<h3>Plan type</h3>
<ol>
  <li>Visez l'objectif en plusieurs semaines, pas en 2 jours.</li>
  <li>1 setup A+ par jour suffit (1 % de gain ≈ quelques jours pour 8 %).</li>
  <li>Jamais de « all-in » pour finir plus vite.</li>
  <li>Dès l'objectif atteint, on arrête et on attend la validation.</li>
</ol>
<div class="callout callout-key"><strong>À retenir :</strong> la lenteur est votre alliée. Les traders qui « rushent » le challenge sont ceux qui le ratent.</div>`
        },
        {
          title: "Gestion d'un compte financé",
          minutes: 8,
          html: `
<p>Une fois <strong>financé</strong>, l'enjeu change : il faut <em>durer</em> pour encaisser des payouts réguliers.</p>
<h3>Mentalité</h3>
<ul>
  <li>Protéger le compte &gt; maximiser les gains.</li>
  <li>Demander ses payouts régulièrement (sécuriser le cash réel).</li>
  <li>Garder la même discipline qu'en challenge.</li>
</ul>`
        },
        {
          title: "Erreurs fréquentes",
          minutes: 8,
          html: `
<p>Les échecs en prop firm suivent des schémas répétitifs.</p>
<ul>
  <li><strong>Trop de risque</strong> pour finir vite → élimination.</li>
  <li><strong>Trader les news</strong> alors que c'est interdit.</li>
  <li><strong>Ignorer le trailing drawdown</strong>.</li>
  <li><strong>Revenge trading</strong> après une perte.</li>
  <li><strong>Ne pas lire les règles</strong> de consistance.</li>
</ul>
<div class="callout callout-key"><strong>À retenir :</strong> en prop firm, on ne gagne pas le challenge en gagnant gros — on le gagne en ne se faisant jamais éliminer.</div>`
        }
      ]
    },

    /* ===================== MODULE 16 ===================== */
    {
      number: 16,
      title: "Atelier pratique complet",
      icon: "🎬",
      summary: "Cas réels EUR/USD, XAU/USD, NASDAQ, Bitcoin + exécution et débrief en direct.",
      lessons: [
        {
          title: "Cas réel 1 : EUR/USD",
          minutes: 14,
          type: "exercise",
          html: `
<p>Appliquez TOUTE la méthode sur l'EUR/USD, étape par étape.</p>
<div class="callout callout-exercise">
<strong>Protocole</strong>
<ol>
  <li>Top-down : Weekly → Daily → H4 → M15.</li>
  <li>Identifiez le biais et la zone institutionnelle clé.</li>
  <li>Repérez la liquidité ciblée.</li>
  <li>Définissez entrée / stop / TP et le R:R.</li>
  <li>Vérifiez votre checklist d'entrée (Module 12).</li>
</ol>
</div>
<p class="muted">Documentez chaque étape avec une capture. Comparez ensuite au mouvement réel.</p>`
        },
        {
          title: "Cas réel 2 : XAU/USD (Or)",
          minutes: 14,
          type: "exercise",
          html: `
<p>L'or est plus volatil : parfait pour tester votre gestion du risque.</p>
<div class="callout callout-exercise">
<strong>Points d'attention spécifiques à l'or</strong>
<ul>
  <li>Stops plus larges → taille de position réduite (sizing !).</li>
  <li>Réactions fortes aux news US (CPI, taux).</li>
  <li>Mouvements explosifs en NY Kill Zone.</li>
</ul>
Réalisez le même protocole top-down que pour l'EUR/USD.
</div>`
        },
        {
          title: "Cas réel 3 : NASDAQ (US100)",
          minutes: 14,
          type: "exercise",
          html: `
<p>Un indice à fort momentum, très lié aux sessions US.</p>
<div class="callout callout-exercise">
<strong>Spécificités</strong>
<ul>
  <li>Meilleure fenêtre : NY Kill Zone.</li>
  <li>Tendances marquées, mais reversals brutaux.</li>
  <li>Très sensible au sentiment de risque (taux, tech, FOMC).</li>
</ul>
Construisez le plan complet et identifiez la prise de liquidité avant l'entrée.
</div>`
        },
        {
          title: "Cas réel 4 : Bitcoin",
          minutes: 14,
          type: "exercise",
          html: `
<p>Marché 24/7, très volatil : les concepts SMC s'y appliquent remarquablement bien.</p>
<div class="callout callout-exercise">
<strong>Spécificités</strong>
<ul>
  <li>Pas de session « officielle » → repérez les heures de volume réel.</li>
  <li>Stop hunts très fréquents et amples.</li>
  <li>Gestion du risque cruciale (volatilité élevée).</li>
</ul>
Même protocole top-down. Notez la qualité des FVG et OB sur crypto.
</div>`
        },
        {
          title: "Analyse complète avant marché",
          minutes: 12,
          type: "exercise",
          html: `
<p>La routine pré-marché qui fait la différence entre un amateur et un pro.</p>
<div class="callout callout-exercise">
<strong>Checklist pré-marché</strong>
<ol>
  <li>Calendrier économique du jour (news à éviter).</li>
  <li>Biais top-down sur chaque actif suivi.</li>
  <li>Zones d'intérêt marquées (OB, FVG, liquidité).</li>
  <li>Scénarios « si le prix fait A, je fais B ».</li>
  <li>Niveau de risque du jour défini à l'avance.</li>
</ol>
</div>`
        },
        {
          title: "Exécution en direct",
          minutes: 12,
          type: "exercise",
          html: `
<p>Passer de l'analyse à l'<strong>action</strong> sans hésiter ni trembler.</p>
<div class="callout callout-exercise">
<strong>Règles d'exécution</strong>
<ul>
  <li>Le setup coche TOUTE la checklist ? → on exécute sans débattre.</li>
  <li>Taille de position calculée AVANT de cliquer.</li>
  <li>Stop et TP placés immédiatement à l'ouverture.</li>
  <li>Aucune modification émotionnelle une fois en position.</li>
</ul>
</div>
<div class="callout callout-warn"><strong>Rappel :</strong> l'hésitation au moment d'exécuter vient d'un manque de confiance dans le plan → revenez au backtest.</div>`
        },
        {
          title: "Gestion en direct",
          minutes: 12,
          type: "exercise",
          html: `
<p>Gérer la position pendant qu'elle vit, selon des règles décidées à l'avance.</p>
<div class="callout callout-exercise">
<strong>Arbre de décision</strong>
<ul>
  <li>Prix avance vers TP → on laisse courir (ou BE selon plan).</li>
  <li>Structure se retourne contre nous avant TP → sortie anticipée prévue ?</li>
  <li>News imprévue → réduire / fermer selon le plan.</li>
</ul>
</div>
<div class="callout callout-key"><strong>À retenir :</strong> toute décision en direct doit déjà figurer dans le plan. On n'improvise jamais avec de l'argent en jeu.</div>`
        },
        {
          title: "Débrief complet",
          minutes: 12,
          type: "exercise",
          html: `
<p>Le <strong>débrief</strong> transforme l'expérience en compétence. C'est là que se fait la vraie progression.</p>
<div class="callout callout-exercise">
<strong>Questions de débrief</strong>
<ol>
  <li>Ai-je respecté mon plan à 100 % ? (sinon, où et pourquoi ?)</li>
  <li>L'entrée correspondait-elle à la checklist ?</li>
  <li>Mon état émotionnel a-t-il influencé une décision ?</li>
  <li>Qu'est-ce que je referais à l'identique ? Qu'est-ce que je changerais ?</li>
  <li>Le résultat (gain/perte) était-il dû à l'exécution ou au hasard ?</li>
</ol>
</div>
<div class="callout callout-key"><strong>Bravo !</strong> Vous avez parcouru l'ensemble de la formation. La maîtrise vient maintenant de la répétition : backtest, journal, débrief, recommencer. La discipline bat le talent.</div>`
        }
      ]
    }

  ]
};
