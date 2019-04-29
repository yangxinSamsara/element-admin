<template>
  <div class="editor">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <el-button type="primary" @click="saveHtml()">保存</el-button>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  data() {
    return {
      content: "<p>hello world</p>",
      editorOption: {
        theme: "snow"
      }
    };
  },
  components: { quillEditor },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorBlur(e) {},
    onEditorFocus(e) {},
    onEditorChange(e) {},
    saveHtml(event) {
      alert(this.content);
    }
  }
};
</script>
<style scoped>
.editor {
  background: #fff;
  border: 1px solid #000;
}
</style>
