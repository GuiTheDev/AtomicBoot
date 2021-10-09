const axios = require('axios');
const googleImage = require('@marsron/google-image')
require('dotenv').config({ path: '../.env' });

module.exports = {
    name: "earthquake",
    aliases: ["eq"],
    permissions: [],
    description: "Earthquakes!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const q = args[0];
        const appid = '9042a36e782d217b12578eead8ba38f2';
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=${appid}`)
            .then((res) => {
                console.log('RES: ', console.log(res.data))
                googleImage(res.data.name)
                    .then(results => {
                        image = results
                        const weatherEmbed = {
                            color: 0x0099ff,
                            title: `Weather in ${res.data.name} !`,
                            thumbnail: {
                                url: image[0].url,
                            },
                            fields: [
                                {
                                    name: 'Sky: ',
                                    value: `${res.data.description}`,
                                },

                                {
                                    name: 'Current Temperature: ',
                                    value: `${res.data.temp}C°`
                                },

                                {
                                    name: 'Min Temp. : ',
                                    value:`${res.data.temp_min}C°`
                                },

                                {
                                    name: 'Max Temp. : ',
                                    value:`${res.data.temp_max}C°`
                                },

                                {
                                    name: 'Humidity : ',
                                    value:`${res.data.humidity}`
                                }

                            ],
                            timestamp: new Date(),
                            footer: {
                                text: '☁️ Weather in your town!',
                            },
                        };
        
                        message.channel.send({ embeds: [weatherEmbed] });
                        

                    })
                    .catch(error => {
                        console.error(error)
                    })


            })
            .catch((err) => {
                console.error(err)
            })


        
    }
}