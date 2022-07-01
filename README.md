# Learning Webpack

## Why?

I'm working on a project that needs to visualise data, generated from simulations, on a variety of platforms - so I chose to go with a web based solution since it's quite easy to view on most devices. It was a simple enough solution to develop without reaching for a frontend framework so I started by just adding a `<script>` tag and hacking away with a single javascript file.

As the solution got a bit more complex, through the addition of libraries and the `script.js` file getting uncomfortably long, I realised that I needed to add some structure - surely there's a way to use the same conventions as I do with React i.e. multiple files, importing stuff from other files, using npm to install packages instead of carefully ordering the script tags in the html page - but without using React.

I knew that there was a build step when using React, and that there was some magic that happens in this step to convert all the `.js` files into various bundles/chunks that is loaded into the browser - this was enough to get me started on my googling journey and learn about webpack being the tool does all this "magic".

## How?

So here we are now - the plan is to go through the [webpack get started](https://webpack.js.org/guides/getting-started) content (or as much as I can bear) and then try out different plugins and config to get a feel of how I can use webpack in my projects.
