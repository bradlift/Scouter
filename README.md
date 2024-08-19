
#check for python3
python3 --version

#check for homebrew
brew -v

#Install homebrew (Mac/Linux)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

#check for node and npm
node -v
npm -v


#If python3, node, and npm are all installed, you can run the following command to install dependencies 
npm install

#See Looker_sample_query.sql for an example you can paste into Looker SQL runner. 
- Replace the values for adomain and winner_account_id and/or uncomment the 7 day filter
- Notice the API_String field formed by combining rtb_id and CRID. The CONCAT used in the example will also enclose values with "" and end it with a comma, which makes it easier to copy into index.js


#Usage:
1. Copy/paste the sample query into a Looker SQL Runner window
2. Click on the dots next to the "API_String" column and click "Copy values"
3. Open index.js in a text editor, and paste these values into the "pasteHere" array
4. Make sure each value is in the format of winningRTBid_creativeID, and also make sure each value is inside of quotes "" and has a comma after the quotes
5. Save your changes to index.js
6. In the terminal, run "npm run clear" to ensure that the bid_responses folder is empty
7. Next, run "npm run start" to request bid responses for those creatives
8. BR.json files from sSuccessful requests will automatically be saved into the bid_responses folder
9. Once all requests are completed, the BR.json files will be served on localhost via a python3 server (which can be used in VX demo app via the online bid response model)



