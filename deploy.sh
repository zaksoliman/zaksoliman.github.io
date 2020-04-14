#!/bin/bash

ghp-import --cname=www.zaksolman.com output -r origin -b master
git push origin master
git checkout source 
