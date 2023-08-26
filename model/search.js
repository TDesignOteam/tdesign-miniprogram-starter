/**
 * @param {number} sort
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} minPrice
 * @param {number} maxPrice
 * @param {string} keyword
 */

export function getSearchHistory() {
    return {
        historyWords: [
            'AI绘画',
            'Stable Diffusion',
            '版权素材',
            '星空',
            'illustration',
            'AI绘画'
        ],
    };
}

export function getSearchPopular() {
    return {
        popularWords: [
            '考研和靠边同时上岸应该怎么选？有哪些参考建议',
            '日常饮食中，如何选择优质蛋白',
            '你有没有网购维权成功的经历？求分享经验',
            '夏季带孩子旅游，你的必备物品有哪些',
            '在海外越卖越贵，中国汽车做对了什么',
            '当HR问你离职原因，怎么回答最能被接受'
        ],
    };
}

/**
 * 获取搜索结果的接口
 */
// export function getSearchResult() {
//   return {
//     saasId: null,
//     storeId: null,
//     pageNum: 1,
//     pageSize: 30,
//     totalCount: 1,
//     spuList: getGoodsList(7),
//     algId: 0,
//   };
// }
