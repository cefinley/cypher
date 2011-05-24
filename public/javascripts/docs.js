var Documentation = {};
Documentation.video_metadata = {
  name: 'Video Metadata',
  description: 'RealGravity Video Metadata is a simple widget that applies an object to a template for display purposes only. It should normally be called implicitly via the <a href="/docs/videowall">Video Wall</a>.',
  signatures: [
    {
      signature: 'RealGravity.videoMetadata( elementID, [options] )',
      args: [
        {
          name: 'elementID',
          type: 'string',
          description: 'A string containing the ID of the element to create the widget in.'
        },
        {
          name: 'options ',
          type: 'string',
          description: 'An object containing the settings for the widget'
        }
      ],
      returns: 'video metadata instance public api object'
    }
  ],
  options: [
    {
      name: 'init',
      type: 'function',
      default_value: 'undefined',
      description: 'If defined, will be called at the conclusion of the main initialisation, in the context ("this" keyword) of th this widget instance.',
      received_args: [
        {
          name: 'instanceVars',
          type: 'object',
          description: 'The instance variables object for this widget instance.'
        }
      ]
    },
    {
      name: 'template',
      type: 'string',
      default_value: '(see the code in videometadata.js for the default)',
      description: 'The template to use inside the outer element, in Mustache format.'
    }
  ],
  methods:[
    {
      name: 'option',
      params: '( name, value )',
      description: 'Sets the given option and redraws the template.',
      arguments: [
        {
          name: 'name',
          type: 'string',
          description: ''
        },
        {
          name: 'value',
          type: 'type varies',
          description: ''
        }
      ]
    },
  ],
  examples: [
    {
      name: 'Basic usage',
      id: 'video_metadata_example1'
    },
    {
      name: 'With custom template',
      id: 'video_metadata_example2'
    }
  ]
};

Documentation.videowall = {
  name: 'Video Wall',
  description: 'The RealGravity Video Wall is designed to be a drop-in component to add channel browsing, a video list, a player and video metadata to any page with minimal configuration. It is themeable in both style and behaviour.',
  signatures: [
    {
      signature: 'RealGravity.videoWall( elementID, [options] )',
      args: [
        {
          name: 'elementID',
          type: 'string',
          description: 'A string containing the ID of the element to create the widget in.'
        },
        {
          name: 'options ',
          type: 'string',
          description: 'An object containing the settings for the widget'
        }
      ],
      returns: 'video wall instance public api object'
    }
  ],
  options: [
    {
      name: 'init',
      type: 'function',
      default_value: 'undefined',
      description: 'If defined, will be called at the conclusion of the main initialisation, in the context ("this" keyword) of this widget instance.',
      received_args: [
        {
          name: 'instanceVars',
          type: 'object',
          description: 'The instance variables object for this widget instance.'
        }
      ]
    },
    {
      name: 'template',
      type: 'string',
      default_value: '(see the code in videowall.js for the default)',
      description: 'The template to use inside the outer element, in Mustache format.'
    },
    {
      name: 'videoMetadataOptions',
      type: 'object',
      default_value: 'undefined',
      description: 'An object containing the configuration for the video metadata pane. If this is undefined, no video metadata pane will be created. See the <a href="/docs/video_metadata">Video Metadata</a> documentation for a list of available options.'
    },
    {
      name: 'channelListOptions',
      type: 'object',
      default_value: 'undefined',
      description: 'An object containing the configuration for the channel list. If this is undefined, no channel list will be created. See the <a href="/docs/channel_list">Channel List</a> documentation for a list of available options.'
    },
    {
      name: 'playerOptions',
      type: 'object',
      default_value: 'undefined',
      description: 'An object containing the configuration for the player. If this is undefined, no player will be created. If defined, it MUST contain at least the parameter <code>playlist_uuid</code>. See the <a href="/docs/player">Player</a> documentation for a list of available options.'
    },
    {
      name: 'videoListOptions',
      type: 'object',
      default_value: 'undefined',
      description: 'An object containing the configuration for the video list. If this is undefined, no video list will be created. See the <a href="/docs/video_list">Video List</a> documentation for a list of available options.'
    },
    {
      name: 'theme',
      type: 'string',
      default_value: 'undefined',
      description: 'The name of the theme to use. This must exist in <code>RealGravity.themes</code>.'
    }
  ],
  examples: [
    {
      name: 'Paned video wall',
      id: 'videowall_example1'
    }
  ]
};

