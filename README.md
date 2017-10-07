![Alt text](/static/images/github-screen.png?raw=true "Screenshot")

# unicorn-name
What is your unicorn name?

## setup
Clone and then you need the custom theme.  

Inside the project folder...

`git clone https://github.com/jbfreels/hugo-theme-nix themes/hugo-theme-nix`

## build
`hugo -D`

## launch
`hugo server`

## deploy
I am currently using rsync to deploy my Hugo sites with my webhosting provider, [Dreamhost](https://dreamhost.com)

Using a command simialar to this...

`hugo && rsync -avz --delete public/ USER@HOST:~/jbfreels.com/unicorn-name`

YMMV, but use as a template.
