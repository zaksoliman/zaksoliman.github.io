#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

# If your site is available via HTTPS, make sure SITEURL begins with https://
SITEURL = 'https://www.zaksoliman.com'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'

DELETE_OUTPUT_DIRECTORY = True
LINKS = (('Home', SITEURL),
        ('Blog', SITEURL + '/blog'),
        ('Projects', SITEURL + '/#projects'),)

# Following items are often useful when publishing

#DISQUS_SITENAME = ""
GOOGLE_ANALYTICS_ID = "UA-163682319-1"
GOOGLE_ANALYTICS_PROP = "zaksoliman.com"