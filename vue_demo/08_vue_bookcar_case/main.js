const bookcart = new Vue({
  el: '#bookcart',
  data: {
    books_list: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    sub(index) {
      let count = this.books_list[index].count;
      if(count-- > 1){
        this.books_list[index].count--;
      }
    },
    add(index) {
      this.books_list[index].count++;
    },
    removeHandle(index) {
      this.books_list.splice(index,1);
      if(this.books_list.length === 0){

      }
    },
  },
  computed: {
    totalPrice(){
      let price = 0;
      // for(let i in this.books_list) 这里面的i还是索引值

      //for(let i of this.books_list) 这里的i为数组元素
      // for (let book of this.books_list){
      //   price += book.price * book.count
      // }

      //用reduce方法
      price = this.books_list.reduce(function (preValue,book) {
        return preValue + book.price * book.count
      }, 0);
      return price;
    }
  },

  //过滤器
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  }
});