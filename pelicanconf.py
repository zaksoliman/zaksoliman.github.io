#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

THEME = "templates/custom"

AUTHOR = 'Zak Soliman'
AUTHOR_URL = False
AUTHOR_SAVE_AS = False
AUTHORS_URL = False
AUTHORS_SAVE_AS = False

SITENAME = 'Zak Soliman | Software Developer | Computer Scientist'
SITESUBTITLE = ''
SITEURL = 'http://localhost:8000'
RELATIVE_URLS = False

PATH = 'content'
OUTPUT_PATH = 'output/'

ARTICLE_PATHS = ['blog']
ARTICLE_URL = 'blog/{category}/{date:%Y}/{slug}.html'
ARTICLE_SAVE_AS = 'blog/{category}/{date:%Y}/{slug}.html'

PAGE_PATHS = ['pages']
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

CATEGORY_SAVE_AS = 'blog/{slug}/index.html'
CATEGORY_URL = 'blog/{slug}/'

ARCHIVES_SAVE_AS = 'blog/archives/index.html'
#FEED_ATOM = 'blog/feeds/'
#FEED_RSS = 'blog/feeds/'

TAG_SAVE_AS = False
TAG_URL = False

INDEX_SAVE_AS = 'blog/index.html'

TIMEZONE = 'America/Toronto'
DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

MANGLE_EMAILS = True

LINKS = (('Home', SITEURL),
        ('Blog', SITEURL + '/blog'),
        ('Projects', SITEURL + '/#projects'),)

SOCIAL = (('GitHub','https://github.com/zaksoliman'),
('LinkedIn','https://www.linkedin.com/in/zsoliman/'),
('Twitter','https://twitter.com/ZackSoliman'),
('Instagram','https://www.instagram.com/vagabond_dev/'),)

DEFAULT_PAGINATION = 10