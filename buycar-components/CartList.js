const CartList = {
    // 3.3注册
    props: ['list'],
    template: `
      <div>
        <div :key='item.id' v-for='(item,index) in list' class="item">
          <img :src="item.img"/>
          <div class="name">{{item.name}}</div>
          <div class="change">
            <a href="" @click.prevent='sub(index)'>－</a>
            <!-- 5.1绑定修改input事件-->
            <input type="text" class="num" :value='item.num' @input='changeNum(index,$event)' />
            <a href=""  @click.prevent='add(index)'>＋</a>
          </div>
          <!-- 4.1绑定删除click事件-->
          <div class="del" @click='del(index)'>×</div>
        </div>
      </div>
    `,
    methods: {
        // 4.2注册点击事件
        // del(index) {
        //     // 删除list list是引用类型 内存地址
        //     this.list.splice(index, 1)
        // },

        // 子传父
        del(index) {
            this.$emit('del-item', index)
        },

        changeNum(index, event) {
            console.log(index, event.target.value)
            this.$emit('change-num', {
                index: index,
                type: 'change',
                value: event.target.value,
            })
        },
        sub(index) {
            this.$emit('change-num', {
                type: 'sub',
                index: index,
            })
        },
        add(index) {
            this.$emit('change-num', {
                type: 'add',
                index: index,
            })
        },
    },
}
