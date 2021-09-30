"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractorModel = void 0;
class ExtractorModel {
    /**
     * Model for raw Discord Player extractors
     * @param {string} extractorName Name of the extractor
     * @param {object} data Extractor object
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(extractorName, data) {
        /**
         * The extractor name
         * @type {string}
         */
        this.name = extractorName;
        /**
         * The raw model
         * @name ExtractorModel#_raw
         * @type {any}
         * @private
         */
        Object.defineProperty(this, "_raw", { value: data, configurable: false, writable: false, enumerable: false });
    }
    /**
     * Method to handle requests from `Player.play()`
     * @param {string} query Query to handle
     * @returns {Promise<ExtractorModelData>}
     */
    handle(query) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._raw.getInfo(query);
            if (!data)
                return null;
            return {
                playlist: (_a = data.playlist) !== null && _a !== void 0 ? _a : null,
                data: (_c = (_b = data.info) === null || _b === void 0 ? void 0 : _b.map((m) => ({
                    title: m.title,
                    duration: m.duration,
                    thumbnail: m.thumbnail,
                    engine: m.engine,
                    views: m.views,
                    author: m.author,
                    description: m.description,
                    url: m.url,
                    source: m.source || "arbitrary"
                }))) !== null && _c !== void 0 ? _c : []
            };
        });
    }
    /**
     * Method used by Discord Player to validate query with this extractor
     * @param {string} query The query to validate
     * @returns {boolean}
     */
    validate(query) {
        return Boolean(this._raw.validate(query));
    }
    /**
     * The extractor version
     * @type {string}
     */
    get version() {
        var _a;
        return (_a = this._raw.version) !== null && _a !== void 0 ? _a : "0.0.0";
    }
}
exports.ExtractorModel = ExtractorModel;
