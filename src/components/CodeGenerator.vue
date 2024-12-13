<script setup>


import {reactive, ref} from "vue";
import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {useQuasar} from "quasar";
import request from "../request/request.js";
import axios from "axios";


const $q = useQuasar()
const id = 'preview-only'
const model = ref("")
const denseOpts = ref(false)
const dense = ref(false)
const state = reactive({
  text: '',
  theme: 'light',
});
const gen_way = ref("Class")


const options = ref([
  '喔爱你没差', '那一点时差', '你离开这一拳给的太重'
])

const options_way = ref([
  'Class', 'SQL-Insert', 'SQL-Update', 'SQL-Delete', 'SQL-Select'
])

const sheet = ref("")

const excel = ref(null)

const text = ref("```csharp\npublic class Hello\n{\n\tpublic string Name { get; set; }\n\tpublic int Age { get; set; }\n\tpublic string Sex { get; set; }\n}\n```")

function GetExcelSheets() {
  if (!excel.value) {
    $q.notify('未选择Excel哦')
    return;
  }

  const formData = new FormData()

  formData.append('file', excel.value)

  request.post('/CSharpClass/get_sheets', formData).then(res => {
    options.value = res.sheets
    sheet.value = res.sheets[0]
    console.log(res)
  })
}

function download() {
  request.get('/CSharpClass/downloadExcel')

}

function GenerateCode() {
  if (!excel.value || !sheet.value) {
    $q.notify({
      color: 'red',
      message: '有空选项未选择',
      position: 'top'
    })
    return;
  }
  const form = new FormData();
  form.append('file', excel.value)
  form.append('sheet_name', sheet.value)
  form.append('obj_code', gen_way.value)
  request.post('/CSharpClass/generate', form)
      .then(res => {
        console.log(res.status)
        text.value = res.obj_code

      })
}


</script>

<template>
  <div class="container">
    <div class="left-pane">
      <q-card flat bordered style="min-height: 100%; min-width: 100%">
        <q-card-section class="row items-center justify-between">
          <div class="col-3">
            <q-file name="file" v-model="excel" label="请选择Excel🤭"/>
          </div>
          <q-btn push @click="GetExcelSheets" color="white" text-color="primary" label="にっこにっこにー！"/>
        </q-card-section>

        <q-separator spaced/>
        <q-card-section>
          <div>
            <q-select
                filled
                v-model="sheet"
                name="sheet"
                :options="options"
                label="选择Sheet"

                :dense="dense"
                :options-dense="denseOpts"

            />
          </div>
        </q-card-section>


        <q-separator spaced/>
        <q-card-section>
          <q-select outlined v-model="gen_way" :options="options_way" label="产出代码类型"/>
        </q-card-section>

        <q-separator spaced/>
        <q-card-section>
          <div class="q-pa-md q-gutter-sm">
            <q-btn push @click="GenerateCode" color="secondary" icon="code" label="生成"/>

          </div>

        </q-card-section>

      </q-card>
    </div>
    <div class="right-pane">
      <MdPreview style="max-width: 100%" :theme="state.theme" :id="id" :modelValue="text"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex; /* 使用 Flexbox 布局 */
  height: 95vh; /* 让容器占满视口高度 */
  overflow: hidden;
}

.left-pane, .right-pane {
  flex: 1; /* 每个子元素均分宽度 */
  padding: 16px; /* 添加一些内边距 */
  display: flex;
  //align-items: center; /* 垂直居中 */
  //justify-content: center; /* 水平居中 */

}

.left-pane {
  background-color: white; /* 左侧背景色 */
}

.right-pane {
  background-color: #ffffff; /* 右侧背景色 */
}
</style>
