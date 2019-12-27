const { expect } = require('chai');
const filter = require('./filter');

describe('filter function', () => {
  it('returns an array', () => {
    expect(Array.isArray(filter('Water, Dimethicone'))).to.deep.equal(true);
  });

  it('the return array contains the blacklisted ingredients', () => {
    expect(
      filter(
        `Aqua (Water), Caffeine, Maltodextrin, Glycerin, Propanediol, Epigallocatechin Gallatyl Glucoside, Gallyl Glucoside, Hyaluronic Acid, Oxidized Glutathione, Melanin, Glycine Soja (Soybean) Seed Extract, Urea, Pentylene Glycol, Hydroxyethylcellulose, Polyacrylate Crosspolymer-6, Xanthan gum, Lactic Acid, Dehydroacetic Acid, Trisodium Ethylenediamine Disuccinate, Propyl Gallate, Dimethyl Isosorbide, Benzyl Alcohol, 1,2-Hexanediol, Ethylhexylglycerin, Phenoxyethanol, Caprylyl Glycol`
      )
    ).to.deep.equal([`Glycine Soja (Soybean) Seed Extract`]);
  });
});
