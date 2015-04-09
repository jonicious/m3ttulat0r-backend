m3ttulat0r
==========
We love Mett. At work, we have a tradition called “Mettwoch”. Every wednesday, one brings Mett. Since the number of participants varies from time to time, the challenge is to know how much Mett and how many buns we need. Entering m3ttulat0r.

m3ttulat0r solves all these problems. Users can enter the number of halves of mett buns they want to eat this wednesday. m3ttulat0r automatically calculates the necessary amount of Mett and buns. Every week another person brings Mett, so this person needs to get notified about how much Mett and how many buns he has to bring.

## Run locally

Run a mysql database named 'm3ttulat0r' locally on port 3306. You can use ``create.sql`` to create neccessary tables. To run the server locally, run ``node server.js``. The server will run at port 8080.

## Supported endpoints

The following endpoints are supported.

* /get/mettday
* /calc/mett/:mettwochId
* /mettmeister/:mettwochId
* /mettmeister
* /participate/:mettwochId
* /participate/:mettwochId/:name
* /healthcheck

You can use the OPTIONS HTTP request to get more information about each endpoint, e.g. ``curl -X OPTIONS http://localhost:8080/mettmeister``.

## Collaboration

If you have more ideas, do not hesitate to create an issue. And of course: Go head, fork this repo and submit a pull request!