Documentation.videolist = {
  name: 'Video List',
  description: 'RealGravity Video List performs a search and displays the results via a standard or custom template. It should normally be called implicitly via the <a href="/docs/videowall">Video Wall</a>.',
  signatures: [
    {
      signature: 'RealGravity.videoList( elementID, [options] )',
      args: [
        {
          name: 'elementID',
          type: 'string',
          description: 'A string containing the ID of the element to create the widget in.'
        },
        {
          name: 'options ',
          type: 'string',
          description: 'An object containing the settings for the widget'
        }
      ],
      returns: 'video list instance public api object'
    }
  ],
  options: [
    {
      name: 'init',
      type: 'function',
      default_value: 'undefined',
      description: 'If defined, will be called at the conclusion of the main initialisation, in the context ("this" keyword) of this widget instance.',
      received_args: [
        {
          name: 'instanceVars',
          type: 'object',
          description: 'The instance variables object for this widget instance.'
        }
      ]
    },
    {
      name: 'template',
      type: 'string',
      default_value: '(see the code in videowall.js for the default)',
      description: 'The template to use inside the outer element, in Mustache format.'
    },
    {
      name: 'defaultThumbnail',
      type: 'string',
      default_value: '/images/film_section.jpg',
      description: 'URI to use for missing thumbnails.'
    },
    {
      name: 'parseResponse',
      type: 'function',
      default_value: 'Default function ensures there are no empty thumbnails.',
      description: 'Mess with the returned JSON before it\'s rendered to the template. Called in the scope of the Video List instance api.',
      received_args: [
        {
          name: 'instanceVars',
          type: 'object',
          description: 'The instance variables object for this widget instance.'
        },
        {
          name: 'response',
          type: 'object',
          description: 'The json response. You must return this or another object.'
        }
      ]
    }
  ],
  methods:[
    {
      name: 'option',
      params: '( name, value )',
      description: 'Sets the given option. Presently does NOT redraw the template.',
      arguments: [
        {
          name: 'name',
          type: 'string',
          description: ''
        },
        {
          name: 'value',
          type: 'type varies',
          description: ''
        }
      ]
    },
    {
      name: 'update',
      params: '()',
      description: 'A hash of search parameters.'
    }
  ],
  examples: [
    {
      name: 'Basic usage',
      id: 'videolist_example1'
    },
    {
      name: 'With custom template',
      id: 'videolist_example2'
    }
  ]
};

Documentation.channel_list = {
  name: 'Channel List',
  description: 'RealGravity Channel List is a simple widget that takes an array of "channels" represented by search parameters, and a reference to a <a href="/docs/videolist">Video List</a> which will be updated with those parameters. It should normally be called implicitly via the <a href="/docs/videowall">Video Wall</a>.',
  signatures: [
    {
      signature: 'RealGravity.channelList( elementID, [options] )',
      args: [
        {
          name: 'elementID',
          type: 'string',
          description: 'A string containing the ID of the element to create the widget in.'
        },
        {
          name: 'options ',
          type: 'string',
          description: 'An object containing the settings for the widget'
        }
      ],
      returns: 'channel list instance public api object'
    }
  ],
  options: [
    {
      name: 'init',
      type: 'function',
      default_value: 'undefined',
      description: 'If defined, will be called at the conclusion of the main initialisation, in the context ("this" keyword) of this widget instance.',
      received_args: [
        {
          name: 'instanceVars',
          type: 'object',
          description: 'The instance variables object for this widget instance.'
        }
      ]
    },
    {
      name: 'template',
      type: 'string',
      default_value: '(see the code in videowall.js for the default)',
      description: 'The template to use inside the outer element, in Mustache format.'
    },
    {
      name: 'channels',
      type: 'array',
      default_value: '[ ]',
      description: 'List of channels in the following format: <pre>[\n  {\n    title: "News",\n    params: {\n      search_term: "news",\n      per_page: 50,\n      order: "published_at desc"\n    }\n  }\n]</pre>'
    },
    {
      name: 'videoList',
      type: 'string',
      default_value: 'null',
      description: 'The video list instance to update'
    },
    {
      name: 'click',
      type: 'function',
      default_value: 'Default behaviour sets the title of the videolist and updates it, if present.',
      description: 'Overrides the default click behaviour.',
      received_args: [
        {
          name: 'instanceVars',
          type: 'object',
          description: 'The instance variables object for this widget instance.'
        },
        {
          name: 'event',
          type: 'object',
          description: 'The jQuery click event.'
        }
      ]
    },
  ]
};

