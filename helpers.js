const axios = require("axios");
const iso = require("iso8601-duration");
const { parse, toSeconds } = iso;

const getPlaylistIdFromUrl = url => {
  const parsed = getJsonFromUrl(url);
  return parsed.list;
};

const getChannelIdFromUrl = (url = "") => {
  const arr = url.split("/");
  return arr[arr.length - 1];
};

const getApiUrl = (
  section,
  userParams,
  apiKey = "AIzaSyAlAtI54mpJ7iDblL-pisPlQr8F6vmTy0A",
) => {
  const params = {
    part: "snippet",
    maxResults: 50,
    ...userParams,
  };

  const baseUrl = `https://www.googleapis.com/youtube/v3/${section}?key=${apiKey}`;

  const paramsUrl = Object.entries(params)
    .map(([key, value]) => {
      return `&${key}=${value}`;
    })
    .join("");

  return baseUrl + paramsUrl;
};

const getResultPages = async (apiSection, params) => {
  const resultPages = [];
  const firstUrl = getApiUrl(apiSection, params);

  // get first one
  await axios
    .get(firstUrl)
    .then(res => resultPages.push(res.data))
    .catch(err => console.error(err));

  if (resultPages.length) {
    while (resultPages[resultPages.length - 1].nextPageToken) {
      params.pageToken = resultPages[resultPages.length - 1].nextPageToken;

      const nextUrl = getApiUrl(apiSection, params);
      const newPage = await axios
        .get(nextUrl)
        .then(res => res.data)
        .catch(err => console.error(err));
      resultPages.push(newPage);
    }
  }

  return resultPages;
};

const getVideosFromPlaylistId = async playlistId => {
  const params = {
    playlistId,
    part: "contentDetails,snippet",
  };

  const resultPages = await getResultPages("playlistItems", params);

  // video ids in [50, 50, remaining]
  const videoIds = resultPages.map(obj =>
    obj.items.map(item => item.contentDetails.videoId),
  );

  return videoIds;
};

const getVideosFromChannelId = async channelId => {
  let videoIds = [];

  const params = {
    channelId,
  };

  const resultPages = await getResultPages("search", params);

  if (resultPages.length) {
    // video ids in [50, 50, remaining]
    videoIds = resultPages.map(obj => obj.items.map(item => item.id.videoId));
  }

  return videoIds;
};

const processVideoIds = async videoIds => {
  const videoPromises = videoIds.map(page => {
    const id = page.join(",");
    const url = getApiUrl("videos", {
      part: "statistics,snippet,contentDetails",
      id,
    });
    return axios.get(url);
  });

  const res = await Promise.all(videoPromises);

  const videoDetails = [];
  res
    .map(res => res.data)
    .map(res => res.items)
    .forEach(page => videoDetails.push(...page));

  const reducedDetails = reduceDetails(videoDetails);

  return reducedDetails;

  //--------------
  function reduceDetails(videoDetails) {
    const reduced = [];
    videoDetails.forEach(video => {
      reduced.push({
        id: video.id,
        channelTitle: video.snippet.channelTitle,
        title: video.snippet.title,
        publishedAt: video.snippet.publishedAt,
        viewCount: video.statistics.viewCount,
        duration: video.contentDetails.duration,
        commentCount: video.statistics.commentCount,
        likeCount: video.statistics.likeCount,
        dislikeCount: video.statistics.dislikeCount,
      });
    });

    return reduced;
  }
};

export function getVideoTotals(videoDetails: Array<any>) {
  const statistics = {
    viewCount: 0,
    commentCount: 0,
    likeCount: 0,
    dislikeCount: 0,
    duration: 0,
    totalVideos: videoDetails.length,
  };

  videoDetails.forEach(video => {
    Object.entries(video).forEach(([key, value]) => {
      statistics[key] = statistics[key] + Number(value) || 0;
    });
  });

  statistics.duration = videoDetails.reduce(
    (acc, video) => (acc += toSeconds(parse(video.duration))),
    0,
  );

  return statistics;
}

const helpers = {
  getPlaylistIdFromUrl,
  getChannelIdFromUrl,
  getApiUrl,
  getVideosFromChannelId,
  getVideosFromPlaylistId,
  processVideoIds,
  getVideoTotals,
};

module.exports = helpers;

// ********
function getJsonFromUrl(url) {
  var query = url.split("?")[1];
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}
