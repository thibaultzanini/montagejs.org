
FROM ruby:3.3

# Set the working directory
WORKDIR /usr/src/app

# Install Jekyll and Redcarpet
RUN gem install jekyll redcarpet

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y nodejs npm

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install npm dependencies
# RUN cd _build && npm install && cd ..

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the Jekyll server
CMD ["jekyll", "serve", "--port", "8080", "--host", "0.0.0.0"]
