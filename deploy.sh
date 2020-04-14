#!/bin/bash

ghp-import --cname=www.zaksoliman.com output -r origin -b master
git push origin master
git checkout source 
