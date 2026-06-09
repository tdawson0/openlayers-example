# OpenLayers CI/CD Example

This repository is a minimal OpenLayers example app, used to demonstrate a CI/CD pipeline. 

1. Commits pushed to GitHub trigger CI using GitHub Actions. 
2. CI builds the app, serves it and tests that the server responds.
3. After CI completes successfully, Render.com automatically builds and deploys the Docker image ([Docs](https://render.com/docs/deploys#automatic-deploys)). 

The URL for the deployed app is:<br>
https://openlayers-example-cicd.onrender.com
