import clientMistral from "../config/mistral.config.js"

const chatIAService = {
    async initChat (promt) {
        const ia = await clientMistral.chat.complete({
            model: 'mistral-large-latest',
            messages: [{role: 'user', content: promt}],
          });
          return ia.choices[0].message.content;
    }
}

export default chatIAService;