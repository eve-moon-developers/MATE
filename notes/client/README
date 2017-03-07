This repository contains the static files for the Eclipse MATE Application. It is designed to be hosted on a CDN service such as S3/Cloudfront.

Try to keep all sources internal. (This may not be best practice, but later there may be some compilation techniques used.)


Directory Structure

Each tool gets a page. Sub-sections are hashpaths. Javascript must load everything else.

/index.html (homepage)

/common/ (Things shared between all tools. For compatibility reasons.)
/common/src/ (Common javascript files written by us.)
/common/ext/ (Common javascript files written by someone else.)
/common/style/
/common/image/
/common/font/
/common/html/
/common/data/

/{module}.html (Homepage for the module)
/{module}/... Follows the same structure as common.

/error/ (Contains common error pages with redirection back to the home page)

---
Summary of Modules:

auth
	User login
	Alt Tie In
	Managing your account basically
client
	The "browsing" area of the site. News / blogs / snipits.
	User documentation as well.
	Should probably contain an editor.
comms
	How people get hooked up to various services.
fleet
	Fleet tracking
	Scheduling
	Timers
combat
	Combat logs
srp
	SRP Request and approval
doctrine
	Doctrine ships
	Skillplans
	Corp Readiness
hr
	Applications and what not.
admin
	Admin panel. Server can be configured here.

While anyone can get all of the source code to this public site, without valid JWT keys, they can't do anything or load important data.

* Note that classified data like blogs should be stored in the database, hidden behind an API key.
* Fast caching can be setup if needed.
