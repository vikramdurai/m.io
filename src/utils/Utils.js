class Utils {
    static rand(max) {
        return Math.floor(Math.random() * max);
    }
    static serializePlayerArray(arr) {
        var serialData = [];
        for (var i = 0; i < arr.length; ++i) {
            serialData = serialData.concat(arr[i].player.getUpdateData());
        }
        return serialData;
    }
}

module.exports = Utils;