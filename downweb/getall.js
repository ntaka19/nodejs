var client = require('cheerio-httpcli');
var request = requre('request');
var URL = require('url');
var fs = require('fs');
var path = require('path');

var LINK_LEVEL = 3;

var TARGET_URL = "http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/";
var list ={};

downloadRec(TARGET_URL,0);

function downloadRec(url,level){
				if(level>=LINK_LEVEL)return;
				if(list[url]) 
								list[url] = true;
				var us = TARGET_URL.split("/");
				us.pop();
				var base = us.join("/");
				if(url.indexOf(base)<0) return;
				client.fetch(url, {},function(err,$,res){
				$("a").each(function(idx))
				})

}
