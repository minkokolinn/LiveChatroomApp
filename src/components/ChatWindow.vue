<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="message in formatMessages" :key="message.id">
        <span class="created-at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    let msgBox = ref(null)
    let messages = ref([]);
    let formatMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: formatTime };
      });
    });
    let colMsgQuery = query(collection(db, "messages"), orderBy("created_at"));
    onSnapshot(colMsgQuery, (snap) => {
      let result = [];
      snap.docs.forEach((doc) => {
        let document = { ...doc.data(), id: doc.id };
        if (doc.data().created_at) {
          result.push(document);
        }
      });
      messages.value = result;
    });

    onUpdated(()=>{
      msgBox.value.scrollTop = msgBox.value.scrollHeight
    })

    return { messages, formatMessages, msgBox };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
