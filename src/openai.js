const {Configuration, OpenAIApi} = require("openai");

const API_KEY = "sk-AK5O0vx0O2RiOMKgboQL3T3BlbkFJ8fcLn0FHJSQSnjmPNT3";

const configuration = new Configuration({
    apiKey : API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(message) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.5,
        max_tokens: 256,
        frequency_penalty: 0,
        presence_penalty: 0
    })

    return response.data.choices[0].text;
}
