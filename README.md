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
> We have integrated our project with github. The whole project went well and smoothly but we had some problems deploying it with github pages. Sometimes we got conflicts when we merged to the master, but it resolved with the help of atom.io built-in conflict manager witch shows the conflict and how to solve it.



## Optimize
> We have used a tool called gh-pages that could easily be installed via NPM. What it does is that it bundles the entire project so that you can deploy it on github pages. It minifies all files in the project and deletes unnecessary folders.


## Deploy
> The project is deployed on Github pages. We had some trouble deploying the website with github pages due to react cli. But we succeeded with a lot of help from [(this tutorial.)](https://www.youtube.com/watch?v=7yA7BGos2KQ)


## Summary
> Overall, this project has benn fun and educational. We have learned a lot about how a workflow works, from its beginning to the end. We learned, among other things, that Reaction CLI was not easy to imply on Github pages and you should always install SASS in the startup of a project otherwise it can be difficult to get working. Both of these problems got resolved after a lot of documentation reading. 

> Next time we will think twice while deciding a Scaffolding-tool. React CLI did much good, but we had a couple of problems with it aswell.






### Developers
> [Christian](https://www.linkedin.com/in/christian-nylander-70082812a/) & [Maja](https://www.linkedin.com/in/majagedda/), 2017


