var app = new Vue({
    el: '#app',
    data: {
        name: '田口真人',
        dateOfBirth:new Date('1999/11/19')
    },
    computed: {
        age: function () {
            var today = new Date();
            // 今年の誕生日
            var birthdayOfThisYear = new Date(
                today.getFullYear(),
                this.dateOfBirth.getMonth(),
                this.dateOfBirth.getDate()    
            );
            // 年齢を求める
            var age = today.getFullYear() - this.dateOfBirth.getFullYear();
            // 誕生日が過ぎていなければ1を引く
            if(today<birthdayOfThisYear) {
                --age;
            }
            return age;
        },
        fare: function () {
            // 13歳以上1000円、13歳未満500円
            if (this.age >= 13) {
                return 1000;
            } else {
                return 500;
            }
        }
    }
});