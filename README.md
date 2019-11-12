Valencia.rb site
================

Valencia.rb site: [http://valenciarb.org](http://valenciarb.org)  
Googlegroups forum: [https://groups.google.com/forum/#!forum/valencia-rb](https://groups.google.com/forum/#!forum/valencia-rb)  
Twitter handle: [https://twitter.com/valenciarb](https://twitter.com/valenciarb)  
Join the [Valencia Tech slack](http://slack.vlctechhub.org/) and find us on the **#valenciarb** channel

Setup
=====

You will need Ruby 2.6+ and [Bundler](http://bundler.io) installed on your system.

The site uses [Jekyll](http://jekyllrb.com), to run the site type the following in your
terminal:

```
$ git clone https://github.com/valenciarb/valenciarb.github.io.git
$ cd valenciarb.github.io
$ bundle install
$ bundle exec jekyll serve
```

The site should be available on [http://localhost:4000](http://localhost:4000)

Setup with Docker
=================

You will need a current version of Docker installed.

To run the site, type the following in your terminal:

```
$ git clone https://github.com/valenciarb/valenciarb.github.io.git
$ cd valenciarb.github.io
$ docker-compose up
```

Once stopped (`crtl-C`) you can remove the stopped container by typing:

```
$ docker-compose down
```

If you want to also remove the created images and volumes, type this instead:

```
$ docker-compose down --rmi all --volumes
```

The site should be available on [http://localhost:4000](http://localhost:4000)

Add an event
===============

To create an event you just have to add a new markdown file to the `_posts` folder:

*year-month-day-name-of-the-event*.markdown

The following entries are expected to appear in the YAML front matter block:

```
---
date: year-month-day hours:minutes
title: "name of the event"
location: venue-name
---
```
