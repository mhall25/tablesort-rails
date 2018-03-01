# tablesort-rails

A lightweight, unobtrusive alternative to jQuery's tablesort.  Wraps [tristen's tablesort javascript library](https://github.com/tristen/tablesort) into a package that's easy to include in a Rails app.  This gem includes version 5.0.2 of tablesort (Nov 12, 2017).

The base script (alphabetical sort only) is just 3kb.  For another 3kb, you can include a set of special sort methods.

## Build

Clone the repository and build the gem:

```
gem build tablesort-rails.gemspec
```

## Setup

Add the following to your Gemfile:

```
gem 'tablesort', path: 'path/to/packaged/gemfile'
```

then execute:

```
bundle install
```

Add to your `application.js`:

```
//= require tablesort
```

Add to your `application.css`:

```
*= require tablesort
# or if you use application.css.scss:
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
            %td 23
        %tr
            %td B
            %td 12
```

### Disable sorting

Disable sorting on a column by adding the `no-sort` class and setting `data-sort-method` to 'none':

``` haml
%table.tablesort
    %thead
        %tr
            %th.no-sort{'data-sort-method' => 'none'} Column 1
            %th Column 2
    %tbody
```

## More sorts

The default sorting method will do simple alphabetical sorting, but sometimes you need something special.  Add the following line to your `application.js`:

```
//= require tablesort-extra
```

You'll now have access to the following sort methods:

Method | Description | Example data
------ | ----------- | ------------
Dates | Sorts arbitrarily-formatted dates | 12-2-70, 10/11/1969
Dot separator | Sorts dot-separated version numbers | 11.0.1, 31.0.1650.57
Filesize | Sorts by filesize, taking suffixes into account | 124k, 134.56 GB, 19.4 K, 4.13 TiB
Month names | Sorts month names in chronological order | January, April
Numbers | Sorts numbers, including currency |

After requiring the sorter, specify the column it should be used on:

```haml
%table
    %thead
        %tr
            %th Number
            %th{'data-sort-method' => 'dotsep'} Version
    %tbody
        %tr
            %td 1
            %td 3.1.46
        %tr
            %td 2
            %td 1.08.24.2
```

## More details

See [Tristen Brown's demo site](http://tristen.ca/tablesort/demo/) for more examples and information on special options, extending sorts, dynamic refresh, etc.
