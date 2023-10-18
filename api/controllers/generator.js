require('dotenv').config()

const GeneratorController = {
    Create: (req, res) => {
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                "messages": [{ "role": "system", "content": `Please give me a recipe for a dinner dish that is easy to make and can be cooked in 30 minutes with the following ingredients: ${req.body.prompt}, in the following format: Name of dish: Cooking time: Short description: List of ingredients: Instructions:` }],
                "model": "gpt-3.5-turbo-16k-0613"
            })
            })
            .then(response => response.json())
            .then(data => {
                const message = data.choices[0].message.content
                console.log(message)
                res.send(message)
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }
}

module.exports = GeneratorController;

// app.post('/api/generate-recipe', (req, res) => {
//   console.log(req.body.prompt)
//   fetch('https://api.openai.com/v1/chat/completions', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
//   },
//   body: JSON.stringify({
//       "messages": [{ "role": "system", "content": `Please give me a recipe for a dinner dish that is easy to make and can be cooked in 30 minutes with the following ingredients: ${req.body.prompt}, in the following format: Name of dish: Cooking time: Short description: List of ingredients: Instructions:` }],
//       "model": "gpt-3.5-turbo-16k-0613"
//       })
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log(data.choices[0].message.content)
//       res.send(data.choices[0].message.content)
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });
// })