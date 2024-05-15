"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconUri = void 0;
var metaContract_1 = require("./rules/metaContract");
function getIconUri(params) {
    var _a;
    if (params.type === 'metaContract') {
        var logoName = (_a = metaContract_1.metaContractIcons.find(function (icon) { return icon.genesis === params.genesis && icon.codehash === params.codehash; })) === null || _a === void 0 ? void 0 : _a.logo;
        if (!logoName) {
            return '';
        }
        return "https://unpkg.com/@mvc-org/mvc-resources/icons/meta-contract/".concat(logoName);
    }
    return "";
}
exports.getIconUri = getIconUri;
