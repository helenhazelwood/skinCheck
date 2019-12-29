const arr = [
  `Acetylated Lanolin`,
  `Acetylated Lanolin Alcohol`,
  `Algae Extract`,
  `Algin`,
  `Butyl Stearate`,
  `Butyrospermum Parkii (shea) Butter`,
  `Butyrospermum Parkii Butter`,
  `Carrageenan`,
  `Cetyl Acetate`,
  `Cetearyl Alcohol`,
  `Ceteareth 20`,
  `Chondrus Crispus`,
  `Irish Moss`,
  `Carrageenan Moss`,
  `Chlorella`,
  `Coal Tar`,
  `Cocoa Butter`,
  `Coconut Alkanes`,
  `Coconut Butter`,
  `Coconut Oil`,
  'Cocos Nucifera (Coconut) Oil',
  'Cocos Nucifera Oil',
  `Colloidal Sulfur`,
  `Cotton Awws Oil`,
  `Cotton Seed Oil`,
  `D & C Red # 17`,
  `D & C Red # 21`,
  `D & C Red # 3`,
  `D & C Red # 30`,
  `D & C Red # 36`,
  `Decyl Oleate`,
  `Dioctyl Succinate`,
  `Disodium Monooleamido PEG 2-Sulfosuccinate`,
  `Ethoxylated Lanolin`,
  `Ethylhexyl Palmitate`,
  `Glycine Soja (Soybean) Seed Extract`,
  `Glyceryl Stearate SE`,
  `Glyceryl-3 Diisostearate`,
  `Hexadecyl Alcohol`,
  `Hydrogenated Vegetable Oil`,
  `Isocetyl Alcohol`,
  `Isocetyl Stearate`,
  `Isodecyl Oleate`,
  `Isopropyl Isostearate`,
  `Isopropyl Linolate`,
  `Isopropyl Myristate`,
  `Isopropyl Palmitate`,
  `Isostearyl Isostearate`,
  `Isostearyl Neopentanoate`,
  `Kelp`,
  `Lactobacillus/Nereocystis Luetkeana Ferment Filtrate (Sea Kelp Bioferment)`,
  `Sea Kelp Bioferment`,
  `Lactobacillus`,
  `Laminaria Digitata Extract`,
  `Laminaria Saccharina Extract`,
  `Laminaria Saccharine`,
  `Laureth-23`,
  `Laureth-4`,
  `Lauric Acid`,
  `Mink Oil`,
  `Myristic Acid`,
  `Myristyl Lactate`,
  `Myristyl Myristate`,
  `Octyl Palmitate`,
  `Octyl Stearate`,
  `Oleth-3`,
  `Oleyl Alcohol`,
  `PEG 16 Lanolin`,
  `PEG 200 Dilaurate`,
  `PEG 8 Stearate`,
  `PG Monostearate`,
  `PPG 2 Myristyl Propionate`,
  `Plankton`,
  `Polyglyceryl-3 Diisostearate`,
  `Potassium Chloride`,
  `Propylene Glycol Monostearate`,
  `Red Algae`,
  `Seaweed`,
  `Shark Liver Oil`,
  `Squalene`,
  `Shea Butter`,
  `Sodium Laureth Sulfate`,
  `Sodium Lauryl Sulfate`,
  `Solulan 16`,
  `Sorbitan Oleate`,
  `Soybean Oil`,
  `Spirulina`,
  `Steareth 10`,
  `Stearic Acid Tea`,
  `Stearyl Heptanoate`,
  `Sulfated Castor Oil`,
  `Sulfated Jojoba Oil`,
  `Wheat Germ Glyceride`,
  `Wheat Germ Oil`,
  `Xylene`,
];

let regex = /\W/gi;
const blacklist = arr.map(ingredient =>
  ingredient.replace(regex, '').toLowerCase()
);

//this filter might miss ingredients in the IL argument that contain additional characters (ex, english version of a latin name, explanation of what an ingredient is -- see paula's choice ingredient lists)
const filter = str => {
  const ingredients = str.split(', ');
  return ingredients.filter(ingredient =>
    blacklist.includes(ingredient.replace(regex, '').toLowerCase())
  );
};

//this filter is over-zealous, and will return a match if any substring in the IL argument matches a substring in the blacklist
const filter2 = str => {
  const ingredients = str.split(', ');
  const ret = [];
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < blacklist.length; j++) {
      let match = blacklist[j].match(
        ingredients[i].replace(regex, '').toLowerCase()
      );
      if (match) {
        ret.push(ingredients[i]);
      }
    }
  }
  return ret;
};

const product = `Water, Glycerin, Butylene Glycol, Niacinamide, 1,2-Hexanediol, Hydroxyacetophenone, Hydroxyethylcellulose, PEG-60 Hydrogenated Castor Oil, Threhalose, Chlorphenesin, Allantoin, Arginine, Carbomer, Dipropylene Glycol, Dipotassium Glycyrrhizate, Disodium, EDTA, Sodium Hyaluronate, Panthenol, Fragrance, Portulaca Olearacea Extract, Glyceryl Acrylate/Acrylic Acid Copolymer, PVM/MA Copolymer, Melaleuca Alternifolia (Teat Tree) Leaf Extract, Lavendula Angustifolia (Lavender) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Chamomilla Recutita (Matricaria) Flower extract, Mentha piperita (peppermint) Leaf Extract, Diamong powder, Centella Asiatica Extract, Bambusa Bulgaris Extract, Pinus Densiflora Leaf Extract, Thuja Orientalis Extract, CHamercyparis Obtusa Leaf Extrat, Hydrolyzed Collagen, Phenoxyethano`;

console.log(
  'Intense filter:',
  filter2(product),
  '\nLite filter:',
  filter(product)
);
module.exports = filter;
