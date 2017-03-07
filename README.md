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
* Backend is Golang
* Authentication is EVE ESI and JWTs
* Data Storage is Redis and Postgresql
* Client hosting is S3 + Cloudfront
* API hosting is an AWS load balancer and spot instances.

## Roadmap

1. API Core
2. API Auth Module
3. Client Home Page
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