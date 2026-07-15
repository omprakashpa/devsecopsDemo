/*
====================================================
config.js

Contains intentionally hardcoded secrets to
demonstrate SAST findings.

====================================================
*/

module.exports = {

    // ====================================================
    // Application Configuration
    // ====================================================

    APP_NAME: "DevSecOps Vulnerable Demo",

    PORT: 3000,

    ENVIRONMENT: "development",

    // ====================================================
    // Intentionally Hardcoded Secrets 
    // ====================================================

    API_KEY: "demo-api-key-123456789",

    JWT_SECRET: "mySuperSecretJWTKey",

    DB_USERNAME: "admin",

    DB_PASSWORD: "Password@123",

    ENCRYPTION_KEY: "12345678901234567890123456789012",

    AWS_ACCESS_KEY: "AKIAEXAMPLEKEY12345",

    AWS_SECRET_KEY: "EXAMPLESECRETKEY1234567890",

    // ====================================================
    // Database Configuration
    // ====================================================

    DB_HOST: "localhost",

    DB_PORT: 3306,

    DB_NAME: "demo_db"

};
