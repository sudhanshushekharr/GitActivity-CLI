const https=require('https');


const username=process.argv[2];
if (!username) {
    throw new Error("Error: Please provide a username.");
}
console.log(`Fetching GitHub activity for user: ${username}`);

const apiUrl = `https://api.github.com/users/${username}/events`;

https.get(apiUrl, { headers: { 'User-Agent': 'node.js' } }, (response) => {
    let data = ''; // To accumulate chunks of data
    
    // Listen for data chunks
    response.on('data', (chunk) => {
        data += chunk;
    });
    
    // End of response
    response.on('end', () => {
        try {
            const events = JSON.parse(data); // Parse JSON
            console.log('Recent GitHub activity:');
            events.forEach((event, index) => {
                if (index < 5) { // Display only the first 5 events
                    console.log(`- ${event.type} in ${event.repo.name}`);
                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err.message);
        }
    });
}).on('error', (err) => {
    console.error('Error fetching data:', err.message);
});

