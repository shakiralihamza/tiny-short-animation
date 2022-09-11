import Frog from "../assets/animal-images/frog.png";
import Butterfly from "../assets/animal-images/butterfly.png";
import Camel from "../assets/animal-images/camel.png";
import Caterpillar from "../assets/animal-images/caterpillar.png";
import Cow from "../assets/animal-images/cow.png";
import Elephant from "../assets/animal-images/elephant.png";
import Fox from "../assets/animal-images/fox.png";
import Giraffe from "../assets/animal-images/giraffe.png";
import Horse from "../assets/animal-images/horse.png";
import Koala from "../assets/animal-images/koala.png";
import Lion from "../assets/animal-images/lion.png";
import Lobster from "../assets/animal-images/lobster.png";
import PolarBear from "../assets/animal-images/polar-bear.png";
import Rabbit from "../assets/animal-images/rabbit.png";
import Reindeer from "../assets/animal-images/reindeer.png";
import Rhino from "../assets/animal-images/rhino.png";
import Shark from "../assets/animal-images/shark.png";
import Whale from "../assets/animal-images/whale.png";
import Zebra from "../assets/animal-images/zebra.png";

const animals = [
    {
        id: 1,
        name: 'Frog',
        image: Frog,
        type: 'Carnivorous',
        details: 'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura'
    },
    {
        id: 2,
        name: 'Butterfly',
        image: Butterfly,
        type: 'macrolepidopteran clade Rhopalocera',
        details: 'Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight'
    },
    {
        id: 3,
        name: 'Camel',
        image: Camel,
        type: 'even-toed ungulate',
        details: 'A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as "humps" on its back. Camels have long been domesticated and, as livestock, they provide food and textiles.'
    },
    {
        id: 4,
        name: 'Caterpillar',
        image: Caterpillar,
        type: 'larva',
        details: 'Caterpillars are the larval stage of members of the order Lepidoptera. As with most common names, the application of the word is arbitrary, since the larvae of sawflies are commonly called caterpillars as well. Both lepidopteran and symphytan larvae have eruciform body shapes.'
    },
    {
        id: 5,
        name: 'Cow',
        image: Cow,
        type: 'cloven-hooved, herbivores',
        details: 'Cattle are large, domesticated, cloven-hooved, herbivores. They are a prominent modern member of the subfamily Bovinae and the most widespread species of the genus Bos. Adult females are referred to as cows and adult males are referred to as bulls.'
    },
    {
        id: 6,
        name: 'Elephant',
        image: Elephant,
        type: 'land animals',
        details: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea.'
    },
    {
        id: 7,
        name: 'Fox',
        image: Fox,
        type: 'omnivorous',
        details: 'Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail. Twelve species belong to the monophyletic "true foxes" group of genus Vulpes.'
    },
    {
        id: 8,
        name: 'Giraffe',
        image: Giraffe,
        type: 'hoofed mammal',
        details: 'The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies.'
    },
    {
        id: 9,
        name: 'Horse',
        image: Horse,
        type: 'A domesticated animal',
        details: 'The horse is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.'
    },
    {
        id: 10,
        name: 'Koala',
        image: Koala,
        type: 'arboreal herbivorous marsupial',
        details: 'The koala or, inaccurately, koala bear is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats.'
    },
    {
        id: 11,
        name: 'Lion',
        image: Lion,
        type: 'Panthera',
        details: 'The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'
    },
    {
        id: 12,
        name: 'Lobster',
        image: Lobster,
        type: 'marine crustaceans',
        details: 'Lobsters are a family of large marine crustaceans. Lobsters have long bodies with muscular tails, and live in crevices or burrows on the sea floor. Three of their five pairs of legs have claws, including the first pair, which are usually much larger than the others.'
    },
    {
        id: 13,
        name: 'Polar Bear',
        image: PolarBear,
        type: 'hypercarnivorous',
        details: 'The polar bear is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore.'
    },
    {
        id: 14,
        name: 'Rabbit',
        image: Rabbit,
        type: 'Leporidae',
        details: 'Rabbits, also known as bunnies or bunny rabbits, are small mammals in the family Leporidae of the order Lagomorpha. Oryctolagus cuniculus includes the European rabbit species and its descendants, the world\'s 305 breeds of domestic rabbit'
    },
    {
        id: 15,
        name: 'Reindeer',
        image: Reindeer,
        type: 'circumpolar distribution',
        details: 'The reindeer, also known as the caribou in North America, is a species of deer with circumpolar distribution, native to Arctic, subarctic, tundra, boreal, and mountainous regions of range of caribou '
    },
    {
        id: 16,
        name: 'Rhinoceros',
        image: Rhino,
        type: 'odd-toed ungulates',
        details: 'A rhinoceros, commonly abbreviated to rhino, is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae. Two of the extant species are native to Africa, and three to South and Southeast Asia'
    },
    {
        id: 17,
        name: 'Shark',
        image: Shark,
        type: 'elasmobranch fish',
        details: 'Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha and are the sister group to the rays'
    },
    {
        id: 18,
        name: 'Whale',
        image: Whale,
        type: 'aquatic placental marine mammals',
        details: 'Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. They are an informal grouping within the infraorder Cetacea, which usually excludes dolphins and porpoises. Whales, dolphins and porpoises belong to the order Cetartiodactyla, which consists of even-toed ungulates'
    },
    {
        id: 19,
        name: 'Zebra',
        image: Zebra,
        type: 'African equines',
        details: 'Zebras are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy\'s zebra, plains zebra, and the mountain zebra. Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae'
    },
]


export default animals;
