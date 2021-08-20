<template>
  <div>
    <PageTitle :title="title" />
    <ChildData
      :Name="Name"
      :likes="likes"
      :itOk="itok"
      :commandId="commandId"
      :auther="auther.사학과"
    />
    <ChildEvent ref="child_component" />
    <button @click="checkedchild">자식 컴포넌트 데이터 조회</button>
  </div>
  <div>
    <Slot>
      <template #header>
        <h1>팝업타이틀</h1>
      </template>
      <template #default>
        <h1>팝업컨텐츠</h1>
      </template>
      <template #footer>
        <button>닫기</button>
      </template>
    </Slot>
  </div>
  <ProvideInjectChild />
</template>
<script>
import PageTitle from "../components/PageTitle";
import ChildData from "../views/ChildData";
import ChildEvent from "./ChildEvent.vue";
import ProvideInjectChild from "./ProvideInjectChild.vue";
import Slot from "./Slot.vue";
export default {
  name: "",
  components: { PageTitle, ChildData, ChildEvent, Slot, ProvideInjectChild },
  data() {
    return {
      title: "1페이지",
      Name: "건우",
      likes: 56,
      itOk: true,
      commandId: ["건우", "은영"],
      auther: { 사학과: "건우", 간호학과: "은영" },
      items: [1, 2],
    };
  },
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    },
  },
  provide() {
    return {
      itemLength: this.items.length,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkedchild() {
      alert(this.msg);
    },
    Slotalert() {},
  },
};
</script>
