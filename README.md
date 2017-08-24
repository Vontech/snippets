# Snippets

Snippets is a repository that is meant to be a compilation of all and every 
tiny snippet of code that you may think needs to be reused. For instance:

* CSS to make a round profile image
* An empty AngularJS application and controller
* Some divs to make a 3 columned-site

Each code snippet should be in the following format, which will be shown with
through the circular profile image example:

```css

/* Circular Profile Image */
/* profile image circle circular round professional picture */
/* Notes: Attach this class to an <img> tag. Feel free to change height and width. */
.circular-image {
    display: inline-block;
    width: 225px;
    height: 225px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
```

Essentially what the code snippet includes is:

1. A short title describing the snippet
2. A space-separated line of keywords that may be used to find the snippet
3. Any notes that are relevant to the usage of the snippet
4. The actual code snippet

### Usage

The folders for organizing these snippets are mostly arranged by technology or
the programming language being used. For example, the `web-tech` folder includes
snippets for HTML, CSS, Angular, NodeJS, etc... Try to keep the number of files to
a minimum, in order to enhance the ability to search for pieces of code.

In order to find a code snippet, either 1) clone the repo and search relevant keywords
in the relevant file, or 2) use GitHub's search feature (this is usually the better option).

Finally, if you search for something and it doesn't exist, make sure you add it later!