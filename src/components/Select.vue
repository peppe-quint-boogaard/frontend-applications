<template>
  <div class="select-bind">
    <div class="select-container">
      <label>Geslacht: {{ selected.geslacht }}</label>
      <select v-model="selected.geslacht">
        <option disabled>Selecteer</option>
        <option v-for="geslacht in geslachten">{{ geslacht }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Herkomst ouders: {{ selected.ouders }}</label>
      <select v-model="selected.ouders">
        <option disabled>Selecteer </option>
        <option v-for="ouder in ouders">{{ ouder }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Type huishouding: {{ selected.huishouding }}</label>
      <select v-model="selected.huishouding">
        <option disabled>Selecteer</option>
        <option v-for="huishouding in huishoudingen">{{ huishouding }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Gescheiden ouders: {{ selected.scheiding }}</label>
      <select v-model="selected.scheiding">
        <option disabled>Selecteer</option>
        <option v-for="scheiding in scheidingen">{{ scheiding }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Voortijdig schoolverlaten: {{ selected.voortijdig }}</label>
      <select v-model="selected.voortijdig">
        <option disabled>Selecteer</option>
        <option v-for="voortijdig in voortijdigschool">{{ voortijdig }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Soort onderwijs: {{ selected.onderwijs }}</label>
      <select v-model="selected.onderwijs">
        <option disabled>Selecteer</option>
        <option v-for="onderwijs in soortonderwijs">{{ onderwijs }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Soort woning: {{ selected.woning }}</label>
      <select v-model="selected.woning">
        <option disabled>Selecteer</option>
        <option v-for="woning in woningen">{{ woning }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Werk vader: {{ selected.vader }}</label>
      <select v-model="selected.vader">
        <option disabled>Selecteer</option>
        <option v-for="vader in werkvader">{{ vader }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Werk moeder: {{ selected.moeder }}</label>
      <select v-model="selected.moeder">
        <option disabled>Selecteer</option>
        <option v-for="moeder in werkmoeder">{{ moeder }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Slachtoffer: {{ selected.slachtoffer }}</label>
      <select v-model="selected.slachtoffer">
        <option disabled>Selecteer</option>
        <option v-for="slachtoffer in vraagslachtoffer">{{ slachtoffer }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Traject vooraf: {{ selected.traject }}</label>
      <select v-model="selected.traject">
        <option disabled>Selecteer</option>
        <option v-for="traject in trajectvraag">{{ traject }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Leeftijd moeder bij geboorte: {{ selected.leeftijdm }}</label>
      <select v-model="selected.leeftijdm">
        <option disabled>Selecteer</option>
        <option v-for="leeftijdm in leeftijdmoeder">{{ leeftijdm }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Vader of moeder verdacht: {{ selected.verdachtouders }}</label>
      <select v-model="selected.verdachtouders">
        <option disabled>Selecteer</option>
        <option v-for="verdachtouders in verdachto">{{ verdachtouders }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Kind verdacht: {{ selected.verdachtkind }}</label>
      <select v-model="selected.verdachtkind">
        <option disabled>Selecteer</option>
        <option v-for="verdachtkind in verdachtk">{{ verdachtkind }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Halt delict: {{ selected.haltdelict }}</label>
      <select v-model="selected.haltdelict">
        <option disabled>Selecteer</option>
        <option v-for="haltdelict in halt">{{ haltdelict }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Verandering onderwijsniveau: {{ selected.onderwijsniv }}</label>
      <select v-model="selected.onderwijsniv">
        <option disabled>Selecteer</option>
        <option v-for="onderwijsniv in onderwijsniveau">{{ onderwijsniv }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Leeftijdsverschil ouders: {{ selected.leeftijdverschil }}</label>
      <select v-model="selected.leeftijdverschil">
        <option disabled>Selecteer</option>
        <option v-for="leeftijdverschil in leeftijdver">{{ leeftijdverschil }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Actueel onderwijsniveau: {{ selected.actonderwijs }}</label>
      <select v-model="selected.actonderwijs">
        <option disabled>Selecteer</option>
        <option v-for="actonderwijs in actonderwijsniv">{{ actonderwijs }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Hoogst behaalde diploma moeder: {{ selected.diplomam }}</label>
      <select v-model="selected.diplomam">
        <option disabled>Selecteer</option>
        <option v-for="diplomam in diplomamoeder">{{ diplomam }}</option>
      </select>
    </div>
    <div class="select-container">
      <label>Hoogst behaalde diploma vader: {{ selected.diplomav }}</label>
      <select v-model="selected.diplomav">
        <option disabled>Selecteer</option>
        <option v-for="diplomav in diplomavader">{{ diplomav }}</option>
      </select>
    </div>
    <div class="select-container">
      <label class="select-box">Zwaar traject: {{ selected.trajectz }}</label>
      <select v-model="selected.trajectz">
        <option disabled>Selecteer</option>
        <option v-for="trajectz in trajectzwaar">{{ trajectz }}</option>
      </select>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Select',
  components: {
    selected: ''
  },
  data () {
    return {
      selected: {
        geslacht: "",
        ouder: "",
        huishouding: "",
        scheiding: "",
        voortijdig: "",
        onderwijs: "",
        woning: "",
        vader: "",
        moeder: "",
        slachtoffer: "",
        traject: "",
        leeftijdm: "",
        verdachtouders: "",
        verdachtkind: "",
        haltdelict: "",
        onderwijsniv: "",
        leeftijdverschil: "",
        actonderwijs: "",
        diplomam: "",
        diplomav: "",
        trajectz: "",
      },
      geslachten: ['Vrouw', 'Man'],
      ouders: ['Beide ouders Nederlands', 'Beide ouders niet Nederlands', 'Een van de ouders Nederlands'],
      huishoudingen: ['Eenouderhuishouding','Eenpersoonshuishouden', 'Gehuwd paar zonder kinderen', 'Institutioneel huishouden', 'Niet-gehuwd paar met kinderen', 'Niet-gehuwd paar zonder kinderen', 'Onbekend huishouden', 'Overig huishouden'],
      scheidingen: ['Ja', 'Nee'],
      voortijdigschool: ['Door in onderwijs', 'Onbekend', 'Niet van toepassing', 'Uit onderwijs met startkwalificatie', 'Voortijdig schoolverlaten'],
      soortonderwijs: ['Regulier onderwijs', 'Niet-regulier onderwijs', 'Onbekend'],
      woningen: ['Eigen woning', 'Huurwoning met toeslag', 'Huurwoning zonder toeslag', 'Onbekend'],
      werkvader: ['Werkend of overig actief', 'Geen werk en niet actief', 'Onbekend'],
      werkmoeder: ['Werkend of overig actief', 'Geen werk en niet actief', 'Onbekend'],
      vraagslachtoffer: ['Ja', 'Nee'],
      trajectvraag: ['Geen jeugdhulp zonder verblijf gehad', 'Jeugdhulp zonder verblijf gehad'],
      leeftijdmoeder: ["Jonger dan 20 jaar", "20 tot 25 jaar", "25 tot 30 jaar", "30 tot 35 jaar", "35 tot 40 jaar", "40 jaar en ouder"],
      verdachto: ['Ja', 'Nee'],
      verdachtk: ['Ja', 'Nee'],
      halt: ['Ja', 'Nee'],
      onderwijsniveau: ['Opschalen of gelijk blijvend', 'Afschalen', 'Onbekend'],
      leeftijdver: ['Minder dan 5 jaar', 'Meer dan 5 jaar'],
      actonderwijsniv: ['Basisonderwijs', 'Onderwijs onbekend', 'VMBO b/k, mbo 1 of mbo 2', 'VMBO g/t, mbo 3 of mbo 4', 'HAVO onderbouw, HAVO bovenbouw of HBO Bachelor', 'VWO of WO Bachelor'],
      diplomamoeder: ['Onderwijs onbekend', 'VMBO b/k, mbo 1 of mbo 2', 'VMBO g/t, mbo 3 of mbo 4', 'HAVO onderbouw, HAVO bovenbouw, HBO Bachelor of HBO Master', 'VWO, WO bBchelor of WO Master'],
      diplomavader: ['Onderwijs onbekend', 'VMBO b/k, mbo 1 of mbo 2', 'VMBO g/t, mbo 3 of mbo 4', 'HAVO onderbouw, HAVO bovenbouw, HBO Bachelor of HBO Master', 'VWO, WO bBchelor of WO Master'],
      trajectzwaar: ['Ja', 'Nee']
    }
  }
}


</script>

<style lang="css">
.select-bind {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 30em;
}

.select-container {
   align-items: flex-start;
   display: flex;
   flex-direction: column;
   margin-bottom: 1em;
   position: relative;
   width: 100%;
}

.select-box {
  position: relative;
}

label {
  font-weight: bold;
  font-size: 15px;
}

select {
  background: none;
  height: 25px;
  left: 0;
  top: 0;
  width: 20em;
}

option {
  margin: 1.5em 2em;
}
</style>
