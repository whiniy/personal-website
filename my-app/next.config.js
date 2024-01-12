/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const mongoose = require('mongoose')

const connection_url = "mongodb+srv://winnieTuser:winnieTuserPassword@cluster0.ibxdld2.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error('Could not connect'))