## PROCES FRONTEND APPLICATIONS

#### 9 okt 2018
* Presentatie Arjan Kind Veilig thuis
  * Herontwerp **RISICOTAXATIE** applicatie
  * User ability vergroten
  * Proces gebruiker in kaart brengen
  * Formule uitgangspunt

#### 10 okt 2018
* Command line oefenen
  * Shortcuts leren
  * Setup via terminal
    * cd (naar directory)
    * mkdir *MAPNAAM* (map aanmaken)
    * touch *FILE* (bestand aanmaken)
    * npm init --yes (package.json)
    * .gitignore aanmaken (dest nodemodules inzetten)
    * npm install --save-dev *package* (installeren package)
    * **LIJST GEÏNSTALLEERDE PACKAGES**:
          * Prettier
          * Xo
          * Stylelinter
          * Browserify
          * Babel
          * PostCSS (niet gelukt)
    * `"build:asset": "cp -R src/* dest" (in package.json)`
    * `"build": "npm run build:asset && npm run build:js" (in package.json)`

#### 12 okt 2018
* Vue geïnstalleerd
> `npm install -g @vue/cli (global op computer)`
> `vue create project`
> `npm run serve (online krijgen vue)`

* In kaart brengen welk componenten er nodig zijn
* Alles importeren naar App.vue
> `import ... from './../...vue'`

* Export component om er gebruik van te aanmaken
> `export default {name: ".."}`

#### 15 okt 2018
* 3 Select velden creëeren
* Waarde doorspelen naar p-tag naast veld
* CSS Grid toegepast om het duidelijk te maken
#### Concept
Applicatie van Kind Veilig Thuis lijkt nu een onsamenhangend geheel. De gebruiker van de applicatie moet nu op veel verschillende knoppen drukken om een duidelijk overzicht te krijgen van het probleem en wat de vervolgstappen zouden moeten zijn.
**_Oplossing_**
Wanneer alle velden van de vragen zijn ingevuld komt er een percentage uit. Dit percentage is zeer belangrijk voor de vervolgstappen van de client. Echter kan het zijn dat er verschillende soorten hulp nodig is op basis van de waarde die zijn ingevuld. Dan is een lijst met andere hulp overbodig.
> Voorbeeld -  De client zijn risico-score valt hoog uit omdat hij vaak middelen gebruikt, dan is het belangrijk dat er de juiste hulptrajecten worden getoond voor het behandelen van de verslaving. Als iemand hoog scoort voor schoolverzuim, worden de trajecten getoond die er voor zorgen dat de client daar mee geholpen wordt.

  **_Wat is daar voor nodig_**
* De data van de vragen die ingevuld worden, moet kloppend zijn.
* Risico-waardes in kaart brengen. Dat wil zeggen dat er gekeken moet worden welke waarde er voor zorgt dat het risico verhoogd wordt. Hierdoor kan er een juist vervolgtraject worden bepaald.
* Lijst van instanties die de hulp kunnen geven aan de client.
* Functie in de applicatie dat de data op een veilige/betrouwbare manier kan worden doorgegeven aan de volgende partij die met de client werkt (dit kan een issue zijn i.v.m. de privacy-wetgeving).



#### 16 okt 2018
* Select-velden als component gecreëerd, uitkomst te zien
  * Opsplitsen in verschillende categoriën
* Formule doorgevoerd naar de rating, alleen nog manier verzinnen dat het een overzichtelijke formule wordt
  * Daarna gewichten doorvoeren naar Rating
* Sidebar-nav gemaakt, categoriën maken voor de buttons
  * Buttons linken aan verschillende categoriën waardoor juiste velden worden getoond als er op geklikt wordt
  * `v-for="(item, index) in items"` & `:class="{ 'active': index === 0 }"
` zorgen er voor dat eerste button `.active` krijgt als class
* Manier verzinnen dat het 100vh & 100vw blijft
* Labels laten overschrijven door output `</option>`

#### 17 okt 2018
* Sidebar nav werkend gekregen door component SideMenuButton. Door middel van een `@click` een functie meegegeven wanneer hij wordt aangeroepen. Elke keer als de button wordt aangeroepen, wordt er een ID meegegeven. Hierdoor ontstaat de link met de verschillende categoriën.
* `Question.js` uitgebreid en gecategoriseerd. Per vraag een unieke id meegegeven en per antwoord een value (gewicht) meegegeven.

#### 18 okt 2018
* De verschillende categoriën gekoppeld aan de knoppen. Door middel van `v-for="question in questions[this.item]` wordt het array-nummer van `Question.js` gekoppeld aan de id van de button. Wanneer `[this.item]` hetzelfde is, worden de juiste getoond.
* Elke keer als de select wordt veranderd, wordt de waarde van het nieuwe geselecteerde item opgehaald. Dit gebeurt hierdoor: `<select v-model="value" @change="valueBus(value)">`
* Elk antwoord de juiste waarde meegegeven. Formule nog niet kloppend. De waarde moet weer opgehaald worden en opgeteld en toegevoegd worden in de formule.

#### 19 okt 2018
###### Wat werkt er nog niet aan de applicatie?
* Elke keer als er een waarde wordt geselecteerd, worden er ook andere velden geselecteerd. Dit komt door `v-model` in de `select`-tag. Hierdoor worden de waardes die eerder zijn ingevuld overschreven. Oplossing door elke keer als er iets geselecteerd wordt een unieke id mee te geven en deze op te slaan zodat deze niet meer aangetast kan worden.
* Formule krijgt niet de juiste waarde mee vanuit de option-velden. Hierdoor werkt de formule niet. De formule laat wel andere tekst zien wanneer het boven of onder een bepaalde waarde is.
* Nav-buttons krijgen geen class `.active` mee wanneer er op gedrukt wordt. Hierdoor kan de gebruiker niet duidelijk weten waar hij of zij zich op de pagina bevindt.
* Vervolgtraject moet aangevuld worden met velden waar zorgverleners komen te staan. 

###### Wat doe ik de volgende keer anders?
* Eerst schetsen maken om duidelijk te krijgen welke componenten ik ga gebruiken.
* Per component beschrijven welke waardes er in komen en/of welke waardes er doorgegeven moeten worden.
* Per component opzoeken welke vue technieken ik moet gebruiken.
* Als dit proces is voltooid beginnen aan het coderen van de applicatie.
* Tijdens het werken aan de applicatie vaker commiten, versies opbouwen. Tijdens dit proces waardevolle code kwijtgeraakt die ik nu niet meer terug kan vinden/kan bedenken.
* Componenten anders opbouwen i.p.v. alles scoped te doen. Misschien kijken naar het aanmaken van mappen voor een component (js en css included)? Daarna alles ophalen in `main.js` en daar de componenten aanroepen.
