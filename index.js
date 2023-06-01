

    const { Configuration, OpenAIApi } = require("openai");

    const config = new Configuration ({
        apiKey: "yourkey here"
    })


    const openai = new OpenAIApi(config);

    const prompt = "a mexican god releasing its power";
    const numberOfImages = 1;
    const imageSize = "1024x1024";

    openai.createImage({
        prompt : prompt,
        n: numberOfImages,
        size: imageSize
    }).then((data) => {
        console.log(data.data.data);
    });


