# 🔥 GDS and mkdocs


> GOV.UK Design System Template for MKDocs for our Open Source projects, and deployed on GOV.UK PaaS
 

## The proposal


We have a few projects in our [GitHub organisation](https://github.com/uktrade/) that are/can be useful to the public in general.

We can have information in their READMEs, which is "ok", but so far no consistent way of something a bit beefier. This project is to

1. make a template mostly using the GOV.UK Design System for MKDocs
2. use it for one of the open source projects (to make sure that the template is fit for purpose)
3. make it deployable on GOV.UK PaaS (to make sure that it's deployable on regular/authorised infrastructure without too much trouble)

[HTTPX](https://www.python-httpx.org/) to me seems like a good set of docs to be inspired by, as well as the docs for the design system itself https://design-system.service.gov.uk/

Note that the design system docs themselves use elements not in the design system. Think we have to be free to do that.

[Note a Ruby version of this exists](https://github.com/alphagov/tech-docs-template), but I think there is value in an MKDocs/Python version.

I suggest a very iterative approach

- get a shockingly basic template going, 
- make documentation say with just 1 line of content, 
- and deploy on PaaS (with just a cf push). So from day 1 (ish), we have aspects of all 1, 2 and 3, and we'll out very early on if there is something wrong with the plan and we'll need to change it.

## The benefits

We'll have a constent way of documenting our open source projects, and this could also be used by Other Government Departments as well

## The skills needed#
1 developer with experience of HTML and CSS

## The amount of people needed#
1

![alt text](img/library-books.jpeg)