import fetch from "node-fetch";

// Fetch the first question from a sample API
export async function getQuestion() {
    const response = await fetch("https://polls.apiblueprint.org/questions");
    const [{question}] = await response.json();
    return question;
}

// Run this module directly to test fetching a question
if (require.main === module) {
    getQuestion().then(question => console.log(question));
}
