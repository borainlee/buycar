const CartTotal = {
    // 2.3子组件接收
    props: ['list'],
    template: `
      <div class="total">
      <!--2.5使用-->
        <span>总价：{{total}}</span>
        <button>结算</button>
      </div>
    `,
    // 2.4计算总价
    computed: {
        total() {
            var t = 0
            this.list.some(item => {
                t += item.num * item.price
            })
            return t
        },
    },
}
