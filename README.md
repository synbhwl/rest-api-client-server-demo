# REST API Client-Server Demo

## Project Overview
This project is a simple demo of a client-server architecture built using **Node.js**, **Express**, and **Axios**. It demonstrates interaction via REST API, with the server exposing a set of CRUD operations on a list of tech products, simulating a minimal e-commerce backend.

## Features
- **Separation of Concerns**: Cleanly divided into `server.js` and `client.js`.
- **REST API Principles**: Designed around standard REST conventions.
- **CRUD Operations**: Client can Create, Read, Update, and Delete products on the server.
- **Data Simulation**: Server holds an in-memory product list as mock data.
- **Dev Convenience**: Uses `nodemon` to auto-restart the server on changes.

## Tech Stack
- **Node.js**: v13.14.0
- **Express**: v4.17.1
- **Axios**: v1.10.0
- **Nodemon**: For development-time server restarts

## Purpose
- Practice building and consuming REST APIs
- Understand client-server interaction using HTTP methods
- Gain hands-on experience with CRUD in a backend context

## Limitations
- Built on **Windows 7**, limiting support for modern tooling and modules
- Frontend not added due to **CommonJS vs ES6 module** conflict; adding one would break separation of concerns
- No CLI input interface yet — may be added later if required