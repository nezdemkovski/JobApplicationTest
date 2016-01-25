# JobApplicationTest
CN Group Job Application (Simple AngularJS app)

### Installation

```sh
$ git clone https://github.com/yakovlevyuri/JobApplicationTest
$ cd JobApplicationTest
$ bower install
$ npm install
$ grunt build
```
Then you need to use some web server. For example, http server:
```sh
$ npm install -g http-server
$ http-server
```
Now go to localhost:8080 and app should work.

Login credentials:
**john@doe.com/johndoe**

### Unit tests
```sh
# Install Karma:
$ npm install -g karma-cli
# Install plugins that your project needs:
$ npm install karma-jasmine karma-chrome-launcher --save-dev
$ karma start
```

License
----

MIT