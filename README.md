# Skin Check

_A script for checking ingredient lists for irritants and comodogens_

## Install:
- download node.js and npm if you don't have them: (you can also use homebrew if you have it -- $brew install node)
   - $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
   - $ nvm install node
- git clone and cd into the git repo
- install node modules:
  - \$ npm install

## How to Use:

- Copy and paste your IL into the **product** variable on line ~129
- \$ node filter.js
- The script will console log two arrays, one with any ingredients that matched a substring on the blacklist, and one with only exact matches -- check the IL of your product to see if any of these potential irritants are in it
- Remember that Cetearyl Alcohol is only considered an irritant if Ceteareth 20 is _also_ on the product's IL!
