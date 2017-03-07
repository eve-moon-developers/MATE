# EVE-MATE
EVE Moon Alliance Tracking and Enhancers



## About

MATE is a comprehensive replacement for Alliance Auth, a commonly used web application for groups in the video game EVE Online.



## File Structure

MATE is broken into a number of logical directories, each containing a README file describing the directory.

Structure Overview

* /client/ - Files pertaining the the web browser. These will be hosted on AWS S3.
* /deployment/ - Scripts and files pertaining to deploying MATE.
* /documentation/ - Documentation on setting up and using MATE.
* /installation/ - Scripts and files pertaining to installing MATE.
* /notes/ - Markdown files containing notes and thoughts.
* /server/ -  Files pertaining to the API.

## Technologies

To summerize the technologies used by MATE:
* Frontend is Bootstrap 4 + AngularJS.
* Backend is Golang (httprouter + gorilla handlers)
* Authentication is EVE ESI and JWTs
* Data Storage is Redis and Postgresql
* Client hosting is S3 + Cloudfront
* API hosting is an AWS load balancer and spot instances.

## Roadmap

1. API Core
2. API Auth Module
3. Client Home Page
* Dev Release
4. Client Auth Module
5. Client Member Module
6. API Member Module
7. API Auth Module
* Alpha Release
8. Client Fleet Module
9. API Fleet Module
10. API Comms Module
11. Client Comms Module
* Beta Release

## Simple, Stateless, Restful
The MATE application is based on 3 principles:
1. Simple Single page client modules
    * Simple means a single page is loaded containing everything to start showing information about the server.
2. Stateless micro-applications on the server
    * Stateless means instances of the API routing can be quickly scaled up and down based on need using spot instances.
3. RESTful communication between the two
    * A standard interface that is well defined, means the client knows what to expect.

### For example:
* Client
    * Fleet modules builds site based on API results.
* Server
    * Once a fleet is closed, the server calculates fleet-hour contributions.
* API
    * The fleet client can pull a list of past fleets using a JWT.