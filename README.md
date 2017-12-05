# Workflow, AJK16

> [(Homepage)](https://christian-nylander.github.io/ajk16_workflow/)
In this course we will describe how an effective workflow looks like. We will show you step by step what we use for methods and why we chose a bunch of different techniques. The application we have built is a simple search engine for finding pictures via Pixabay.

## Installation
```sh
clone project
cd ajk16_flow
npm install
npm start
```

## Scaffold
> This project was scaffolded by React CLI [(create-react-app)](https://github.com/facebookincubator/create-react-app)
 We chose to use the React CLI because of its agility and logistics. A big advantage is that at the smallest change in  the code, the website updates in real time so you do not need to refresh the website continuously.

> To handle the responsivity we used flexbox witch is a built in CSS tool. We used it because it's easy to work with and doesn't require you to type a massive amount of code.

> We also created a repo on Github. This makes it much easier for the group while we are working on the project. Some of us has also been using GitKraken witch is a git GUI that makes the hole GIT process faster.

## Develop
> The code is written in React with the text editors Visual Code and Atom.
The API call was made with react's fetch, which is the most convenient way to do it according to us, no installation needed as with axios.  

## Test
> The tests are done with Jest, a testing framework maintained by Facebook.
```sh
npm test
```
> The console should show that the tests succeeded.

## Task
> The tasks was made with Gulp. There are 6 tasks, two for cleaning the project from unnecessary html and JavaScript files, one for copying the html files from the source code folder to the app folder that will be the one in production. There are also two tasks for the css/scss. One that autoprefixes the css and one that converts the css to scss to the app folder. And finally the default that does every task.

## Integrate
> Fyll i om integrering

## Optimize
> gh-pages

## Deploy
> The project is deployed on Github pages. We had some trouble deploying the website with github pages due to react cli. But we succeeded with a lot of help from [(this tutorial.)](https://www.youtube.com/watch?v=7yA7BGos2KQ)


## Software
```sh
```

### Developers
> Maja and Christian, 2017
