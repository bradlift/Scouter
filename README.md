# Getting Started

0. Download Scouter.zip from Releases. Unzip the file and navigate into the `Scouter` folder in a terminal window
1. if this is your first time, run `npm install` to install dependencies 
2. Copy/paste the sample query into a Looker SQL Runner window
3. Click on the dots next to the `API_String` column and click `Copy values`
4. Open `index.js` in a text editor, and paste these values into the `pasteHere` array
5. Make sure each value is in the format of `winningRTBid_creativeID`, and also make sure each value is inside of quotes "" and has a comma after the quotes
6. Save your changes to `index.js`
7. In the terminal, run `npm run clear` to ensure that the `bid_responses` folder is empty
8. Next, run `npm run start` to request bid responses for those creatives
9. BR.json files from sSuccessful requests will automatically be saved into the `bid_responses` folder
10. Once all requests are completed, the BR.json files will be served on localhost via a python3 server (which can be used in VX demo app via the online bid response model)


### See Looker_sample_query.sql for an example you can paste into Looker SQL runner. 
- Replace the values for `adomain` and `winner_account_id` and/or uncomment the 7 day filter
- Notice the `API_String` field formed by combining `winner_account_id` and `external_creative_id`. The `CONCAT` used in the example will also enclose values with "" and end it with a comma, which makes it easier to copy into index.js



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








