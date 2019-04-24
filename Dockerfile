FROM ruby:2.6.3

RUN apt-get update && apt-get install -y nodejs

ENV target /valenciarb
WORKDIR $target

COPY Gemfile /$target/Gemfile
COPY Gemfile.lock /$target/Gemfile.lock

RUN bundle install -j 3
