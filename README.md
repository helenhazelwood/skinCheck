# Skin Check

_A script for checking ingredient lists for irritants and comodogens_

# Install:

- git clone to machine
- Command Line: install npm if you don't have it!
  - \$ npm install

# How to Use:

- Copy and paste your IL into the **product** variable on line ~129
- \$ node filter.js
- The script will console log two arrays, one with any ingredients that matched a substring on the blacklist, and one with only exact matches -- check the IL of your product to see if any of these potential irritants are in it
- Remember that Cetearyl Alcohol is only considered an irritant if Ceteareth 20 is _also_ on the product's IL!
