const {Configuration, OpenAIApi} = require("openai");

const API_KEY = "sk-gNnuwacVBJ0w9vuYk5RT3BlbkFJg9LNuiOiqE5brf8wK1YGR";

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
