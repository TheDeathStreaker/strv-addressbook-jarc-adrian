/* eslint-disable camelcase */
'use strict'

const os = require('os')
const admin = require('firebase-admin')
const env = require('./environment')

const type = env('FIREBASE_TYPE')
const project_id = env('FIREBASE_PROJECT_ID')
const private_key_id = env('FIREBASE_PRIVATE_KEY_ID')
const private_key = env('FIREBASE_PRIVATE_KEY')
const client_email = env('FIREBASE_CLIENT_EMAIL')
const client_id = env('FIREBASE_CLIENT_ID')
const auth_uri = env('FIREBASE_AUTH_URI')
const token_uri = env('FIREBASE_TOKEN_URI')
const auth_provider_x509_cert_url = env('FIREBASE_AUTH_PROVIDER_X509_CERT_URL')
const client_x509_cert_url = env('FIREBASE_CLIENT_X509_CERT_URL')

const databaseURL = env('FIREBASE_DATABASE_URL')

console.log(os.homedir())

const serviceAccount = {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
}

console.log(serviceAccount)


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
})

console.log(admin)

module.exports = {}
