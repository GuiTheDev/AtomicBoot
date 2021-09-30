"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.Util = exports.StreamDispatcher = exports.VoiceUtils = exports.Track = exports.Queue = exports.QueryResolver = exports.ErrorStatusCode = exports.PlayerError = exports.Player = exports.Playlist = exports.ExtractorModel = exports.AudioFilters = void 0;
var AudioFilters_1 = require("./utils/AudioFilters");
Object.defineProperty(exports, "AudioFilters", { enumerable: true, get: function () { return AudioFilters_1.AudioFilters; } });
var ExtractorModel_1 = require("./Structures/ExtractorModel");
Object.defineProperty(exports, "ExtractorModel", { enumerable: true, get: function () { return ExtractorModel_1.ExtractorModel; } });
var Playlist_1 = require("./Structures/Playlist");
Object.defineProperty(exports, "Playlist", { enumerable: true, get: function () { return Playlist_1.Playlist; } });
var Player_1 = require("./Player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return Player_1.Player; } });
var PlayerError_1 = require("./Structures/PlayerError");
Object.defineProperty(exports, "PlayerError", { enumerable: true, get: function () { return PlayerError_1.PlayerError; } });
Object.defineProperty(exports, "ErrorStatusCode", { enumerable: true, get: function () { return PlayerError_1.ErrorStatusCode; } });
var QueryResolver_1 = require("./utils/QueryResolver");
Object.defineProperty(exports, "QueryResolver", { enumerable: true, get: function () { return QueryResolver_1.QueryResolver; } });
var Queue_1 = require("./Structures/Queue");
Object.defineProperty(exports, "Queue", { enumerable: true, get: function () { return Queue_1.Queue; } });
var Track_1 = require("./Structures/Track");
Object.defineProperty(exports, "Track", { enumerable: true, get: function () { return Track_1.Track; } });
var VoiceUtils_1 = require("./VoiceInterface/VoiceUtils");
Object.defineProperty(exports, "VoiceUtils", { enumerable: true, get: function () { return VoiceUtils_1.VoiceUtils; } });
var StreamDispatcher_1 = require("./VoiceInterface/StreamDispatcher");
Object.defineProperty(exports, "StreamDispatcher", { enumerable: true, get: function () { return StreamDispatcher_1.StreamDispatcher; } });
var Util_1 = require("./utils/Util");
Object.defineProperty(exports, "Util", { enumerable: true, get: function () { return Util_1.Util; } });
__exportStar(require("./types/types"), exports);
// eslint-disable-next-line @typescript-eslint/no-var-requires
exports.version = require(`${__dirname}/../package.json`).version;
