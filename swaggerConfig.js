const { version } = require("mongoose");
const swaggerJSDoc = require("swagger-jsdoc");

const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Ecommerse sample Api',
            version:'1.0.0',
            description:'E commerse api doc'
        },
        servers:[
            {url:'http://localhost:3001'}
        ]
    },
    apis:['./routers/*.js']
}

const swaggerSpec=swaggerJSDoc(options)
module.exports=swaggerSpec