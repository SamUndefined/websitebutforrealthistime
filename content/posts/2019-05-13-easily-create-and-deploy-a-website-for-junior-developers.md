---
template: post
title: Create and Deploy Your Own Website
slug: creating-a-quick-website-for-junior-devs
draft: false
date: 2019-05-14T03:22:48.591Z
description: >-
  Know only just a bit of HTML and CSS? Good news: those are all you need to
  create and deploy a simple website - maybe even your very own portfolio.
category: Static Websites
tags:
  - Tutorial
  - Beginner
  - HTML
  - CSS
---
Write your own little website from scratch _and_ put it out into the world! We're going to use GitHub (and its GitHub pages feature) to get your site off your machine and onto the internet. 

Everything we will do is **free**! However, if you want your own special domain (such as "dis-mah-website.com" instead of "dis-mah-website._github_.io"), they are often just $12. But using a custom domain is a post for another day, so we won't cover that here.

## Who this is for?

**Best suited for** those just dipping their feet into web development.

**Will be fine for** mostly anyone who wants to get a simple and cheap website out and into the world quickly.

## What skills & tools do I need?

### Skills

Basic HTML and CSS. For example: if you've created one or a few tiny web pages with these HTML and CSS, you're good to go! Otherwise, if you haven't used HTML or CSS but you _are_ real brave, you're welcome to follow along!

#### Bonus Skills

* `git`
* JavaScript (for a fancier site)

### Tools

* `git`
  * A command line tool that helps you safely **save** your project by allowing you to easily go back to previous saves (which are actually called _commits_), put your commits (again, this is just a fancy term for a saved version of your project) out on the internet where you can easily access them from another computer, and far more that we don't have to worry about today.
* VS Code aka Visual Studio Code (optional)
  * This is an editor that can make your code easier to read and give you hints about when you've written something incorrectly. There are several just like it, so if you already have an editor that supports HTML & CSS, no need to get this specific one.

## Install and setup

> Remember: often times, setup is the hardest part of a new project - especially when you first start programming. Google is your friend. **You can do it!** 

1. `git`: [instructions here](https://help.github.com/en/articles/set-up-git)
2. VS Code: [instructions](https://code.visualstudio.com/docs/setup/setup-overview)

## Let's go!

So you have some light HTML and CSS skills (or some bravery). Let's put those to use!

### Write the website

1. Create a folder wherever you want your project to be (anywhere is fine, just remember where you put it).
2. Open VS Code and open the folder you just created 
3. Create 2 files: "index.html" and "index.css"
4. Inside of index.html, go ahead and add the basic HTML (including the import for the style sheet) necessary for your browser to be happy: 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
  
  </body>
</html>
```

5. Now add something interesting to your HTML! Maybe a picture of you with a description about you. A few links to your social media pages or anything else you wanna add. Here's an copy/pastable snippet for those that were brave and don't know HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Frankestein's Monster</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <main>
      <img alt="Me at React Conf" width="200" height="200" src="https://i.pinimg.com/236x/da/2d/58/da2d58808eb4a10380d6a847f3c064c7--actors-bride-of-frankenstein.jpg">
      <h1>Frankestein's Monster</h1>
      <p><a href="#">Facebook</a> | <a href="#">Instagram</a></p>
      <br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </main>
  </body>
</html>
```

6. Check out your work in the browser. Right click the file and copy its full path (that is, the url where the file lives on your computer). Paste the path into the url bar in your browser and hit enter. Alternatively you can drag and drop the file into the url bar. You should see your newly written web page once you hit enter. If you don't, double check your HTML for mistakes and make sure you put the correct file path into your browser's url bar.
7. Style it! Again, for the brave people (this goes into the index.css file):

```css
body {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: no-repeat fixed center;
    background-image: url(https://picsum.photos/id/213/2100/1500);
}

main {
    margin: 0;
    position: absolute;
    top: 35%;
    -ms-transform: translateY(-35%);
    transform: translateY(-35%);
}

img {
    border-radius: 100%;
}

h1 {
    font-weight: 100;
    font-size: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 0.5rem;
}

p {
    width: 50%;
    margin: auto;
}
```

   Go back to your browser and refresh your little website. Nice.

### Deploy the site

1. Commit it! Run `git commit -am "Initial commit"` in your terminal inside of the folder you're working in.
2. Create a repository in GitHub for your project (name it `your_github_username.github.io`)
3. Drag and drop your folder into your new repository
4. Enable GitHub pages from you repository's settings
5. Check out your site at https://your_github_username.github.io! Woot!

### Congrats! You have a website out in the wild!
