
async function createInvestmentAccount() {
    const url = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount";
    const headers = {
        "Content-Type": "application/json"
    };
    const body = JSON.stringify({
        "name": "Sahil Kumar",
        "email": "sahil1223.be21@chitkara.edu.in",
        "rollNumber": 2110991223, 
        "phone": 7888912037 
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (response.ok) {
            const data = await response.json();
            const accountNumber = data.accountNumber;
            console.log("Investment account created successfully. Account Number:", accountNumber);
            return accountNumber;
        } else {
            console.log("Failed to create investment account. Status code:", response.status);
            return null;
        }
    } catch (error) {
        console.error("Error creating investment account:", error);
        return null;
    }
}


async function buyBajajFinservStocks(accountNumber) {
    if (!accountNumber) {
        console.log("Invalid account number. Please create an investment account first.");
        return;
    }

    const bajajFinservPrice = 1234.56; 

    const url = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks";
    const headers = {
        "content-type": "application/json",
        "bfhl-auth": "2110991223" 
    };
    const body = JSON.stringify({
        "company": "Bajaj Finserv",
        "currentPrice": bajajFinservPrice,
        "accountNumber": accountNumber, 
        "githubRepoLink": "https://github.com/Sahil-Kumar7/bajaj-salesforce.git" 
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (response.ok) {
            console.log("Successfully bought Bajaj Finserv stocks.");
        } else {
            console.log("Failed to buy Bajaj Finserv stocks. Status code:", response.status);
        }
    } catch (error) {
        console.error("Error buying Bajaj Finserv stocks:", error);
    }
}


(async () => {
    const accountNumber = await createInvestmentAccount();
    await buyBajajFinservStocks(accountNumber);
})();
