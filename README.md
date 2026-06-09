# OpenLayers CI/CD Example

This repository is a minimal OpenLayers example app, used to demonstrate a CI/CD pipeline. 

1. Commits to GitHub trigger CI using GitHub Actions. 
2. CI builds the app, serves it and tests that the server responds.
3. After CI completes successfully, the pipeline builds a Docker image and deploys it to Render.com. The public URL for the deployed app is:

https://openlayers-example-cicd.onrender.com