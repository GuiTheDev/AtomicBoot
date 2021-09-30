"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueRepeatMode = exports.QueryType = void 0;
/**
 * The search query type
 * This can be one of:
 * - AUTO
 * - YOUTUBE
 * - YOUTUBE_PLAYLIST
 * - SOUNDCLOUD_TRACK
 * - SOUNDCLOUD_PLAYLIST
 * - SOUNDCLOUD
 * - SPOTIFY_SONG
 * - SPOTIFY_ALBUM
 * - SPOTIFY_PLAYLIST
 * - FACEBOOK
 * - VIMEO
 * - ARBITRARY
 * - REVERBNATION
 * - YOUTUBE_SEARCH
 * - YOUTUBE_VIDEO
 * - SOUNDCLOUD_SEARCH
 * @typedef {string} QueryType
 */
var QueryType;
(function (QueryType) {
    QueryType["AUTO"] = "auto";
    QueryType["YOUTUBE"] = "youtube";
    QueryType["YOUTUBE_PLAYLIST"] = "youtube_playlist";
    QueryType["SOUNDCLOUD_TRACK"] = "soundcloud_track";
    QueryType["SOUNDCLOUD_PLAYLIST"] = "soundcloud_playlist";
    QueryType["SOUNDCLOUD"] = "soundcloud";
    QueryType["SPOTIFY_SONG"] = "spotify_song";
    QueryType["SPOTIFY_ALBUM"] = "spotify_album";
    QueryType["SPOTIFY_PLAYLIST"] = "spotify_playlist";
    QueryType["FACEBOOK"] = "facebook";
    QueryType["VIMEO"] = "vimeo";
    QueryType["ARBITRARY"] = "arbitrary";
    QueryType["REVERBNATION"] = "reverbnation";
    QueryType["YOUTUBE_SEARCH"] = "youtube_search";
    QueryType["YOUTUBE_VIDEO"] = "youtube_video";
    QueryType["SOUNDCLOUD_SEARCH"] = "soundcloud_search";
})(QueryType = exports.QueryType || (exports.QueryType = {}));
/**
 * The queue repeat mode. This can be one of:
 * - OFF
 * - TRACK
 * - QUEUE
 * - AUTOPLAY
 * @typedef {number} QueueRepeatMode
 */
var QueueRepeatMode;
(function (QueueRepeatMode) {
    QueueRepeatMode[QueueRepeatMode["OFF"] = 0] = "OFF";
    QueueRepeatMode[QueueRepeatMode["TRACK"] = 1] = "TRACK";
    QueueRepeatMode[QueueRepeatMode["QUEUE"] = 2] = "QUEUE";
    QueueRepeatMode[QueueRepeatMode["AUTOPLAY"] = 3] = "AUTOPLAY";
})(QueueRepeatMode = exports.QueueRepeatMode || (exports.QueueRepeatMode = {}));
