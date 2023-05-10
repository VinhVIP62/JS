var elements = document.getElementsByTagName('ytm-rich-item-renderer')
items = [];
for(var i=0; i<elements.length; i++) {
    try {
      var item = elements[i].data.content.videoWithContextRenderer;
          items.push({
              'videoId': item.videoId,
              'title': item.headline.runs[0].text,
              'duration': item.lengthText.runs[0].text,
              'publishedTime': item.publishedTimeText.runs[0].text,
              'viewCount': item.shortViewCountText.runs[0].text,
              'thumbnail': item.thumbnail.thumbnails[1].url,
              'channel': item.shortBylineText.runs[0].text,
              'channelThumbnail': item.channelThumbnail.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url,
          });
    } catch (err) { }
  }     
  items;


var elements = document.getElementsByTagName('ytm-video-with-context-renderer')
        items = [];
        for(var i=0; i<elements.length; i++) {
          try {
            var item = elements[i].item.data.content.videoWithContextRenderer;
                items.push({
                    'videoId': item.videoId,
                    'title': item.headline.runs[0].text,
                    'duration': item.lengthText.runs[0].text,
                    'publishedTime': item.publishedTimeText.runs[0].text,
                    'viewCount': item.shortViewCountText.runs[0].text,
                    'thumbnail': item.thumbnail.thumbnails[1].url,
                    'channel': item.shortBylineText.runs[0].text,
                    'channelThumbnail': item.channelThumbnail.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url,
                });
          } catch (err) { }
        }     
        items;



        var elements = document.getElementsByTagName('ytm-video-with-context-renderer')
        items = [];
        for(var i=0; i<elements.length; i++) {
            try{
                var item = elements[i].data.data;
                var myItem = {
                    'videoId': item.videoId,
                    'title': item.headline.runs[0].text,
                    'duration': item.lengthText.runs[0].text,
                    'publishedTime': item.publishedTimeText.runs[0].text,
                    'viewCount': item.shortViewCountText.runs[0].text,
                    'thumbnail': item.thumbnail.thumbnails[1].url,
                    'channel': item.shortBylineText.runs[0].text,
                    'channelThumbnail': item.channelThumbnail.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url,
                }
                items.push(myItem);
            }catch(err) {}
        }     
        items;