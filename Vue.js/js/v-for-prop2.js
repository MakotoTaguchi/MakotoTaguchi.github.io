var customers = [
    { id: 1, name: '大竹真', age: 35, sex: '男', pref: '東京都' },
    { id: 2, name: '山田太郎', age: 25, sex: '男', pref: '千葉県' },
    { id: 3, name: '井上五郎', age: 36, sex: '男', pref: '長野県' },
    { id: 4, name: '江藤花子', age: 18, sex: '女', pref: '東京都' },
    { id: 5, name: '犬山虎之助', age: 55, sex: '男', pref: '大阪府' },
    { id: 6, name: '桜田一郎', age: 20, sex: '男', pref: '東京都' },
    { id: 7, name: '大木啓介', age: 17, sex: '男', pref: '東京都' },
    { id: 8, name: '桜田和夫', age: 53, sex: '男', pref: '大阪府' },
    { id: 9, name: '加藤佳子', age: 20, sex: '女', pref: '東京都' },
    { id: 10, name: '吉田めぐみ', age: 17, sex: '女', pref: '東京都' },
    { id: 11, name: '長見真', age: 35, sex: '男', pref: '東京都' },
    { id: 12, name: '山田毅', age: 25, sex: '男', pref: '千葉県' },
    { id: 13, name: '斎藤一郎', age: 46, sex: '男', pref: '長野県' },
    { id: 14, name: '芹川花子', age: 28, sex: '女', pref: '東京都' },
    { id: 15, name: '大山三郎', age: 35, sex: '男', pref: '大阪府' },
    { id: 16, name: '小野寺健太', age: 24, sex: '男', pref: '東京都' },
    { id: 17, name: '谷村周平', age: 16, sex: '男', pref: '東京都' },
    { id: 18, name: '二宮金次郎', age: 59, sex: '男', pref: '大阪府' },
    { id: 19, name: '徳川佳子', age: 21, sex: '女', pref: '東京都' },
    { id: 20, name: '大城ゆき', age: 17, sex: '女', pref: '神奈川県' },
    { id: 21, name: '大竹真', age: 35, sex: '男', pref: '東京都' },
    { id: 22, name: '山田太郎', age: 25, sex: '男', pref: '千葉県' },
    { id: 23, name: '井上五郎', age: 42, sex: '男', pref: '長野県' }
];
var app = new Vue({
    el: '#app',
    data: {
        customers: customers
    },
    computed: {
        sortedByAgeCustomers: function () {
            return this.customers.sort(function (a, b) {
                return a.age - b.age;
            });
        }
    }
});