# This is a file we use for building a Docker image for this project in production.
# No need to worry about this file for now!

# setting up our image aliased as build
FROM node:12.2.0-alpine as build

# set working directory inside node
WORKDIR /usr/src/node_app

# environment vars must be included in dockerfile
ARG NODE_ENV=production

# Add our node modules to our path
ENV PATH /usr/src/node_app/node_modules/.bin:$PATH

# copy over our package.json
COPY package.json /usr/src/node_app/package.json

#  install dependencies silently so we don't have to
#  watch the whole thing download every time
RUN npm install --silent

# Copy over the rest of our file so webpack will be able bundle it
COPY . /usr/src/node_app

# this is the most important line of this build process!
# this is where we will create our bundle files that we will copy over later
RUN npm run postinstall
# npm run postinstall will run the command: "webpack --mode=production"


# PHASE TWO:
# this will be the actual base image of the image we are building
# We are going from the alpine version of ruby to save space
FROM ruby:2.5.5-alpine3.9

# We tell the image `--no-cache` so we don't
# clog up our image with the things we are downloading
RUN apk add --no-cache --update build-base \
    linux-headers \
    git \
    postgresql-dev \
    nodejs \
    tzdata 


# environment vars must be included in the dockerfile
ENV DATABASE_URL="postgres://postgres@db"
ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true

# copy over our Gemfile
WORKDIR /my_app
COPY Gemfile /my_app/Gemfile
COPY Gemfile.lock /my_app/Gemfile.lock

# We gem install bundler for a specific issue with bundler 2.0
# then we can bundle install
RUN gem install bundler && bundle install 
COPY . /my_app

# Here is where that build stage from earlier comes in. We don't need all the
# Javascript dependencies just the bundle files! So we will copy those over into
# our final image
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

RUN SECRET_KEY_BASE=1 RAILS_ENV=production rails assets:precompile

# Add a script to be executed every time the container starts.
# This script will take care of a Rails specific Docker issue with the server
# not starting
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

# Expose our port
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-e", "production","-b", "0.0.0.0"]