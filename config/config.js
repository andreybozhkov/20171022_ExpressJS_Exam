module.exports = {
    development: {
        port: process.env.PORT || 27017,
        dbPath: 'mongodb://localhost:27017/db'
    },
    production: {}
};