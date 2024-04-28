import puppeteer from 'puppeteer';
import fs, { link } from 'fs';

const ALL_LINKS = 'links.json';
const VOTE_LINKS = 'voteLinks.json';
const VOTE_PHRASE = 'roll_call_votes';


async function scrapeWebsite(url: string) {
    console.log('Scraping Website...')
    // Launch the browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log('Navigating to the URL...')
    // Navigate to the initial URL
    await page.goto(url);

    console.log('Gathering links...')
    // Example: gather links to follow
    const links = await page.$$eval('a', anchors => anchors.map(a => a.href));

    fs.writeFileSync(ALL_LINKS, JSON.stringify(links, null, 2));

    console.log('Filtering links...')

    // Get links that go to vote pages
    const voteLinks = links.filter(link => link.includes(VOTE_PHRASE));

    fs.writeFileSync(VOTE_LINKS, JSON.stringify(voteLinks, null, 2));

    for (const link of voteLinks) {
        await page.goto(link);
        let votesPerSenator = await page.$eval('.newspaperDisplay_3column', table => table.innerHTML);

        votesPerSenator = votesPerSenator.replace(/<[^>]*>/g, '');

        console.log(votesPerSenator);

        fs.appendFileSync('votes.txt', votesPerSenator);
    }

    // Close the browser
    await browser.close();
}

// Usage
scrapeWebsite('https://senate.gov/legislative/votes_new.htm').catch(err => console.error(err));

