import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const sections = [
  'humanInformation',
  'petInformation',
  'review',
  'confirmation',
];

export default new Vuex.Store({
  state: {
    fields: [
      {
        name: 'firstName',
        label: 'First name',
        value: '',
        type: 'text',
        component: 'input',
        className: 'is-half',
        validation: [
          'required',
        ],
        section: sections[0],
      },
      {
        name: 'lastName',
        label: 'Last name',
        value: '',
        type: 'text',
        component: 'input',
        className: 'is-half',
        validation: [
          'required',
        ],
        section: sections[0],
      },
      {
        name: 'email',
        label: 'Email address',
        value: '',
        type: 'email',
        component: 'input',
        className: '',
        validation: [
          'required',
          'email',
        ],
        section: sections[0],
      },
      {
        name: 'password',
        label: 'Password',
        value: '',
        type: 'password',
        component: 'input',
        className: '',
        validation: [
          'required',
        ],
        section: sections[0],
      },
      {
        name: 'photo',
        label: 'Photo',
        value: '',
        type: 'image',
        component: 'image',
        className: '',
        section: sections[0],
      },
      {
        name: 'gender',
        label: 'Gender',
        value: 'male',
        type: 'toggle',
        component: 'toggle',
        className: '',
        validation: [
          'required',
        ],
        options: [
          {
            value: 'male',
            label: 'Male',
          },
          {
            value: 'female',
            label: 'Female',
          },
        ],
        section: sections[1],
      },
      {
        name: 'type',
        label: 'Type',
        value: '',
        type: 'select',
        component: 'select',
        className: '',
        validation: [
          'required',
        ],
        options: [
          {
            label: 'Cat',
            name: 'cat',
          },
          {
            label: 'Dog',
            name: 'dog',
          },
        ],
        section: sections[1],
      },
      {
        name: 'petName',
        label: 'Name',
        value: '',
        type: 'text',
        component: 'input',
        className: '',
        validation: [
          'required',
        ],
        section: sections[1],
      },
      {
        name: 'breed',
        label: 'Breed',
        value: '',
        type: 'select',
        component: 'select',
        className: '',
        validation: [
          'required',
        ],
        dogOptions: [
          {
            name: 'affenpinscher',
            label: 'Affenpinscher',
          },
          {
            name: 'afghanHound',
            label: 'Afghan Hound',
          },
          {
            name: 'airedaleTerrier',
            label: 'Airedale Terrier',
          },
          {
            name: 'akita',
            label: 'Akita',
          },
          {
            name: 'alaskanMalamute',
            label: 'Alaskan Malamute',
          },
          {
            name: 'americanEnglishCoonhound',
            label: 'American English Coonhound',
          },
          {
            name: 'americanEskimoDog',
            label: 'American Eskimo Dog',
          },
          {
            name: 'americanFoxhound',
            label: 'American Foxhound',
          },
          {
            name: 'americanHairlessTerrier',
            label: 'American Hairless Terrier',
          },
          {
            name: 'americanLeopardHound',
            label: 'AmericanLeopardHound',
          },
          {
            name: 'americanStaffordshireTerrier',
            label: 'American Staffordshire Terrier',
          },
          {
            name: 'americanWaterSpaniel',
            label: 'American Water Spaniel',
          },
          {
            name: 'anatolianShepherdDog',
            label: 'Anatolian Shepherd Dog',
          },
          {
            name: 'appenzellerSennenhund',
            label: 'Appenzeller Sennenhund',
          },
          {
            name: 'australianCattleDog',
            label: 'Australian Cattle Dog',
          },
          {
            name: 'australianKelpie',
            label: 'Australian Kelpie',
          },
          {
            name: 'australianShepherd',
            label: 'Australian Shepherd',
          },
          {
            name: 'australianStumpyTailCattle Dog',
            label: 'Australian Stumpy Tail Cattle Dog',
          },
          {
            name: 'australianTerrier',
            label: 'Australian Terrier',
          },
          {
            name: 'azawakh',
            label: 'Azawakh',
          },
          {
            name: 'barbet',
            label: 'Barbet',
          },
          {
            name: 'basenji',
            label: 'Basenji',
          },
          {
            name: 'bassetFauveDeBretagne',
            label: 'Basset Fauve de Bretagne',
          },
          {
            name: 'bassetHound',
            label: 'Basset Hound',
          },
          {
            name: 'bavarianMountainScentHound',
            label: 'Bavarian Mountain Scent Hound',
          },
          {
            name: 'beagle',
            label: 'Beagle',
          },
          {
            name: 'beardedCollie',
            label: 'Bearded Collie',
          },
          {
            name: 'beauceron',
            label: 'Beauceron',
          },
          {
            name: 'bedlingtonTerrier',
            label: 'Bedlington Terrier',
          },
          {
            name: 'belgianLaekenois',
            label: 'Belgian Laekenois',
          },
          {
            name: 'belgianMalinois',
            label: 'Belgian Malinois',
          },
          {
            name: 'belgianSheepdog',
            label: 'Belgian Sheepdog',
          },
          {
            name: 'belgianTervuren',
            label: 'Belgian Tervuren',
          },
          {
            name: 'bergamascoSheepdog',
            label: 'Begamasco Sheepdog',
          },
          {
            name: 'bergerPicard',
            label: 'BergerPicard',
          },
          {
            name: 'berneseMountainDog',
            label: 'Bernese Mountain Dog',
          },
          {
            name: 'bichonFrise',
            label: 'Bichon Frise',
          },
          {
            name: 'biewerTerrier',
            label: 'Biewer Terrier',
          },
          {
            name: 'blackAndTanCoonhound',
            label: 'Black and Tan Coonhound',
          },
          {
            name: 'blackRussianTerrier',
            label: 'Black Russian Terrier',
          },
          {
            name: 'bloodhound',
            label: 'Bloodhound',
          },
          {
            name: 'bluetickCoonhound',
            label: 'Bluetick Coonhound',
          },
          {
            name: 'boerboel',
            label: 'Boerboel',
          },
          {
            name: 'bohemianShepherd',
            label: 'Bohemian Shepherd',
          },
          {
            name: 'bolognese',
            label: 'Bolognese',
          },
          {
            name: 'borderCollie',
            label: 'Border Collie',
          },
          {
            name: 'borderTerrier',
            label: 'BorderTerrier',
          },
          {
            name: 'borzoi',
            label: 'Borzoi',
          },
          {
            name: 'bostonTerrier',
            label: 'Boston Terrier',
          },
          {
            name: 'bouvierDesFlandres',
            label: 'Bouvier des Flandres',
          },
          {
            name: 'boxer',
            label: 'Boxer',
          },
          {
            name: 'boykinSpaniel',
            label: 'Boykin Spaniel',
          },
          {
            name: 'braccoItaliano',
            label: 'Bracco Italiano',
          },
          {
            name: 'braqueDuBourbonnais',
            label: 'Braque du Bourbonnais',
          },
          {
            name: 'braqueFrancaisPyrenean',
            label: 'Braque Francais Pyrenean',
          },
          {
            name: 'briard',
            label: 'Briard',
          },
          {
            name: 'brittany',
            label: 'Brittany',
          },
          {
            name: 'broholmer',
            label: 'Broholmer',
          },
          {
            name: 'brusselsGriffon',
            label: 'Brussels Griffon',
          },
          {
            name: 'bullTerrier',
            label: 'Bull Terrier',
          },
          {
            name: 'bulldog',
            label: 'Bulldog',
          },
          {
            name: 'bullmastiff',
            label: 'Bullmastiff',
          },
          {
            name: 'cairnTerrier',
            label: 'Cairn Terrier',
          },
          {
            name: 'canaanDog',
            label: 'Canaan Dog',
          },
          {
            name: 'caneCorso',
            label: 'Cane Corso',
          },
          {
            name: 'cardiganWelshCorgi',
            label: 'Cardigan Welsh Corgi',
          },
          {
            name: 'carolinaDog',
            label: 'Carolina Dog',
          },
          {
            name: 'catahoulaLeopardDog',
            label: 'Catahoula Leopard Dog',
          },
          {
            name: 'caucasianShepherdDog',
            label: 'Caucasian Shepherd Dog',
          },
          {
            name: 'cavalierKingCharlesSpaniel',
            label: 'Cavalier King Charles Spaniel',
          },
          {
            name: 'centralAsianShepherdDog',
            label: 'Central Asian Shepherd Dog',
          },
          {
            name: 'ceskyTerrier',
            label: 'Cesky Terrier',
          },
          {
            name: 'chesapeakeBayRetriever',
            label: 'Chesapeake Bay Retriever',
          },
          {
            name: 'chihuahua',
            label: 'Chihuahua',
          },
          {
            name: 'chineseCrested',
            label: 'Chinese Crested',
          },
          {
            name: 'chineseSharPei',
            label: 'Chinese Shar-Pei',
          },
          {
            name: 'chinook',
            label: 'Chinook',
          },
          {
            name: 'chowChow',
            label: 'Chow Chow',
          },
          {
            name: 'cirnecoDellEtna',
            label: 'Cirneco dell\'Etna',
          },
          {
            name: 'clumberSpaniel',
            label: 'Clumber Spaniel',
          },
          {
            name: 'cockerSpaniel',
            label: 'Cocker Spaniel',
          },
          {
            name: 'collie',
            label: 'Collie',
          },
          {
            name: 'cotonDeTulear',
            label: 'coton de Tulear',
          },
          {
            name: 'croatianSheepdog',
            label: 'Croatian Sheepdog',
          },
          {
            name: 'curlyCoatedRetriever',
            label: 'Curly Coated Retriever',
          },
          {
            name: 'czechoslovakianVlcak',
            label: 'Czechoslovakian Vlcak',
          },
          {
            name: 'daschund',
            label: 'Daschund',
          },
          {
            name: 'dalmatian',
            label: 'Dalmatian',
          },
          {
            name: 'dandieDinmontTerrier',
            label: 'Dandie Dinmont Terrier',
          },
          {
            name: 'danishSwedishFarmdog',
            label: 'Danish Swedish Farmdog',
          },
          {
            name: 'deutscherWachtelhund',
            label: 'Deutscher Wachtelhund',
          },
          {
            name: 'dobermanPinscher',
            label: 'Doberman Pinscher',
          },
          {
            name: 'dogoArgentino',
            label: 'Dogo Argentino',
          },
          {
            name: 'dogueDeBordeaux',
            label: 'Dogue de Bordeaux',
          },
          {
            name: 'drentschePatrijshond',
            label: 'DrentschePatrijshond',
          },
          {
            name: 'drever',
            label: 'Drever',
          },
          {
            name: 'dutchShepherd',
            label: 'Dutch Shepherd',
          },
          {
            name: 'englishCockerSpaniel',
            label: 'English Cocker Spaniel',
          },
          {
            name: 'englishFoxhound',
            label: 'English Foxhound',
          },
          {
            name: 'englishSetter',
            label: 'English Setter',
          },
          {
            name: 'englishSpringerSpaniel',
            label: 'English Springer Spaniel',
          },
          {
            name: 'englishToySpaniel',
            label: 'English Toy Spaniel',
          },
          {
            name: 'entlebucherMountainDog',
            label: 'Entlebucher Mountain Dog',
          },
          {
            name: 'estrelaMountainDog',
            label: 'Estrela Mountain Dog',
          },
          {
            name: 'eurasier',
            label: 'Eurasier',
          },
          {
            name: 'fieldSpaniel',
            label: 'Field Spaniel',
          },
          {
            name: 'finnishLapphund',
            label: 'Finnish Lapphund',
          },
          {
            name: 'finnishSpitz',
            label: 'Finnish Spitz',
          },
          {
            name: 'flatCoatedRetriever',
            label: 'Flat-Coated Retriever',
          },
          {
            name: 'frenchBulldog',
            label: 'French Bulldog',
          },
          {
            name: 'frenchSpaniel',
            label: 'French Spaniel',
          },
          {
            name: 'germanLonghairedPointer',
            label: 'German Longhaired Pointer',
          },
          {
            name: 'germanPinscher',
            label: 'German Pinscher',
          },
          {
            name: 'germanShepherdDog',
            label: 'German Shepherd Dog',
          },
          {
            name: 'germanShorthairedPointer',
            label: 'German Shorthaired Pointer',
          },
          {
            name: 'germanSpitz',
            label: 'German Spitz',
          },
          {
            name: 'germanWirehairedPointer',
            label: 'German Wirehaired Pointer',
          },
          {
            name: 'giantSchnauzer',
            label: 'Giant Schnauzer',
          },
          {
            name: 'glenOfImaalTerrier',
            label: 'Glen of Imaal Terrier',
          },
          {
            name: 'goldenRetriever',
            label: 'Golden Retriever',
          },
          {
            name: 'gordonSetter',
            label: 'Gordon Setter',
          },
          {
            name: 'grandBassetGriffonVendeen',
            label: 'Grand Basset Griffon Vendéen',
          },
          {
            name: 'greatDane',
            label: 'Great Dane',
          },
          {
            name: 'greatPyrenees',
            label: 'Great Pyrenees',
          },
          {
            name: 'greaterSwissMountainDog',
            label: 'Greater Swiss Mountain Dog',
          },
          {
            name: 'greyhound',
            label: 'Greyhound',
          },
          {
            name: 'hamiltonstovare',
            label: 'Hamiltonstovare',
          },
          {
            name: 'hanoverianScenthound',
            label: 'Hanoverian Scenthound',
          },
          {
            name: 'harrier',
            label: 'Harrier',
          },
          {
            name: 'havanese',
            label: 'Havanese',
          },
          {
            name: 'hokkaido',
            label: 'Hokkaido',
          },
          {
            name: 'hovawart',
            label: 'Hovawart',
          },
          {
            name: 'ibizanHound',
            label: 'Ibizan Hound',
          },
          {
            name: 'icelandicSheepdog',
            label: 'Icelandic Sheepdog',
          },
          {
            name: 'irishRedAndWhiteSetter',
            label: 'Irish Red and White Setter',
          },
          {
            name: 'irishSetter',
            label: 'Irish Setter',
          },
          {
            name: 'irishTerrier',
            label: 'Irish Terrier',
          },
          {
            name: 'irishWaterSpaniel',
            label: 'Irish Water Spaniel',
          },
          {
            name: 'irishWolfhound',
            label: 'Irish Wolfhound',
          },
          {
            name: 'italianGreyhound',
            label: 'Italian Greyhound',
          },
          {
            name: 'jagdterrier',
            label: 'Jagdterrier',
          },
          {
            name: 'japaneseChin',
            label: 'Japanese Chin',
          },
          {
            name: 'japaneseSpitz',
            label: 'Japanese Spitz',
          },
          {
            name: 'jindo',
            label: 'Jindo',
          },
          {
            name: 'kaiKen',
            label: 'Kai Ken',
          },
          {
            name: 'karelianBearDog',
            label: 'Karelian Bear Dog',
          },
          {
            name: 'keeshond',
            label: 'Keeshond',
          },
          {
            name: 'kerryBlueTerrier',
            label: 'Kerry Blue Terrier',
          },
          {
            name: 'kishuKen',
            label: 'Kishu Ken',
          },
          {
            name: 'komondor',
            label: 'Komondor',
          },
          {
            name: 'kromfohrlander',
            label: 'Kromfohrlander',
          },
          {
            name: 'kuvasz',
            label: 'Kuvasz',
          },
          {
            name: 'labradorRetriever',
            label: 'Labrador Retriever',
          },
          {
            name: 'lagottoRomagnolo',
            label: 'Lagotto Romagnolo',
          },
          {
            name: 'lakelandTerrier',
            label: 'Lakeland Terrier',
          },
          {
            name: 'lancashireHeeler',
            label: 'Lancashire Heeler',
          },
          {
            name: 'lapponianHerder',
            label: 'Lapponian Herder',
          },
          {
            name: 'leonberger',
            label: 'Leonberger',
          },
          {
            name: 'lhasaApso',
            label: 'Lhasa Apso',
          },
          {
            name: 'lowchen',
            label: 'Löwchen',
          },
          {
            name: 'maltese',
            label: 'Maltese',
          },
          {
            name: 'machesterTerrierStandard',
            label: 'Machester Terrier (Standard)',
          },
          {
            name: 'manchesterTerrierToy',
            label: 'Manchester Terrier (Toy)',
          },
          {
            name: 'mastiff',
            label: 'Mastiff',
          },
          {
            name: 'miniatureAmericanShepherd',
            label: 'Miniature American Shepherd',
          },
          {
            name: 'miniatureBullTerrier',
            label: 'Miniature Bull Terrier',
          },
          {
            name: 'miniaturePinscher',
            label: 'Miniature Pinscher',
          },
          {
            name: 'miniatureSchnauzer',
            label: 'Miniature Schnauzer',
          },
          {
            name: 'mountainCur',
            label: 'Mountain Cur',
          },
          {
            name: 'mudi',
            label: 'Mudi',
          },
          {
            name: 'neapolitanMastiff',
            label: 'Neapolitan Mastiff',
          },
          {
            name: 'nederlandeseKooikerhondje',
            label: 'Nederlandese Kooikerhondje',
          },
          {
            name: 'newfoundland',
            label: 'Newfoundland',
          },
          {
            name: 'norfolkTerrier',
            label: 'Norfolk Terrier',
          },
          {
            name: 'norrbottenspets',
            label: 'Norrbottenspets',
          },
          {
            name: 'norwegianBuhund',
            label: 'Norwegian Buhund',
          },
          {
            name: 'norwegianElkhound',
            label: 'Norwegian Elkhound',
          },
          {
            name: 'norwegianLundehund',
            label: 'Norwegian Lundehund',
          },
          {
            name: 'norwichTerrier',
            label: 'Norwich Terrier',
          },
          {
            name: 'novaScotiaDuckTollingRetriever',
            label: 'Nova Scotia Duck Tolling Retriever',
          },
          {
            name: 'oldEnglishSheepdog',
            label: 'Old English Sheepdog',
          },
          {
            name: 'otterhound',
            label: 'Otterhound',
          },
          {
            name: 'papillon',
            label: 'Papillon',
          },
          {
            name: 'parsonRussellTerrier',
            label: 'Parson Russell Terrier',
          },
          {
            name: 'pekingese',
            label: 'Pekingese',
          },
          {
            name: 'pembrokeWelshCorgi',
            label: 'Pembroke Welsh Corgi',
          },
          {
            name: 'perroDePresaCanario',
            label: 'Perro de Presa Canario',
          },
          {
            name: 'peruvianIncaOrchid',
            label: 'Peruvian Inca Orchid',
          },
          {
            name: 'petitBassetGriffonVendeen',
            label: 'Petit Basset Griffon Vendéen',
          },
          {
            name: 'pharaohHound',
            label: 'Pharaoh Hound',
          },
          {
            name: 'plott',
            label: 'Plott',
          },
          {
            name: 'pointer',
            label: 'Pointer',
          },
          {
            name: 'polishLowlandSheepdog',
            label: 'Polish Lowland Sheepdog',
          },
          {
            name: 'pomeranian',
            label: 'Pomeranian',
          },
          {
            name: 'poodleMiniature',
            label: 'Poodle (Miniature)',
          },
          {
            name: 'poodleStandard',
            label: 'Poodle (Standard)',
          },
          {
            name: 'poodleToy',
            label: 'Poodle (Toy)',
          },
          {
            name: 'porcelaine',
            label: 'Porcelaine',
          },
          {
            name: 'portuguesePodengo',
            label: 'Portuguese Podengo',
          },
          {
            name: 'portuguesePodengoPequeno',
            label: 'Portuguese Podengo Pequeno',
          },
          {
            name: 'portuguesePointer',
            label: 'Portuguese Pointer',
          },
          {
            name: 'portugueseSheepdog',
            label: 'Portuguese Sheepdog',
          },
          {
            name: 'portugueseWaterDog',
            label: 'Portuguese Water Dog',
          },
          {
            name: 'pudelpointer',
            label: 'Pudelpointer',
          },
          {
            name: 'pug',
            label: 'Pug',
          },
          {
            name: 'puli',
            label: 'Puli',
          },
          {
            name: 'pumi',
            label: 'Pumi',
          },
          {
            name: 'pyreneanMastiff',
            label: 'Pyrenean Mastiff',
          },
          {
            name: 'pyreneanShepherd',
            label: 'Pyrenean Shepherd',
          },
          {
            name: 'rafeiroDoAlentejo',
            label: 'Rafeiro do Alentejo',
          },
          {
            name: 'ratTerrier',
            label: 'Rat Terrier',
          },
          {
            name: 'redboneCoonhound',
            label: 'Redbone Coonhound',
          },
          {
            name: 'rhodesianRidgeback',
            label: 'Rhodesian Ridgeback',
          },
          {
            name: 'romanianMioriticShepherdDog',
            label: 'Romanian Mioritic Shepherd Dog',
          },
          {
            name: 'rottweiler',
            label: 'Rottweiler',
          },
          {
            name: 'russellTerrier',
            label: 'Russell Terrier',
          },
          {
            name: 'russianToy',
            label: 'Russian Toy',
          },
          {
            name: 'russianTsvetnayaBolonka',
            label: 'Russian Tsvetnaya Bolonka',
          },
          {
            name: 'saintBernard',
            label: 'Saint Bernard',
          },
          {
            name: 'saluki',
            label: 'Saluki',
          },
          {
            name: 'samoyed',
            label: 'Samoyed',
          },
          {
            name: 'schapendoes',
            label: 'Schapendoes',
          },
          {
            name: 'schipperke',
            label: 'Schipperke',
          },
          {
            name: 'scottishDeerhound',
            label: 'Scottish Deerhound',
          },
          {
            name: 'scottishTerrier',
            label: 'Scottish Terrier',
          },
          {
            name: 'sealyhamTerrier',
            label: 'Sealyham Terrier',
          },
          {
            name: 'segugioItalian',
            label: 'Segugio Italian',
          },
          {
            name: 'shetlandSheepdog',
            label: 'Shetland Sheepdog',
          },
          {
            name: 'shibaInu',
            label: 'Shiba Inu',
          },
          {
            name: 'shihTzu',
            label: 'Shih Tzu',
          },
          {
            name: 'shikoku',
            label: 'shikoku',
          },
          {
            name: 'siberianHusky',
            label: 'Siberian Husky',
          },
          {
            name: 'silkyTerrier',
            label: 'Silky Terrier',
          },
          {
            name: 'skyeTerrier',
            label: 'Skye Terrier',
          },
          {
            name: 'sloughi',
            label: 'Sloughi',
          },
          {
            name: 'slovakianWirehairedPointer',
            label: 'Slovakian Wirehaired Pointer',
          },
          {
            name: 'slovenskyCuvac',
            label: 'Slovensky Cuvac',
          },
          {
            name: 'slovenskyKopov',
            label: 'Slovensky Kopov',
          },
          {
            name: 'smallMunsterlanderPointer',
            label: 'Small Munsterlander Pointer',
          },
          {
            name: 'smoothFoxTerrier',
            label: 'Smooth Fox Terrier',
          },
          {
            name: 'softCoatedWheatenTerrier',
            label: 'Soft Coated Wheaten Terrier',
          },
          {
            name: 'spanishMastiff',
            label: 'Spanish Mastiff',
          },
          {
            name: 'spanishWaterDog',
            label: 'Spanish Water Dog',
          },
          {
            name: 'spinoneItaliano',
            label: 'Spinone Italiano',
          },
          {
            name: 'stabyhoun',
            label: 'Stabyhoun',
          },
          {
            name: 'staffordshireBullTerrier',
            label: 'Staffordshire Bull Terrier',
          },
          {
            name: 'standardSchnauzer',
            label: 'StandardSchnauzer',
          },
          {
            name: 'sussexSpaniel',
            label: 'Sussex Spaniel',
          },
          {
            name: 'swedishLapphund',
            label: 'Swedish Lapphund',
          },
          {
            name: 'swedishVallhund',
            label: 'Swedish Vallhund',
          },
          {
            name: 'taiwanDog',
            label: 'Taiwan Dog',
          },
          {
            name: 'teddyRooseveltTerrier',
            label: 'Teddy Roosevelt Terrier',
          },
          {
            name: 'thaiRidgeback',
            label: 'Thai Ridgeback',
          },
          {
            name: 'tibetanMastiff',
            label: 'Tibetan Mastiff',
          },
          {
            name: 'tibetanSpaniel',
            label: 'Tibetan Spaniel',
          },
          {
            name: 'tibetanTerrier',
            label: 'Tibetan Terrier',
          },
          {
            name: 'tornjak',
            label: 'Tornjak',
          },
          {
            name: 'tosa',
            label: 'Tosa',
          },
          {
            name: 'toyFoxTerrier',
            label: 'Toy Fox Terrier',
          },
          {
            name: 'transylvanianHound',
            label: 'Transylvanian Hound',
          },
          {
            name: 'treeingTennesseeBrindle',
            label: 'Treeing Tennessee Brindle',
          },
          {
            name: 'treeingWalkerCoonhound',
            label: 'Treeing Walker Coonhound',
          },
          {
            name: 'vizsla',
            label: 'Vizsla',
          },
          {
            name: 'weirmaraner',
            label: 'Weirmaraner',
          },
          {
            name: 'welshSpringerSpaniel',
            label: 'Welsh Springer Spaniel',
          },
          {
            name: 'welshTerrier',
            label: 'Welsh Terrier',
          },
          {
            name: 'westHighlandWhiteTerrier',
            label: 'West Highland White Terrier',
          },
          {
            name: 'whippet',
            label: 'Whippet',
          },
          {
            name: 'wireFoxTerrier',
            label: 'Wire Fox Terrier',
          },
          {
            name: 'wirehairedPointingGriffon',
            label: 'Wirehaired Pointing Griffon',
          },
          {
            name: 'wirehairedVizsla',
            label: 'Wirehaired Vizsla',
          },
          {
            name: 'workingKelpie',
            label: 'Working Kelpie',
          },
          {
            name: 'xoloitzcuintli',
            label: 'Xoloitzcuintli',
          },
          {
            name: 'yakutianLaika',
            label: 'Yakutian Laika',
          },
          {
            name: 'yorkshireTerrier',
            label: 'Yorkshire Terrier',
          },
        ],
        catOptions: [
          {
            name: 'abyssinian',
            label: 'Abyssinian',
          },
          {
            name: 'aegean',
            label: 'Aegean',
          },
          {
            name: 'americanCurl',
            label: 'American Curl',
          },
          {
            name: 'americanBobtail',
            label: 'American Bobtail',
          },
          {
            name: 'americanShorthair',
            label: 'American Shorthair',
          },
          {
            name: 'americanWirehair',
            label: 'American Wirehair',
          },
          {
            name: 'aphroditeGiant',
            label: 'Aphrodite Giant',
          },
          {
            name: 'arabianMau',
            label: 'Arabian Mau',
          },
          {
            name: 'australianMist',
            label: 'Australian Mist',
          },
          {
            name: 'asian',
            label: 'Asian',
          },
          {
            name: 'asianSemilonghair',
            label: 'Asian Semilonghair',
          },
          {
            name: 'balinese',
            label: 'Balinese',
          },
          {
            name: 'bambino',
            label: 'Bambino',
          },
          {
            name: 'bengal',
            label: 'Bengal',
          },
          {
            name: 'birman',
            label: 'Birman',
          },
          {
            name: 'bombay',
            label: 'Bombay',
          },
          {
            name: 'brazilianShorthair',
            label: 'Brazilian Shorthair',
          },
          {
            name: 'britishSemilonghair',
            label: 'British Semilonghair',
          },
          {
            name: 'britishLonghair',
            label: 'British Longhair',
          },
          {
            name: 'burmese',
            label: 'Burmese',
          },
          {
            name: 'burmilla',
            label: 'Burmilla',
          },
          {
            name: 'californiaSpangled',
            label: 'California Spangled',
          },
          {
            name: 'chantillyTiffany',
            label: 'Chantilly-Tiffany',
          },
          {
            name: 'chartreux',
            label: 'Chartreux',
          },
          {
            name: 'chausie',
            label: 'Chausie',
          },
          {
            name: 'cheetoh',
            label: 'Cheetoh',
          },
          {
            name: 'colorpointShorthair',
            label: 'Colorpoint Shorthair',
          },
          {
            name: 'cornishRex',
            label: 'Cornish Rex',
          },
          {
            name: 'cymric',
            label: 'Cymric',
          },
          {
            name: 'cyprus',
            label: 'Cyprus',
          },
          {
            name: 'devonRex',
            label: 'Devon Rex',
          },
          {
            name: 'donskoy',
            label: 'Donskoy',
          },
          {
            name: 'dragonLi',
            label: 'Dragon Li',
          },
          {
            name: 'dwelf',
            label: 'Dwelf',
          },
          {
            name: 'egyptianMau',
            label: 'Egyptian Mau',
          },
          {
            name: 'europeanShorthair',
            label: 'European Shorthair',
          },
          {
            name: 'exoticShorthair',
            label: 'Exotic Shorthair',
          },
          {
            name: 'foldex',
            label: 'Foldex',
          },
          {
            name: 'germanRex',
            label: 'German Rex',
          },
          {
            name: 'havanaBrown',
            label: 'Havana Brown',
          },
          {
            name: 'highlander',
            label: 'Highlander',
          },
          {
            name: 'himalayan',
            label: 'Himalayan',
          },
          {
            name: 'japaneseBobtail',
            label: 'Japanese Bobtail',
          },
          {
            name: 'javanese',
            label: 'Javanese',
          },
          {
            name: 'karelianBobtail',
            label: 'Karelian Bobtail',
          },
          {
            name: 'khaoManee',
            label: 'Khao Manee',
          },
          {
            name: 'korat',
            label: 'Korat',
          },
          {
            name: 'koreanBobtail',
            label: 'Korean Bobtail',
          },
          {
            name: 'kornJa',
            label: 'Korn Ja',
          },
          {
            name: 'kurilianBobtail',
            label: 'Kurilian Bobtail',
          },
          {
            name: 'laPerm',
            label: 'LaPerm',
          },
          {
            name: 'lykoi',
            label: 'Lykoi',
          },
          {
            name: 'maineCoon',
            label: 'Maine Coon',
          },
          {
            name: 'manx',
            label: 'Manx',
          },
          {
            name: 'mekongBobtail',
            label: 'Mekong Bobtail',
          },
          {
            name: 'minskin',
            label: 'Minskin',
          },
          {
            name: 'munchkin',
            label: 'Munchkin',
          },
          {
            name: 'nebelung',
            label: 'Nebelung',
          },
          {
            name: 'napoleon',
            label: 'Napoleon',
          },
          {
            name: 'norweiganForestCat',
            label: 'Norweigan Forest Cat',
          },
          {
            name: 'ocicat',
            label: 'Ocicat',
          },
          {
            name: 'ojosAzules',
            label: 'Ojos Azules',
          },
          {
            name: 'oregonRex',
            label: 'Oregon Rex',
          },
          {
            name: 'orientalBicolor',
            label: 'Oriental Bicolor',
          },
          {
            name: 'orientalShorthair',
            label: 'Oriental Shorthair',
          },
          {
            name: 'orientalLonghair',
            label: 'Oriental Longhair',
          },
          {
            name: 'persianModern',
            label: 'Persian (Modern)',
          },
          {
            name: 'persianTraditional',
            label: 'Persian (Traditional)',
          },
          {
            name: 'peterbald',
            label: 'Peterbald',
          },
          {
            name: 'pixieBob',
            label: 'Pixie-bob',
          },
          {
            name: 'raas',
            label: 'Raas',
          },
          {
            name: 'ragamuffin',
            label: 'Ragamuffin',
          },
          {
            name: 'ragdoll',
            label: 'Ragdoll',
          },
          {
            name: 'russianBlue',
            label: 'Russian Blue',
          },
          {
            name: 'russianWhite',
            label: 'Russian White',
          },
          {
            name: 'russianBlack',
            label: 'Russian Black',
          },
          {
            name: 'tabby',
            label: 'Tabby',
          },
          {
            name: 'samSweet',
            label: 'Sam Sweet',
          },
          {
            name: 'savannah',
            label: 'Savannah',
          },
          {
            name: 'scottishFold',
            label: 'Scottish Fold',
          },
          {
            name: 'selkirkRex',
            label: 'Selkirk Rex',
          },
          {
            name: 'serengeti',
            label: 'Serengeti',
          },
          {
            name: 'serradePetit',
            label: 'Serrade Petit',
          },
          {
            name: 'siamese',
            label: 'Siamese',
          },
          {
            name: 'siberian',
            label: 'Siberian',
          },
          {
            name: 'singapura',
            label: 'Singapura',
          },
          {
            name: 'snowshoe',
            label: 'Snowshoe',
          },
          {
            name: 'sokoke',
            label: 'Sokoke',
          },
          {
            name: 'somali',
            label: 'Somali',
          },
          {
            name: 'sphynx',
            label: 'Sphynx',
          },
          {
            name: 'suphalak',
            label: 'Suphalak',
          },
          {
            name: 'thaiTraditionalSiamese',
            label: 'Thai (or Traditional) Siamese',
          },
          {
            name: 'thaiLilac',
            label: 'Thai Lilac',
          },
          {
            name: 'tonkinese',
            label: 'tonkinese',
          },
          {
            name: 'toyger',
            label: 'Toyger',
          },
          {
            name: 'turkishAngora',
            label: 'Turkish Angora',
          },
          {
            name: 'turkishVan',
            label: 'Turkish Van',
          },
          {
            name: 'ukranianLevkoy',
            label: 'Ukranian Levkoy',
          },
          {
            name: 'wilaKrungthep',
            label: 'Wila Krungthep',
          },
          {
            name: 'yorkChocolate',
            label: 'York Chocolate',
          },
        ],
        options: [
          {
            label: 'Select a species to display breed options',
            value: null,
          },
        ],
        section: sections[1],
      },
      {
        name: 'petPhoto',
        label: 'Photo',
        value: '',
        type: 'image',
        component: 'image',
        className: '',
        section: sections[1],
      },
    ],
    sections,
    activeSection: sections[0],
  },
  getters: {
    humanFields: state => state.fields.filter(field => field.section === sections[0]),
    petFields: state => state.fields.filter(field => field.section === sections[1]),
    sections: state => state.sections,
    activeSection: state => state.activeSection,
  },
  actions: {
    setActiveSection({ commit }, section) {
      commit('setActiveSection', section);
    },
    setBreedOptions({ commit }, species) {
      commit('setBreedOptions', species);
    },
    updateFieldValue({ commit }, { name, value }) {
      commit('updateFieldValue', { name, value });
    },
  },
  mutations: {
    setActiveSection(state, section) {
      const localState = state;
      localState.activeSection = section;
    },
    setBreedOptions(state, species) {
      const localState = state;
      const field = localState.fields.find(eachField => eachField.name === 'breed');
      if (species.toLowerCase() === 'cat') {
        field.options = field.catOptions;
      } else {
        field.options = field.dogOptions;
      }
    },
    updateFieldValue(state, { name, value }) {
      const localState = state;
      const field = localState.fields.find(eachField => eachField.name === name);
      field.value = value;
    },
  },
});
