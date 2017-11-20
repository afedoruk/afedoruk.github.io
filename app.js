Vue.component("string", {
  props: ['wordList', 'numOfSylls'],
  template: '<div class="string rounded border-secondary" :class="{ok: isCompleted }"><word v-for="word in wordList" :word="word"></word></div>',
  computed: {
    isCompleted: function () {
      var count = 0;
      console.log(this.wordList)
      this.wordList.forEach(function (item) {
        count += item.count;
      });
      return count == this.numOfSylls
    },
  },
  watch: {
    isCompleted: function (newValue) {
      this.$emit("update", newValue)
    }
  }
})

Vue.component('word', {
  props: ['word', 'group'],
  template: '<span class="badge badge-info word">{{ word.word }} </span>'
})

Vue.component('success', {
  template: '<span class="badge badge-success">Completed!</span>'
})

var app = new Vue({
  el: '#app',
  data: {
    isComplete: false,
    completeCounter: 0,
    strings: [
      {
        "wordList": [],
        "numOfSylls": 5
      },
      {
        "wordList": [],
        "numOfSylls": 7
      },
      {
        "wordList": [],
        "numOfSylls": 5
      },
    ],
    wordList: [
      {
        "word": "a",
        "count": 1,
        "group": 1
      },
      {
        "word": "a",
        "count": 1,
        "group": 2
      },
      {
        "word": "a",
        "count": 1,
        "group": 3
      }
    ]
  },
  methods: {
    detectCompleteness: function(isCompleted) {
      console.log("hey");
      if(isCompleted) {
        this.completeCounter++
      } else {
        this.completeCounter--
      }
      if(this.completeCounter == this.strings.length) {
        this.isComplete = true
      } else {
        this.isComplete = false
      }
    }
  }
})