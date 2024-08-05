const swaggerJSDoc = require("swagger-jsdoc");
const path = require('path');


const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Ecommerse sample Api',
            version:'1.0.0',
            description:'Ecommerse api doc'
        },
        servers:[
            {url:'http://localhost:3001'}
        ]
    },
    apis:[path.join(__dirname, 'routers/*.js')]
}

const swaggerSpec=swaggerJSDoc(options)
module.exports=swaggerSpec