const fields = module.exports = {};

fields.feed = [
  ['author', 'creator'],
  ['dc:publisher', 'publisher'],
  ['dc:creator', 'creator'],
  ['dc:source', 'source'],
  ['dc:title', 'title'],
  ['dc:type', 'type'],
  'title',
  'description',
  'author',
  'pubDate',
  'webMaster',
  'managingEditor',
  'generator',
  'link',
];

fields.item = [
  ['author', 'creator'],
  ['dc:creator', 'creator'],
  ['dc:date', 'date'],
  ['dc:language', 'language'],
  ['dc:rights', 'rights'],
  ['dc:source', 'source'],
  ['dc:title', 'title'],
  'title',
  'link',
  'pubDate',
  'author',
  'content:encoded',
  'enclosure',
  'dc:creator',
  'dc:date',
];

var mapItunesField = function(f) {
  return ['itunes:' + f, f];
}

fields.podcastFeed = ([
  'author',
  'subtitle',
  'summary',
  'explicit'
]).map(mapItunesField);

fields.podcastItem = ([
  'author',
  'subtitle',
  'summary',
  'explicit',
  'duration',
  'image'
]).map(mapItunesField);
