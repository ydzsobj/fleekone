<template>
    <div>
       <van-nav-bar
        title="用户注册"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />

        <div class="register-panel">
        <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        <div class="register-button">
            <van-button type="primary" @click="axiosRegisterUser" size="large">马上注册</van-button>
        </div>
       </div>

    </div>
</template>

<script>
    import url from '@/serviceAPI.config.js'
    import axios from 'axios'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)   
            },
            //*********axios注册用户方法********
axiosRegisterUser(){
    console.log(this.username,this.password)
    axios({
      url: url.registerUser,
      method: 'post',
      data:{
          username:this.username,
          password:this.password 
      }
    })
    .then(response => {
        console.log(response)
        //如果返回code为200，代表注册成功，我们给用户作Toast提示
        if(response.data.code == 200){
            Toast.success('注册成功')
        }else{
            console.log(response.data.message)
            Toast.fail('注册失败')
        }
    })
    .catch((error) => {
        console.log(error)
        Toast.fail('注册失败')
    })

}
    },
    }
</script>