Documentation.player = {
  name: 'Player',
  description: 'The RealGravity Player creates a video player on a page',
  signatures: [
    {
      signature: 'RealGravity.videoList( elementID, [options] )',
      args: [
        {
          name: 'elementID',
          type: 'string',
          description: 'A string containing the ID of the element to create the widget in.'
        },
        {
          name: 'options ',
          type: 'string',
          description: 'An object containing the settings for the widget'
        }
      ],
      returns: 'video list instance public api object'
    }
  ],
  options: [
    {
      name: 'player_uuid',
      type: 'string',
      description: 'REQUIRED. The id of the player to show.'
    },
    {
      name: 'width',
      type: 'number',
      description: 'The player width. Not required, but recommended.'
    },
    {
      name: 'height',
      type: 'number',
      description: 'The player height. Not required, but recommended.'
    },
    {
      name: 'template',
      type: 'string',
      default_value: '(see the code in player.js for the default)',
      description: 'The template to use inside the outer element, in Mustache format. It is unlikely you will need to modify this.'
    }
  ],
  methods:[
    {
      name: 'go',
      params: '()',
      description: 'Updates/starts the player.',
      arguments: []
    },
    {
      name: 'setVideo',
      params: '( video_guid )',
      description: 'Sets the video guid, deleting any playlist_uuid or search parameters.',
      arguments: [
        {
          name: 'video_guid',
          type: 'string',
          description: 'The guid of the video to play.'
        }
      ]
    },
    {
      name: 'setSearchTerm',
      params: '( search_term )',
      description: 'Sets the search term for the player\'s built-in dynamic playlist. Note this and other playlist parameters present an *alternative* to the <a href="/docs/videolist">Video List</a>.',
      arguments: [
        {
          name: 'search_term',
          type: 'string',
          description: 'Search with a single or multiple terms delimited by & or |.'
        }
      ]
    },
    {
      name: 'setPlaylist',
      params: '( playlist_uuid )',
      description: 'Sets the playlist, clearing the video_guid and any search parameters.',
      arguments: [
        {
          name: 'playlist_uuid',
          type: 'string'
        }
      ]
    },
    {
      name: 'setCategory',
      params: '( category_id )',
      description: 'Sets the category to use in a search.',
      arguments: [
        {
          name: 'category_id',
          type: 'string or number'
        }
      ]
    },
    {
      name: 'setProvider',
      params: '( provider_id )',
      description: 'One or more providers to limit the search to.',
      arguments: [
        {
          name: 'provider_id',
          type: 'string'
        }
      ]
    },
    {
      name: 'setResultCount',
      params: '( result_count )',
      description: 'The maximum number of items to return.',
      arguments: [
        {
          name: 'result_count',
          type: 'number'
        }
      ]
    },
    {
      name: 'setSearchColumns',
      params: '( search_columns )',
      description: 'Set the columns to search on.',
      arguments: [
        {
          name: 'search_columns',
          type: 'string'
        }
      ]
    },
    {
      name: 'setSearchOrder',
      params: '( search_order )',
      description: 'Set the search order.',
      arguments: [
        {
          name: 'search_order',
          type: 'string',
          description: ''
        }
      ]
    },
    {
      name: 'getDfpParams',
      params: '()',
      description: 'Get the dfp params.',
      arguments: []
    },
  ],
  examples: [
    {
      name: 'Page markup & scripts',
      id: 'player_example1',
      height: 110
    },
    {
      name: 'Basic usage',
      id: 'player_example2',
      height: 60
    },
    {
      name: 'Load a single video',
      id: 'player_example3',
      height: 90
    },
    {
      name: 'Load a playlist into an existing player',
      id: 'player_example4',
      height: 60
    },
    {
      name: 'Create a dynamic playlist',
      id: 'player_example5',
      height: 75
    }
  ]
};

(function($, Documentation){
//
var compareName = function(a, b){
  var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
  if (nameA < nameB) //sort string ascending
    return -1;
  if (nameA > nameB)
    return 1;
  return 0 //default return value (no sorting)
}
$.hardcodeArrayLength = function(o){
  var k;
  for (k in o) {
    if (o.hasOwnProperty(k)) {
      if ($.isArray(o[k])) {
        o[k + '_length'] = '13';//o[k].length + '5';
        if (k !== 'examples' && k !== 'signatures')
        o[k].sort(compareName);
      }
      if (typeof o[k] === 'object') {
        $.hardcodeArrayLength(o[k]);
      }
    }
  }
  return o;
};
$.fn.loadExamples = function(examples){
  var first = $(this).eq(0);
  this.each(function(i){
    var $this = $(this),
      example = examples[i],
      file = '/examples/' + this.id + '.html';
    if (example.height) {
      $this.height(example.height);
    }
    $.ajax({
      url: file,
      success: function(res){
        $this.text(res);
      }
    });
    if (i > 0) {
      var button = $('<button>Try it</button>').insertBefore($this);
      button.click(function(){
        var w = window.open('/examples/example_iframe.html');
        setTimeout(function(){
          var w$ = w.RGjQuery,
            $body = w$('body');
          $body.html(first.val());
          $body.append('<script type="text/javascript">\n' + $this.val() + '\n</script>');
        }, 2000);
      });
    }
  });
};
$(function(){
    var doc = Documentation[Documentation.active];
    $.hardcodeArrayLength(doc);
    $.ajax({
        url: '/docs/template.mustache',
        success: function(res){
          $('body').append(Mustache.to_html(res, doc));
          $('textarea.example').loadExamples(doc.examples);
        }
    });
});
}(window.jQuery, window.Documentation));

