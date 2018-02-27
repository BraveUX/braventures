# General

The focus of this code example should be on the cleanliness of the code and the way in which the folder structure is set up.

<sub>**Note:** This example makes use of `PUG` which is a `JS` based templating engine for `HTML`. While it does not compile into compatible React code, there are a lot of similarities in the ways in which components are conceptualized and built.</sub>

# Getting Started

Once you clone the repo, run `npm install` in terminal within the root project directory. Once that completes, you can run a localhost by typing in `gulp` to your terminal. Once done, view the site at http://localhost:8080/.

<sub>**Note:** We use [gulp](https://gulpjs.com/) for compiling our code as we want. We do have some special tasks in there such as minifying images, and converting a directory of SVG files into an SVG sprite sheet for icons, but much of this can be done via webpack or some other automation tool.</sub>

# Enforcing Consistency

All development code (scss, js, pug) is run through linters which not only catch some minor formatting errors, but also enforce industry best practices in regards to formatted content. Further, when each file is saved [prettier](https://github.com/prettier/prettier) automatically updates the code based on the specified linting rules, ensuring that the code is consistent across all screens.

## Linters

* **Sass** - Uses [stylelint](https://stylelint.io/) and extends the standard rules for formatting CSS and enforces that properties are ordered alphabetically

* **Javascript** - Uses [eslint](https://eslint.org/) and extends the [airbnb](https://github.com/airbnb/javascript) standard formatting rules for all instances of JS.

* **Pug** - Uses [puglint](https://github.com/pugjs/pug-lint). This one is not a major concern for your team as you will not be using pug.

All of these tools go a long way towards keeping your code in check and making sure it doesn’t turn into some uncontrollable frankenmonster down the road.

# Styles

We break our styles into 3 core groups, helpers, partials, and vendors.

* **Helpers** - Generally comprised of variables, mixins, and functions which will be used repeatedly throughout the project. None of these files standalone should actually compile any code in the finalized CSS.

* **Partials** - The meat and potatoes of your projects styles. Partials are broken down to the specific component they are associated with. For React, I would suggest wherever possible keeping your partials consistent with your React components, meaning that your header component’s styles should mostly be observable from within the `partials/_header.scss` file.

* **Vendors** - These are third party SCSS plugins.

We use a [BEM](http://getbem.com/) like naming convention for our elements and put great thought and care to not having incredibly nested or difficult to find elements within the code. At the forefront, we try and make it as easy and intuitive as possible for finding the element you need to modify. Further, we are strongly against deeply nested SCSS elements and work hard to keep it as flat as possible.

We build our SCSS mobile first and ensure that all elements scale and respond appropriately at all sizes, including the inbetweens.

# Views

As mentioned earlier, our views are handled through Pug which is a JS based templating engine for generating HTML (basically coffeescript for HTML). Without going into too much detail on how PUG works, it does allow us to create modules (or components) in one place, and then repeat them across the site as needed. Since your project will be using React, you can look at these files and their folder structure more abstractly to assist with building React components.

The most important directory within this section is the `layouts` directory. Within here you will find a `general` and `includes` directory which handle the components and mixins our pages will use, respectively.

* **General** - These are the building blocks for each component on the page. Using `_header.pug` as an example, we define the actual display for how the markup should look. Pug does allow us to take this a step further and actually have variable data based on conditions, though it was not necessary for this site.

* **Includes** - Similar to SCSS helpers, includes are generally mixins which build repeatable content. We use this for the venture cards displayed on the site. We build the component once within the `includes/mixins/_venture.pug` file and then pass it data in the `general/_ventures.pug` file. Like React, we only need to build the component once and in order for it to apply to all instances of it. Obviously this is great for making quick changes without having to update it multiple times across a page.

# Scripts

We try to avoid using unnecessary libraries in JS as much as possible. As such, all of our code is written in vanilla ES6 JS and then compiled down by babel. We break our scripts down into modules so that they are easier to parse. The `_helpers.js` file contains global functions for our other JS files to work with. These functions include things such as debouncers, media-query checks, and ES6 loops. Obviously on a larger project, we’d have far more helpers, or perhaps the assistance of utility libraries like [lodash](https://lodash.com/), but it was not necessary here.

# Takeaway

We put a lot of attention and thought into the way in which we structure and organize our content. While we may not be able to provide 1:1 React components for you to import into your project, we could get you most of the way there with our styles and pug/html, and provide you with some really strong guidelines for maintaining the readability and structure of your project.
