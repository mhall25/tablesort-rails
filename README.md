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

Add to your `application.js`:

```
//= require tablesort
//= require tablesort-autostart
```

Add to your `application.css.scss`:

```
@import 'tablesort';
```

Restart your server to load the new asset files:

```
sudo service apache2 restart
```

## Use

Add the `tablesort` class to any table to enable clicking on the column headers to sort the rows by that column.

``` haml
%table.tablesort
    %thead
        %tr
            %th Column 1
            %th Column 2
    %tbody
        %tr
            %td A
            %td 12
        %tr
            %td B
            %td 23
```

## More sorts

The default sorting mehtod will do simple alphabetical sorting, but sometimes you need something special.  Add the following lines to your `application.js` for these features:

### Dates

Sorts arbitrarily-formatted dates (ex. 12-2-70, 10/11/1969, etc.)

`//= require tablesort-date`

### Dot Separator

Sorts dot-separated version numbers (ex. 11.0.1, 31.0.1650.57)

`//= require tablesort-dotsep`

### Filesize

Sorts by filesize, taking suffixes into account (ex. 124k, 134.56 GB, 19.4 K, 4.13 TiB)

`//= require tablesort-filesize`

### Month names

Sorts month names by their chronological order

`//= require tablesort-monthname`

### Numbers

Sorts numbers, including currency

`//= require tablesort-number`
