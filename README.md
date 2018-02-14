# Tablesort for Rails

This gem wraps [tristen's tablesort javascript library](https://github.com/tristen/tablesort) into a package that's easy to include in a Rails app.

## Setup

Add the following to your Gemfile:

```
gem 'tablesort'
```

then execute:

```
bundle install
```

Add to your application.js:

```
//= require tablesort
//= require tablesort-autostart
```

Add to your application.css.scss:

```
@import 'tablesort';
```

Restart your server to load the new asset files:

```
sudo service apache2 restart
```

