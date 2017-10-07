![Alt text](/static/images/github-screen.png?raw=true "Screenshot")

# unicorn-name
What is your unicorn name?

## build
`hugo -D`

## launch
`hugo server`

## deploy
I am currently using rsync to deploy my Hugo sites with my webhosting provider, [Dreamhost](https://dreamhost.com)

Using a command simialar to this...

`hugo && rsync -avz --delete public/ USER@HOST:~/unicorn-name.jbfrels.com`

YMMV, but use as a template.
