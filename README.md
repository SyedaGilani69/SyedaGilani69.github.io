🪙 Crypto Dashboard Web App – Documentation
📋 Overview
This is a responsive, multi-page cryptocurrency web application that fetches real-time data, news, and coin info from the CryptoCompare API. It allows users to:

View top traded coins on the homepage.

Browse all available coins in a searchable table.

Stay up-to-date with the latest crypto news.

Search for any coin to get real-time pricing and volume data.

🚀 How to Use the Application
🏠 Homepage (/)
Displays a list of the top cryptocurrencies by 24h volume, using real-time data. Each item shows:

Coin name, icon, symbol

Price in USD

Market cap

24h volume

24h change %

💰 Coins Page (/coins)
Displays a full list of available cryptocurrencies in a searchable, sortable table.

Each row shows:

Coin name & icon

Symbol

Trading status

Link to detailed overview (from CryptoCompare)

📰 News Page (/news)
Pulls in the latest crypto-related news articles.

Each article includes:

Image

Title & summary

Link to the full story

📊 Data Search Page (/data)
Allows users to search for any coin by symbol (e.g. BTC, ETH).

Displays:

Live price (USD & EUR)

24h market change

Volume

Market cap

Last updated timestamp

🔌 API Integration: CryptoCompare
All data is fetched from the CryptoCompare API.

🔐 Authentication
All requests include a required API key as a query parameter:

ruby
Copy
Edit
?api_key=YOUR_API_KEY_HERE
📡 Endpoints Used

Feature	Endpoint URL	Description
Homepage data	https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD	Gets top coins by total volume.
Coin list	https://min-api.cryptocompare.com/data/all/coinlist	Returns metadata for all coins.
News articles	https://min-api.cryptocompare.com/data/v2/news/?lang=EN	Returns latest crypto news.
Coin price data	https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR	Fetches full price data for a given coin symbol.
🛠️ Technologies Used
🔧 Core Tools
HTML5, CSS3, and JavaScript (ES6+)

Bootstrap 5.3 – For responsive styling and layout

Fetch API – For making async requests to the CryptoCompare endpoints

🔗 APIs
CryptoCompare API (https://min-api.cryptocompare.com/)

🎨 UI Features
Fully responsive design

Live price & market updates

Clean Bootstrap card/grid layouts

Navigation bar for quick access to pages

📁 Project Structure
kotlin
Copy
Edit
/index.html          // Homepage
/coins.html          // Coins listing
/news.html           // Latest news
/data.html           // Coin search
/assets/             // Images, optional custom styles
📝 Notes
All data is updated live using CryptoCompare's free tier.

If using in production, consider securing the API key via backend proxy or serverless functions.

Customize Bootstrap classes or add themes to match brand style.