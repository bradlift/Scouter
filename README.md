# Getting Started

0. Download Scouter.zip from Releases (Initial release - v1.0.0)
1. Unzip the file and navigate into the Scouter folder in a terminal window
2. if this is your first time, run `npm install` to install dependencies 
3. Copy/paste the sample query into a Looker SQL Runner window
4. Click on the dots next to the _API_String_ column and click _Copy values_
5. Open _index.js_ in a text editor, and paste these values into the `pasteHere` array
6. Make sure each value is in the format of `winningRTBid_creativeID`, and also make sure each value is inside of quotes "" and has a comma after the quotes
7. Save your changes to _index.js_
8. In the terminal, run `npm run clear` to ensure that the bid_responses folder is empty
9. Next, run `npm run start` to request bid responses for those creatives
10. BR.json files from successful requests will automatically be saved into the bid_responses folder
11. Once all requests are completed, the BR.json files will be served on localhost via a python3 server (which can be used in VX demo app via the online bid response model)


### See Looker_sample_query.sql for an example you can paste into Looker SQL runner. 
- Replace the values for _adomain_ and _winner_account_id_ and/or uncomment the 7 day filter
- Notice the _API_String_ field formed by combining _winner_account_id_ and _external_creative_id_. The `CONCAT` used in the example will also enclose values with "" and end it with a comma, which makes it easier to copy into index.js



# Setup/Troubleshooting
## check for python3, node, and npm
```
python3 --version
node -v
npm -v
```

## if any of these are missing, install with homebrew

### check for homebrew
`brew -v`

### Install homebrew (Mac/Linux)
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

### Install as needed
`brew install python3, node, npm`








