## VIRAL VIDEOS FROM FACEBOOk
This pet project is intended to get viral videos from facebook. i.e. videos having atleast 1k likes.  
The videos are collected by means of facebook users recommending (sharing) the said viral videos to a facebook group chat named: download_this_link. The videos url are then automatically callected by using facebook graph the API and stored in a database. No video will be downloaded to any server. Only video URL will be saved. thus, the creator may decide to delete the video or restrict access which then will make it impossible to view on the site.  
Furthermore, this API will automatically get download links for videos in both Standard quality and High quality.

## How the API works 
`BASE_URL` will serve as the server url which may be replaced by main url e.g `https://www.exanple.com`.   
1. `BASE_URL/?req=videos`  
(i) *GET:* This displays all the videos stored in the database. It can be preceeded `id` parameter to get a specific video based on its ID which can either be the video ID in database or the video ID as defined by facebook. e.g: `BASE_URL/?req=videos&id=VIDEO_ID`. It response is in a json format as follows:   
```js 
// BASE_URL/?req=videos
{
    errored: false,
    message: [{
            id: "1",
            url: "https://www.facebook.com/zakirnaikofficial/videos/188017199256453/",
            image_src: "pictures/361857618119400_363732597931902.jpg",
            category: "others",
            video_id: "361857618119400_363732597931902",
            title: "Viral video",
            lq_size: null,
            hq_size: null,
            last_updated: "2020-06-16 22:08:29",
            sub_linked: "",
            promoted: "0",
            show_video: "1"
        },
        {
            id: "2",
            url: "https://www.facebook.com/BigDawsTv/videos/783798532024900/",
            image_src: "pictures/361857618119400_363406614631167.jpg",
            category: "Comedy",
            video_id: "361857618119400_363406614631167",
            title: "Viral video",
            lq_size: null,
            hq_size: null,
            last_updated: "2020-06-16 22:08:29",
            sub_linked: "",
            promoted: "0",
            show_video: "1"
        }]
}
```
```js
// BASE_URL/?req=videos&id=361857618119400_363732597931902
{
    errored: false,
    message: [{
        id: "1",
        url: "https://www.facebook.com/zakirnaikofficial/videos/188017199256453/",
        image_src: "pictures/361857618119400_363732597931902.jpg",
        category: "others",
        video_id: "361857618119400_363732597931902",
        title: "Viral video",
        lq_size: null,
        hq_size: null,
        last_updated: "2020-06-16 22:08:29",
        sub_linked: "",
        promoted: "0",
        show_video: "1"
    }]
}
// on error, it will result to an empty array []
```

(ii) *POST:* This fetches video from source (i.e from facebook) using the facebook graph API. It runs some authetication and also is run either periodically or invoked manually. Client side does not need to call this API.  

2. `BASE_URL/?req=downloadlink&url=VIDEO_FACEBOOK_URL`
(i) *GET:* This displays the downlinks for a video and also video size (in bytes). The `url` parameter is compulsory otherwise it results to an error. On success, the follwoing will be returned:
```js
{
    errored: false,
    message: {
        LQ_Link: {
            link: "https://video-los2-1.xx.fbcdn.net/v/t42.9040-2/10....",
            size: 13628179 // returned as byte divide by 1024 to convert to MB
        },
        HQ_Link: {
            link: "https://video-los2-1.xx.fbcdn.net/v/t34130-2/10000.mp4?_nc_c...",
            size: 113367501 // if size is unknown, it will result to "unknown" which is a string
        }
    }
}
```
## ON ERROR
On empty result, the following is displayed:
```js
// e.g: BASE_URL/?req=videos&id=INVALID_ID
{
    errored: true,
    message: [ ]
}
```
On general errors such as an unidentified error or server error. It will be as follows:
```js
{
    errored: true,
    message: "Error message goes here"
}
```
Notice the `errored` property returned with every response. For every API call that does not result to an error, errored will `false` while those that are errored will be `true`.
## NB
- Any video returned from `BASE_URL/?req=videos` that has ` show_video: "0" ` implies it may not display accurately kindly disallow it from showing on client side.
- `promoted` property of videos `DOES NOT FUNCTION AT THE MOMENT`. On update to the API, this documentation will be updated too. 
- To increase speed of API, only when video download link is called that the video size is updated on the database. 
- Maximum of 180 seconds for each API call. Taking longer implies an anomaly