<script setup>
import {reactive, ref} from "vue";
import {MdPreview} from "md-editor-v3";
import 'md-editor-v3/lib/style.css';

const state = reactive({
  text: '',
  theme: 'light',
});

const hellotxt = ref("<Hi There👋 />")

const text = ref("# 关于此网站——我的小工具\n" +
    "> Powered By `GoLang` && `Vite/Vue3`\n" +
    "## 后端技术栈\n" +
    "- 语言：Go语言(GoLang)\n" +
    "- 框架：Gin\n" +
    "- ORM框架：Gorm\n" +
    "- Excel-Reader：Excelize\n" +
    "\n" +
    "## 前端技术栈\n" +
    "- 构建工具：Vite\n" +
    "- 框架：Vue3(JavaScript)\n" +
    "- UI组件库: Quasar-Framework\n" +
    "\n" +
    "```Java\n" +
    "Supplier<T> me = () -> new Man(\"Du\",21,\"YuutsuNo_NeonRider\");\n" +
    "```\n" +
    "\n" +
    "在这里上班以来的心路历程🧐😳🤤😚🥰😍😟🤔😐☹️🤬🥹🫠😱🥶💔🤡😀🥲😅😀🤭🤣🤢🤮🤪🤪🤪😈🔪")
const id = 'preview-only'
const img = ref("https://camo.githubusercontent.com/d6403737655fe6f8c0a1ad572c987e484fb6c7b108ccc8ddb80ce5b32e019e73/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d776162736873")
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="col-2.5">
      <q-card-section>
        <h4 style="font-family: 'Cascadia Code',serif">{{ hellotxt }}</h4>
      </q-card-section>
      <q-separator spaced/>
      <q-card-section>
        <img :src=img>
      </q-card-section>
      <q-separator spaced/>
      <q-card-section style="text-align: center">
        <span style="font-family: 'Microsoft YaHei',serif;font-weight: bolder;font-size: larger">忧郁的农村人</span>
      </q-card-section>
    </q-card>

    <q-card class="col-9">
      <div style="width: 100%">
        <MdPreview :theme="state.theme" :id="id" :modelValue="text" style=""/>
      </div>
    </q-card>


    <meting-js
        name="夏天 烟火 我的尸体"
        artist="Seto"
        url="https://nene0721.fun:8889/down/0n4PYIduqA4C.mp3"

        cover="http://p1.music.126.net/zPStx3B3bsPngL9hrwHANw==/109951169558382437.jpg?param=130y130"
        fixed="true">
        <pre hidden>
                [00:00.000] 作词 : Seto
                [00:01.000] 作曲 : Seto
                [00:02.000] 编曲 : Seto
                [00:25.823]等祭典的五月 不清楚的视线
                [00:36.991]到幽灵状态才发现
                [00:42.396]你早就挥手告别
                [00:46.964]拜 拜
                [01:09.868]多美妙的错觉 对混乱的速写
                [01:21.177]用电波传爱的弧线 可还是慢了一点
                [01:31.526]你的脸 淅沥在 我心里
                [01:35.192]狂乱拍 多彻底 愚昧的信赖
                [01:42.142]当夏天 淹没在 你背影
                [01:46.081]早离开 只剩我 徘徊
                [02:19.053]我不想再区别 无关我的世界
                [02:29.790]用你手上的花朵编 我身上的坟墓吧
                [02:39.931]最期待的烟火 盛开
                [02:45.366]你留下的些许 无奈
                [02:51.325]当夏天 淹没在 你背影 早离开 只剩我
                [03:01.648]我冰冷的尸体 绽放在
                [03:05.082]夜空中 等你猜 我色彩 是明还是白
                [03:13.410]当夏天 淹没在 我伤口
                [03:17.122]不意外
                [03:18.806]只剩我 腐坏
	      </pre>
    </meting-js>
  </div>
</template>

<style scoped>

</style>

