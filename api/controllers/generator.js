require('dotenv').config()

const GeneratorController = {
    Create: (req, res) => {
        console.log("New recipe being generated")
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{
                    "role": "system",
                    "content": "You are a authentic cooking website. When you respond can you format the layout *Title,  *Intro, *Time, *Serves,  *Calories  *Ingredients, *Instructions (Please keep the '*' characters before each section so I can easily split into array). \n\n"
                    },   
                    { "role": "user", "content": `${req.body.prompt}`}
                    ],
                "temperature": 0.83,
                "max_tokens": 750,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const message = data.choices[0].message.content
                console.log(message)
                res.status(200).send({message: message})
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }
}

module.exports = GeneratorController;