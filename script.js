// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cumulativeToncoinDisplay = document.getElementById('cumulative-toncoin');
    const mineButton = document.getElementById('mine-button');
    const miningStatus = document.getElementById('mining-status');
    const toncoinCount = document.getElementById('toncoin-count');
    const friendsButton = document.getElementById('friends-button');
    const supportButton = document.getElementById('support-button');
    const fetchRateButton = document.getElementById('fetch-rate-button');
    const exchangeRate = document.getElementById('exchange-rate');
    const cryptoRecommendationsButton = document.getElementById('crypto-recommendations-button');
    const cryptoRecommendations = document.getElementById('crypto-recommendations');
    const cryptoList = document.getElementById('crypto-list');
    const miningSound = new Audio('https://www.soundjay.com/button/sounds/beep-07.mp3'); // Default beep sound
    let toncoin = 0;
    let cumulativeToncoin = 0;
    let mining = false;
    const referralLink = 'https://www.example.com/referral-link'; // Replace this with your actual referral link

    // Ensure mining counts properly
    mineButton.addEventListener('click', function() {
        if (!mining) {
            mining = true;
            miningSound.play(); // Play the sound
            setTimeout(() => {
                miningSound.pause();
                miningSound.currentTime = 0;
            }, 1000); // Stop the sound after 1 second
            miningStatus.textContent = 'Mining...';
            mineButton.textContent = 'Mining Started'; // Change button text immediately
            setInterval(() => {
                toncoin += 0.0000005;
                cumulativeToncoin += 0.0000005;
                toncoinCount.textContent = `${toncoin.toFixed(7)} TON`;
                cumulativeToncoinDisplay.textContent = `Cumulative TON: ${cumulativeToncoin.toFixed(7)} TON`;
            }, 100); // Adjusted interval to 100 milliseconds
        }
    });

    friendsButton.addEventListener('click', function() {
        const url = encodeURIComponent(referralLink);
        const message = encodeURIComponent("Check out this Ton miner!");

        const whatsappLink = `https://api.whatsapp.com/send?text=${message}%20${url}`;
        const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        const telegramLink = `https://telegram.me/share/url?url=${url}&text=${message}`;

        const shareOptions = `
            <div>
                <a href="${whatsappLink}" target="_blank">Share on WhatsApp</a><br>
                <a href="${facebookLink}" target="_blank">Share on Facebook</a><br>
                <a href="${telegramLink}" target="_blank">Share on Telegram</a>
            </div>
        `;
        const shareWindow = window.open("", "Share", "width=400,height=200");
        shareWindow.document.write(shareOptions);
    });

    supportButton.addEventListener('click', function() {
        alert('Prof. Bruno is around');
    });

    fetchRateButton.addEventListener('click', function() {
        fetch('https://api.example.com/getTonExchangeRate') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                exchangeRate.textContent = `Exchange Rate: ${data.rate} TON/USD`;
            })
            .catch(error => console.error('Error fetching exchange rate:', error));
    });

    // Ensure recommendations are displayed correctly
    cryptoRecommendationsButton.addEventListener('click', function() {
        if (cryptoRecommendations.style.display === 'none') {
            cryptoRecommendations.style.display = 'block';
        } else {
            cryptoRecommendations.style.display = 'none';
        }
    });

    cryptoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('crypto-item')) {
            const coinName = event.target.getAttribute('data-coin');
            showDescription(coinName);
        }
    });

    function createBubbles() {
        const bubblesContainer = document.getElementById('bubbles-container');
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = `${Math.random() * 100}%`;
            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                bubble.remove();
            }, 3000); // Remove bubble after 3 seconds
        }
    }

    // Description Page
    function showDescription(coinName) {
        const descriptions = {
            Dogecoin: `What is Dogecoin (DOGE)
Dogecoin (DOGE) is a decentralized, open-source cryptocurrency that facilitates peer-to-peer digital transactions using its blockchain network. It was developed by software engineers Jackson Palmer and Billy Markus, debuting in December 2013. Initially a hard fork from the defunct Luckycoin, which itself branched from Litecoin (LTC), Dogecoin is effectively a third-generation fork. Despite its origins as a playful "joke coin," Dogecoin quickly gained traction and developed a dedicated community. Operating without a CEO or formal governing body, Dogecoin's momentum is largely propelled by its passionate user base. Transitioning from meme status, Dogecoin has risen to prominence in the crypto world, boasting a significant market capitalization and a remarkable 5000% return in 2021. It has garnered a wide user base and high-profile endorsements, including those from celebrities like Elon Musk and Snoop Dogg.

How does Dogecoin (DOGE) work?
Dogecoin, a derivative of Bitcoin's code, was originally a hard fork of Luckycoin, which itself branched off from Litecoin (LTC). Litecoin is noted as the first major hard fork of Bitcoin. Adopting Litecoin's Scrypt-based consensus mechanism, Dogecoin shares many features with Bitcoin and its offshoots. This choice of Scrypt for its Proof-of-Work (POW) algorithm means Dogecoin mining doesn't rely on ASICs, which are common in Bitcoin mining.

In the Dogecoin blockchain, like Bitcoin, network users contribute computing power to maintain the network, create new blocks, and validate transactions. However, Dogecoin's streamlined architecture allows for faster transaction processing compared to Bitcoin. Miners use their computational resources to create new blocks and confirm transactions by solving complex equations. Each new block rewards miners with 10,000 DOGE. Initially, creators Jackson Palmer and Billy Markus set Dogecoin's cap at 100 billion DOGE, but this limit was removed a few months post-launch. As a result, Dogecoin now has an inflationary model, introducing 5 billion new DOGE annually.

History of Dogecoin (DOGE)
Dogecoin, established as a joke at the end of 2013, was created by software developers Billy Markus and Jackson Palmer, friends on Reddit who had never met in person. Markus had worked at IBM, while Palmer was a software engineer at Adobe. Together, they shared a vision to develop a cryptocurrency that was both fun and easy to use, distinct from traditional banking systems, and offering nearly zero-fee instant transactions. They combined two popular themes from their online community at the time: the emerging cryptocurrency Bitcoin and a meme featuring a Shiba Inu with a misspelled version of the word "dog."

The story of Dogecoin began with the idea of creating a cryptocurrency more suitable for a wider audience than Bitcoin. The first step was Palmer's purchase of the Dogecoin.com domain and the establishment of the project's official website. To the creators' surprise, Dogecoin was almost immediately well-received, with dogecoin.com attracting over a million visitors in its first month.

Despite the successful launch of DOGE, neither Palmer nor Markus assumed the CEO role, highlighting the vital role of the Dogecoin community in the network's development. This was particularly evident in events such as the fundraising campaign to compensate for the millions of Dogecoins stolen in a hack attack on the now-defunct Dogewallet project, showcasing the community's remarkable spirit of unity.

Tokenomics
Token Circulation
Originally, Dogecoin was designed with a cap of 100 billion in total supply. However, shortly after DOGE's initial launch, its creators revised its monetary policy, eliminating this cap and establishing an unlimited, inflationary supply.

Projections suggest that the circulating supply of Dogecoin will double in approximately 26 years. As of now, there's no set upper limit to its total supply. New blocks on the Dogecoin blockchain are created about every minute, with each mining process rewarding 10,000 DOGE.

Why Is Dogecoin (DOGE) Valuable?
Dogecoin stands out with its marketing strategy, positioning itself as a fun and friendly digital currency for the internet. Launched in 2013 as what many saw as a "joke coin," it quickly amassed millions of followers in its first month alone.

In contrast to many cryptocurrencies and digital assets marketed as serious and revolutionary blockchain ventures, Dogecoin opted for a more relaxed image. Yet, it still boasts appealing features like minimal transaction fees, quick transfers, a vibrant and easygoing community, and a non-aggressive mining environment. Despite sharing technical similarities with Litecoin and Bitcoin, Dogecoin's distinctive approach has carved out its niche as a user-friendly online currency, ideal for small-scale transactions and appealing to social media users, content creators, and merchants. The market value of Dogecoin is shaped by the interplay of buying and selling activities, setting its price. A significant part of its value stems from its robust and supportive community and its unique positioning as a cryptocurrency tailored for internet transactions.

Dogecoin's value can also spike with high-profile endorsements, such as Elon Musk's tweets praising DOGE as one of the most intriguing digital assets, which led to a significant surge in its price, or as investors say, it went “to the moon.”

The valuation of Dogecoin and its price also mirror broader global trends influencing the overall momentum of the cryptocurrency market. The price of DOGE may fluctuate in line with these trends, often influenced by Bitcoin, the market's most dominant cryptocurrency. Additionally, the practical use of DOGE, primarily as a tool for social media incentives, tipping content creators, and facilitating small transactions with negligible fees, also contributes to its market value.     ...`,
            Bitcoin: `What is Bitcoin (BTC)?
Bitcoin is the world's first and currently the largest cryptocurrency in terms of market capitalization. It was proposed by Satoshi Nakamoto in 2008, marking the birth of digital currency and blockchain technology.

As a peer-to-peer electronic payment system, Bitcoin achieves decentralization and operates independently of government or financial institutions. All transactions are transparently recorded on the blockchain, a public distributed ledger. Bitcoin allows for easy transfers between participating users without the need for any intermediaries.

The total supply of Bitcoin is capped at 21 million, giving it scarcity similar to precious metals like gold. New Bitcoins are generated through a process in which miners use computers to engage in complex computations and maintain network security.

As a digital store of value and a medium of exchange, Bitcoin has garnered significant interest from both individual and institutional investors. Over 15,000 businesses worldwide accept Bitcoin as a payment method. While Bitcoin's price has experienced significant fluctuations, it has remained one of the best-performing financial assets in the global market for many years.

Despite its enduring dominance, Bitcoin faces regulatory challenges, including issues related to anonymity and bans in some countries. Nevertheless, as a pioneer of digital currencies, Bitcoin has a revolutionary impact on decentralization and democratization of the financial system. It has inspired and spawned thousands of other cryptocurrencies and driven the continuous application of blockchain technology across various sectors, profoundly influencing the development of the digital economy.

History of Bitcoin (BTC)
Who Created Bitcoin?
In October 2008, an anonymous individual or organization, against the backdrop of the global financial crisis, published the groundbreaking Bitcoin whitepaper, introducing the concept of a decentralized peer-to-peer electronic currency system. This person is known as Satoshi Nakamoto, but his/their true identity remains a mystery to this day.

In January 2009, Nakamoto mined the genesis block on the Bitcoin network, officially launching the world's first cryptocurrency - Bitcoin. Bitcoin initially had no monetary value and was primarily obtained through individual computer mining. As Bitcoin gradually grew, its price began to rise, and the first commercial Bitcoin transaction occurred in 2010.

After the birth of Bitcoin, Nakamoto transferred control of the network to core developers, and the Bitcoin code continued to be enhanced by numerous developers. However, Nakamoto's personal information remains concealed in mystery, mirroring the decentralized and open nature of Bitcoin.

History
In 2008, Satoshi Nakamoto introduced the concept of decentralized cryptocurrency - Bitcoin and the underlying blockchain technology.
In January 2009, Nakamoto mined the genesis block, marking the official birth of Bitcoin.
In 2010, the world's first Bitcoin exchange, Bitcoin Market, was established, allowing people to exchange fiat currency for Bitcoin, and Bitcoin entered the phase of practical transactions.
Starting in 2011, the price of Bitcoin began to fluctuate and rise, bringing the concept of cryptocurrencies into the public eye.
In 2013 and 2017, Bitcoin's price reached historical highs, sparking a cryptocurrency craze and leading to the emergence of many new digital assets. However, in 2018, Bitcoin experienced a significant downturn, and the cryptocurrency market underwent a correction.
In 2021, Bitcoin's price once again surged to historic highs, attracting the attention of many institutional investors. However, cryptocurrency platform security incidents in 2022 led to a significant drop in the price of Bitcoin.
How Does Bitcoin Work?
Bitcoin, as a digital currency, is highly regarded for its decentralized, transparent, and secure nature. The following will explore how Bitcoin works and facilitates transactions while ensuring security.

Blockchain Technology
The Bitcoin network operates using blockchain technology. A blockchain is a continuously growing public distributed ledger that records all Bitcoin transactions. It is composed of a series of blocks, with each block containing the encrypted hash of the previous block, a timestamp, and transaction data. Bitcoin nodes use the blockchain to verify the legitimacy of transactions and prevent double spending.

Decentralized Nature
Bitcoin is designed to resist censorship. All Bitcoin transactions are recorded on the public blockchain, enhancing transparency and preventing any single entity from controlling the network. This makes it difficult for governments or financial institutions to control or interfere with the Bitcoin network and its transactions.

Mining and Proof of Work
New Bitcoins are generated through the process of mining. Mining is the process of verifying and recording transactions and requires solving complex mathematical puzzles, known as proof of work. Miners can add transactions to the blockchain and earn Bitcoin rewards only if they can solve this puzzle. This incentive encourages people to participate in mining and ensures the predictable and fair creation of new Bitcoins.

What is Bitcoin mining?
Let's compare Bitcoin to a commercial bank, which is a centralized system. In the case where Alice wants to make a transaction with Bob, the bank is the entity that holds the ledger of Alice and Bob's balances. Since the bank maintains this ledger, it will verify if Alice has sufficient funds to pay Bob. Ultimately, when the transaction is successful, the bank deducts the funds from Alice's account and updates Bob's account with the new amount.

In contrast, Bitcoin operates in a decentralized manner. As there is no central authority, such as a bank, to validate transactions and maintain the ledger, copies of the ledger are distributed across countless Bitcoin nodes. Anyone can download the data from nodes and run nodes to participate in the Bitcoin network. Therefore, everyone participating in the network has a copy of Alice and Bob's balances, leaving no room for disputes over the funds.

Now, if Alice wants to make a Bitcoin transaction with Bob, she must broadcast her intention to send an equivalent of 1 US dollar worth of Bitcoin to Bob to the network. How does the system determine if Alice has enough Bitcoin to carry out the transaction?

This is where mining comes into play. Bitcoin miners use their computer devices to verify if Alice's transaction is added to the ledger. To prevent miners from arbitrarily adding transactions, they need to solve a complex puzzle. Only when miners solve this puzzle, known as proof of work, they can add the transaction to the ledger. Since there are numerous miners trying to solve this puzzle at the same time, the process of recording happens randomly.

As running computer devices comes with costs, including equipment and electricity expenses, miners receive new Bitcoin supply as a reward. This is the monetary system behind Bitcoin, where the cost of verifying transactions on the network is paid by the individuals who want to transact (in this case, Alice).

This system enables Bitcoin to counter fraud without requiring trust. Despite its robustness, there are still some risks, such as the "51% attack" where a miner controls over 51% of the total computing power, and security risks outside of the Bitcoin protocol.

How Bitcoin Transactions Work
To make Bitcoin transactions, you need a Bitcoin wallet. A Bitcoin wallet is where you store your Bitcoin, and you can use it to receive and send Bitcoin. When you want to make a payment, simply send Bitcoin to the recipient's wallet address, and miners will verify and record the transaction on the blockchain. Bitcoin transactions are fast, low-cost, and secure.

Energy Consumption Issue
The Bitcoin network consumes a significant amount of energy as the computers verifying and recording transactions require substantial power. While some mining facilities have shifted to using renewable energy, critics argue that this consumption is unsustainable. However, supporters believe that, as the Bitcoin network develops and matures, it will become more efficient.

Ownership of Bitcoin
The ownership of Bitcoin is decentralized, with no central entity having control or deciding changes or upgrades. The Bitcoin community and organizations like the Bitcoin Foundation play an active role in promoting its adoption and maintenance. The Bitcoin Foundation is a nonprofit organization dedicated to the promotion of Bitcoin and blockchain technology for the benefit of global users.

Tokenomics
Bitcoin (BTC), as the first decentralized digital currency, possesses a unique economic model and supply mechanism, making its token utility and distribution of significant interest.

How many Bitcoins are there?
Bitcoin's total supply is limited to 21 million, in contrast to central banks that can print fiat currency indefinitely. Over time, due to various factors like lost private keys, a substantial portion of Bitcoin is permanently lost. It is estimated that around 20% of Bitcoin is permanently lost, reducing the circulating supply, which can have a positive impact on its value. Currently, Bitcoin's circulating supply is approx
