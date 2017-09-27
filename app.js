Vue.component("string", {
  template: '<div class="string container" drake="main" v-dragula></div>', data: {
    wordList: []
  }
})

Vue.component('word', {
  props: ['word', 'group'], template: '<span class="badge badge-info word">{{ word.word }} </span>'
})

Vue.component('success', {
  template: '<span class="badge badge-success">Completed!</span>'
})

var vm = new Vue({
  el: '#app', data: {
    music: true,
    sound: true,
    screenNum: 1, maxScreenNum: 7, completedLines: 0,
    wordList1: [], wordList2: [], wordList3: [],
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
      },
      {
        "word": "a",
        "count": 1,
        "group": 4
      },
      {
        "word": "a",
        "count": 1,
        "group": 5
      },
      {
        "word": "a",
        "count": 1,
        "group": 6
      },
      {
        "word": "about",
        "count": 2,
        "group": 7
      },
      {
        "word": "above",
        "count": 2,
        "group": 1
      },
      {
        "word": "ache",
        "count": 1,
        "group": 2
      },
      {
        "word": "ad",
        "count": 1,
        "group": 3
      },
      {
        "word": "after",
        "count": 2,
        "group": 4
      },
      {
        "word": "all",
        "count": 1,
        "group": 5
      },
      {
        "word": "am",
        "count": 1,
        "group": 6
      },
      {
        "word": "am",
        "count": 1,
        "group": 7
      },
      {
        "word": "an",
        "count": 1,
        "group": 1
      },
      {
        "word": "an",
        "count": 1,
        "group": 2
      },
      {
        "word": "and",
        "count": 1,
        "group": 3
      },
      {
        "word": "and",
        "count": 1,
        "group": 4
      },
      {
        "word": "and",
        "count": 1,
        "group": 5
      },
      {
        "word": "and",
        "count": 1,
        "group": 6
      },
      {
        "word": "apparatus",
        "count": 4,
        "group": 7
      },
      {
        "word": "are",
        "count": 1,
        "group": 1
      },
      {
        "word": "are",
        "count": 1,
        "group": 2
      },
      {
        "word": "arm",
        "count": 1,
        "group": 3
      },
      {
        "word": "as",
        "count": 1,
        "group": 4
      },
      {
        "word": "as",
        "count": 1,
        "group": 5
      },
      {
        "word": "as",
        "count": 1,
        "group": 6
      },
      {
        "word": "as",
        "count": 1,
        "group": 7
      },
      {
        "word": "ask",
        "count": 1,
        "group": 1
      },
      {
        "word": "at",
        "count": 1,
        "group": 2
      },
      {
        "word": "at",
        "count": 1,
        "group": 3
      },
      {
        "word": "at",
        "count": 1,
        "group": 4
      },
      {
        "word": "away",
        "count": 1,
        "group": 5
      },
      {
        "word": "bare",
        "count": 1,
        "group": 6
      },
      {
        "word": "be",
        "count": 1,
        "group": 7
      },
      {
        "word": "beat",
        "count": 1,
        "group": 1
      },
      {
        "word": "beauty",
        "count": 2,
        "group": 2
      },
      {
        "word": "bed",
        "count": 1,
        "group": 3
      },
      {
        "word": "beneath",
        "count": 2,
        "group": 4
      },
      {
        "word": "bitter",
        "count": 2,
        "group": 5
      },
      {
        "word": "black",
        "count": 1,
        "group": 6
      },
      {
        "word": "blood",
        "count": 1,
        "group": 7
      },
      {
        "word": "blow",
        "count": 1,
        "group": 1
      },
      {
        "word": "blue",
        "count": 1,
        "group": 2
      },
      {
        "word": "boil",
        "count": 1,
        "group": 3
      },
      {
        "word": "boy",
        "count": 1,
        "group": 4
      },
      {
        "word": "breast",
        "count": 1,
        "group": 5
      },
      {
        "word": "but",
        "count": 1,
        "group": 6
      },
      {
        "word": "but",
        "count": 1,
        "group": 7
      },
      {
        "word": "but",
        "count": 1,
        "group": 1
      },
      {
        "word": "but",
        "count": 1,
        "group": 2
      },
      {
        "word": "butt",
        "count": 1,
        "group": 3
      },
      {
        "word": "by",
        "count": 1,
        "group": 4
      },
      {
        "word": "by",
        "count": 1,
        "group": 5
      },
      {
        "word": "call",
        "count": 1,
        "group": 6
      },
      {
        "word": "can",
        "count": 1,
        "group": 7
      },
      {
        "word": "chant",
        "count": 1,
        "group": 1
      },
      {
        "word": "chocolate",
        "count": 2,
        "group": 2
      },
      {
        "word": "cool",
        "count": 1,
        "group": 3
      },
      {
        "word": "could",
        "count": 1,
        "group": 4
      },
      {
        "word": "crush",
        "count": 1,
        "group": 5
      },
      {
        "word": "cry",
        "count": 1,
        "group": 6
      },
      {
        "word": "d",
        "count": 0,
        "group": 7
      },
      {
        "word": "day",
        "count": 1,
        "group": 1
      },
      {
        "word": "death",
        "count": 1,
        "group": 2
      },
      {
        "word": "delirious",
        "count": 4,
        "group": 3
      },
      {
        "word": "diamond",
        "count": 2,
        "group": 4
      },
      {
        "word": "did",
        "count": 1,
        "group": 5
      },
      {
        "word": "do",
        "count": 1,
        "group": 6
      },
      {
        "word": "do",
        "count": 1,
        "group": 7
      },
      {
        "word": "dream",
        "count": 1,
        "group": 1
      },
      {
        "word": "dress",
        "count": 1,
        "group": 2
      },
      {
        "word": "drive",
        "count": 1,
        "group": 3
      },
      {
        "word": "drool",
        "count": 1,
        "group": 4
      },
      {
        "word": "drunk",
        "count": 1,
        "group": 5
      },
      {
        "word": "eat",
        "count": 1,
        "group": 6
      },
      {
        "word": "ed",
        "count": 1,
        "group": 7
      },
      {
        "word": "ed",
        "count": 1,
        "group": 1
      },
      {
        "word": "ed",
        "count": 1,
        "group": 2
      },
      {
        "word": "ed",
        "count": 1,
        "group": 3
      },
      {
        "word": "egg",
        "count": 1,
        "group": 4
      },
      {
        "word": "elaborate",
        "count": 4,
        "group": 5
      },
      {
        "word": "enormous",
        "count": 3,
        "group": 6
      },
      {
        "word": "er",
        "count": 1,
        "group": 7
      },
      {
        "word": "es",
        "count": 1,
        "group": 1
      },
      {
        "word": "est",
        "count": 1,
        "group": 2
      },
      {
        "word": "fast",
        "count": 1,
        "group": 3
      },
      {
        "word": "feet",
        "count": 1,
        "group": 4
      },
      {
        "word": "fiddle",
        "count": 2,
        "group": 5
      },
      {
        "word": "finger",
        "count": 2,
        "group": 6
      },
      {
        "word": "fluff",
        "count": 1,
        "group": 7
      },
      {
        "word": "for",
        "count": 1,
        "group": 1
      },
      {
        "word": "forest",
        "count": 2,
        "group": 2
      },
      {
        "word": "frantic",
        "count": 2,
        "group": 3
      },
      {
        "word": "friend",
        "count": 1,
        "group": 4
      },
      {
        "word": "from",
        "count": 1,
        "group": 5
      },
      {
        "word": "from",
        "count": 1,
        "group": 6
      },
      {
        "word": "garden",
        "count": 2,
        "group": 7
      },
      {
        "word": "girl",
        "count": 1,
        "group": 1
      },
      {
        "word": "go",
        "count": 1,
        "group": 2
      },
      {
        "word": "goddess",
        "count": 2,
        "group": 3
      },
      {
        "word": "gorgeous",
        "count": 2,
        "group": 4
      },
      {
        "word": "gown",
        "count": 1,
        "group": 5
      },
      {
        "word": "hair",
        "count": 1,
        "group": 6
      },
      {
        "word": "has",
        "count": 1,
        "group": 7
      },
      {
        "word": "have",
        "count": 1,
        "group": 1
      },
      {
        "word": "have",
        "count": 1,
        "group": 2
      },
      {
        "word": "he",
        "count": 1,
        "group": 3
      },
      {
        "word": "he",
        "count": 1,
        "group": 4
      },
      {
        "word": "head",
        "count": 1,
        "group": 5
      },
      {
        "word": "heave",
        "count": 1,
        "group": 6
      },
      {
        "word": "her",
        "count": 1,
        "group": 7
      },
      {
        "word": "her",
        "count": 1,
        "group": 1
      },
      {
        "word": "here",
        "count": 1,
        "group": 2
      },
      {
        "word": "him",
        "count": 1,
        "group": 3
      },
      {
        "word": "his",
        "count": 1,
        "group": 4
      },
      {
        "word": "his",
        "count": 1,
        "group": 5
      },
      {
        "word": "honey",
        "count": 2,
        "group": 6
      },
      {
        "word": "hot",
        "count": 1,
        "group": 7
      },
      {
        "word": "how",
        "count": 1,
        "group": 1
      },
      {
        "word": "I",
        "count": 1,
        "group": 2
      },
      {
        "word": "I",
        "count": 1,
        "group": 3
      },
      {
        "word": "I",
        "count": 1,
        "group": 4
      },
      {
        "word": "I",
        "count": 1,
        "group": 5
      },
      {
        "word": "if",
        "count": 1,
        "group": 6
      },
      {
        "word": "in",
        "count": 1,
        "group": 7
      },
      {
        "word": "in",
        "count": 1,
        "group": 1
      },
      {
        "word": "in",
        "count": 1,
        "group": 2
      },
      {
        "word": "ing",
        "count": 1,
        "group": 3
      },
      {
        "word": "ing",
        "count": 1,
        "group": 4
      },
      {
        "word": "ing",
        "count": 1,
        "group": 5
      },
      {
        "word": "ing",
        "count": 1,
        "group": 6
      },
      {
        "word": "ing",
        "count": 1,
        "group": 7
      },
      {
        "word": "ing",
        "count": 1,
        "group": 1
      },
      {
        "word": "is",
        "count": 1,
        "group": 2
      },
      {
        "word": "is",
        "count": 1,
        "group": 3
      },
      {
        "word": "is",
        "count": 1,
        "group": 4
      },
      {
        "word": "is",
        "count": 1,
        "group": 5
      },
      {
        "word": "is",
        "count": 1,
        "group": 6
      },
      {
        "word": "it",
        "count": 1,
        "group": 7
      },
      {
        "word": "it",
        "count": 1,
        "group": 1
      },
      {
        "word": "it",
        "count": 1,
        "group": 2
      },
      {
        "word": "juice",
        "count": 1,
        "group": 3
      },
      {
        "word": "lake",
        "count": 1,
        "group": 4
      },
      {
        "word": "language",
        "count": 2,
        "group": 5
      },
      {
        "word": "languid",
        "count": 2,
        "group": 6
      },
      {
        "word": "lather",
        "count": 2,
        "group": 7
      },
      {
        "word": "lazy",
        "count": 2,
        "group": 1
      },
      {
        "word": "less",
        "count": 1,
        "group": 2
      },
      {
        "word": "let",
        "count": 1,
        "group": 3
      },
      {
        "word": "lick",
        "count": 1,
        "group": 4
      },
      {
        "word": "lie",
        "count": 1,
        "group": 5
      },
      {
        "word": "life",
        "count": 1,
        "group": 6
      },
      {
        "word": "light",
        "count": 1,
        "group": 7
      },
      {
        "word": "like",
        "count": 1,
        "group": 1
      },
      {
        "word": "like",
        "count": 1,
        "group": 2
      },
      {
        "word": "like",
        "count": 1,
        "group": 3
      },
      {
        "word": "live",
        "count": 1,
        "group": 4
      },
      {
        "word": "love",
        "count": 1,
        "group": 5
      },
      {
        "word": "luscious",
        "count": 2,
        "group": 6
      },
      {
        "word": "lust",
        "count": 1,
        "group": 7
      },
      {
        "word": "ly",
        "count": 1,
        "group": 1
      },
      {
        "word": "ly",
        "count": 1,
        "group": 2
      },
      {
        "word": "ly",
        "count": 1,
        "group": 3
      },
      {
        "word": "ly",
        "count": 1,
        "group": 4
      },
      {
        "word": "mad",
        "count": 1,
        "group": 5
      },
      {
        "word": "man",
        "count": 1,
        "group": 6
      },
      {
        "word": "me",
        "count": 1,
        "group": 7
      },
      {
        "word": "me",
        "count": 1,
        "group": 1
      },
      {
        "word": "me",
        "count": 1,
        "group": 2
      },
      {
        "word": "mean",
        "count": 1,
        "group": 3
      },
      {
        "word": "meat",
        "count": 1,
        "group": 4
      },
      {
        "word": "men",
        "count": 1,
        "group": 5
      },
      {
        "word": "milk",
        "count": 1,
        "group": 6
      },
      {
        "word": "mist",
        "count": 1,
        "group": 7
      },
      {
        "word": "moan",
        "count": 1,
        "group": 1
      },
      {
        "word": "moon",
        "count": 1,
        "group": 2
      },
      {
        "word": "mother",
        "count": 2,
        "group": 3
      },
      {
        "word": "music",
        "count": 2,
        "group": 4
      },
      {
        "word": "must",
        "count": 1,
        "group": 5
      },
      {
        "word": "my",
        "count": 1,
        "group": 6
      },
      {
        "word": "my",
        "count": 1,
        "group": 7
      },
      {
        "word": "my",
        "count": 1,
        "group": 1
      },
      {
        "word": "need",
        "count": 1,
        "group": 2
      },
      {
        "word": "never",
        "count": 2,
        "group": 3
      },
      {
        "word": "no",
        "count": 1,
        "group": 4
      },
      {
        "word": "no",
        "count": 1,
        "group": 5
      },
      {
        "word": "not",
        "count": 1,
        "group": 6
      },
      {
        "word": "not",
        "count": 1,
        "group": 7
      },
      {
        "word": "of",
        "count": 1,
        "group": 1
      },
      {
        "word": "of",
        "count": 1,
        "group": 2
      },
      {
        "word": "of",
        "count": 1,
        "group": 3
      },
      {
        "word": "of",
        "count": 1,
        "group": 4
      },
      {
        "word": "on",
        "count": 1,
        "group": 5
      },
      {
        "word": "on",
        "count": 1,
        "group": 6
      },
      {
        "word": "one",
        "count": 1,
        "group": 7
      },
      {
        "word": "or",
        "count": 1,
        "group": 1
      },
      {
        "word": "our",
        "count": 1,
        "group": 2
      },
      {
        "word": "over",
        "count": 2,
        "group": 3
      },
      {
        "word": "pant",
        "count": 1,
        "group": 4
      },
      {
        "word": "peach",
        "count": 1,
        "group": 5
      },
      {
        "word": "petal",
        "count": 2,
        "group": 6
      },
      {
        "word": "picture",
        "count": 2,
        "group": 7
      },
      {
        "word": "pink",
        "count": 1,
        "group": 1
      },
      {
        "word": "play",
        "count": 1,
        "group": 2
      },
      {
        "word": "please",
        "count": 1,
        "group": 3
      },
      {
        "word": "pole",
        "count": 1,
        "group": 4
      },
      {
        "word": "pound",
        "count": 1,
        "group": 5
      },
      {
        "word": "puppy",
        "count": 2,
        "group": 6
      },
      {
        "word": "purple",
        "count": 2,
        "group": 7
      },
      {
        "word": "put",
        "count": 1,
        "group": 1
      },
      {
        "word": "r",
        "count": 0,
        "group": 2
      },
      {
        "word": "r",
        "count": 0,
        "group": 3
      },
      {
        "word": "rain",
        "count": 1,
        "group": 4
      },
      {
        "word": "raw",
        "count": 1,
        "group": 5
      },
      {
        "word": "re",
        "count": 1,
        "group": 6
      },
      {
        "word": "red",
        "count": 1,
        "group": 7
      },
      {
        "word": "repulsive",
        "count": 3,
        "group": 1
      },
      {
        "word": "rip",
        "count": 1,
        "group": 2
      },
      {
        "word": "rock",
        "count": 1,
        "group": 3
      },
      {
        "word": "rose",
        "count": 1,
        "group": 4
      },
      {
        "word": "run",
        "count": 1,
        "group": 5
      },
      {
        "word": "rust",
        "count": 1,
        "group": 6
      },
      {
        "word": "s",
        "count": 0,
        "group": 7
      },
      {
        "word": "s",
        "count": 0,
        "group": 1
      },
      {
        "word": "s",
        "count": 0,
        "group": 2
      },
      {
        "word": "s",
        "count": 0,
        "group": 3
      },
      {
        "word": "s",
        "count": 0,
        "group": 4
      },
      {
        "word": "s",
        "count": 0,
        "group": 5
      },
      {
        "word": "s",
        "count": 0,
        "group": 6
      },
      {
        "word": "s",
        "count": 0,
        "group": 7
      },
      {
        "word": "s",
        "count": 0,
        "group": 1
      },
      {
        "word": "s",
        "count": 0,
        "group": 2
      },
      {
        "word": "s",
        "count": 0,
        "group": 3
      },
      {
        "word": "sad",
        "count": 1,
        "group": 4
      },
      {
        "word": "said",
        "count": 1,
        "group": 5
      },
      {
        "word": "sausage",
        "count": 2,
        "group": 6
      },
      {
        "word": "say",
        "count": 1,
        "group": 7
      },
      {
        "word": "scream",
        "count": 1,
        "group": 1
      },
      {
        "word": "sea",
        "count": 1,
        "group": 2
      },
      {
        "word": "see",
        "count": 1,
        "group": 3
      },
      {
        "word": "shadow",
        "count": 2,
        "group": 4
      },
      {
        "word": "she",
        "count": 1,
        "group": 5
      },
      {
        "word": "she",
        "count": 1,
        "group": 6
      },
      {
        "word": "shine",
        "count": 1,
        "group": 7
      },
      {
        "word": "ship",
        "count": 1,
        "group": 1
      },
      {
        "word": "shot",
        "count": 1,
        "group": 2
      },
      {
        "word": "show",
        "count": 1,
        "group": 3
      },
      {
        "word": "sing",
        "count": 1,
        "group": 4
      },
      {
        "word": "sit",
        "count": 1,
        "group": 5
      },
      {
        "word": "skin",
        "count": 1,
        "group": 6
      },
      {
        "word": "sky",
        "count": 1,
        "group": 7
      },
      {
        "word": "sleep",
        "count": 1,
        "group": 1
      },
      {
        "word": "smear",
        "count": 1,
        "group": 2
      },
      {
        "word": "smell",
        "count": 1,
        "group": 3
      },
      {
        "word": "smooth",
        "count": 1,
        "group": 4
      },
      {
        "word": "so",
        "count": 1,
        "group": 5
      },
      {
        "word": "soar",
        "count": 1,
        "group": 6
      },
      {
        "word": "some",
        "count": 1,
        "group": 7
      },
      {
        "word": "sordid",
        "count": 2,
        "group": 1
      },
      {
        "word": "spray",
        "count": 1,
        "group": 2
      },
      {
        "word": "spring",
        "count": 1,
        "group": 3
      },
      {
        "word": "still",
        "count": 1,
        "group": 4
      },
      {
        "word": "stop",
        "count": 1,
        "group": 5
      },
      {
        "word": "storm",
        "count": 1,
        "group": 6
      },
      {
        "word": "suit",
        "count": 1,
        "group": 7
      },
      {
        "word": "summer",
        "count": 2,
        "group": 1
      },
      {
        "word": "sun",
        "count": 1,
        "group": 2
      },
      {
        "word": "sweat",
        "count": 1,
        "group": 3
      },
      {
        "word": "sweet",
        "count": 1,
        "group": 4
      },
      {
        "word": "swim",
        "count": 1,
        "group": 5
      },
      {
        "word": "symphony",
        "count": 3,
        "group": 6
      },
      {
        "word": "the",
        "count": 1,
        "group": 7
      },
      {
        "word": "the",
        "count": 1,
        "group": 1
      },
      {
        "word": "the",
        "count": 1,
        "group": 2
      },
      {
        "word": "the",
        "count": 1,
        "group": 3
      },
      {
        "word": "the",
        "count": 1,
        "group": 4
      },
      {
        "word": "their",
        "count": 1,
        "group": 5
      },
      {
        "word": "there",
        "count": 1,
        "group": 6
      },
      {
        "word": "these",
        "count": 1,
        "group": 7
      },
      {
        "word": "they",
        "count": 1,
        "group": 1
      },
      {
        "word": "those",
        "count": 1,
        "group": 2
      },
      {
        "word": "though",
        "count": 1,
        "group": 3
      },
      {
        "word": "thousand",
        "count": 2,
        "group": 4
      },
      {
        "word": "through",
        "count": 1,
        "group": 5
      },
      {
        "word": "time",
        "count": 1,
        "group": 6
      },
      {
        "word": "tiny",
        "count": 2,
        "group": 7
      },
      {
        "word": "to",
        "count": 1,
        "group": 1
      },
      {
        "word": "to",
        "count": 1,
        "group": 2
      },
      {
        "word": "to",
        "count": 1,
        "group": 3
      },
      {
        "word": "together",
        "count": 3,
        "group": 4
      },
      {
        "word": "tongue",
        "count": 1,
        "group": 5
      },
      {
        "word": "trudge",
        "count": 1,
        "group": 6
      },
      {
        "word": "TV",
        "count": 2,
        "group": 7
      },
      {
        "word": "ugly",
        "count": 2,
        "group": 1
      },
      {
        "word": "up",
        "count": 1,
        "group": 2
      },
      {
        "word": "urge",
        "count": 1,
        "group": 3
      },
      {
        "word": "us",
        "count": 1,
        "group": 4
      },
      {
        "word": "use",
        "count": 1,
        "group": 5
      },
      {
        "word": "want",
        "count": 1,
        "group": 6
      },
      {
        "word": "want",
        "count": 1,
        "group": 7
      },
      {
        "word": "was",
        "count": 1,
        "group": 1
      },
      {
        "word": "watch",
        "count": 1,
        "group": 2
      },
      {
        "word": "water",
        "count": 2,
        "group": 3
      },
      {
        "word": "wax",
        "count": 1,
        "group": 4
      },
      {
        "word": "we",
        "count": 1,
        "group": 5
      },
      {
        "word": "we",
        "count": 1,
        "group": 6
      },
      {
        "word": "were",
        "count": 1,
        "group": 7
      },
      {
        "word": "what",
        "count": 1,
        "group": 1
      },
      {
        "word": "when",
        "count": 1,
        "group": 2
      },
      {
        "word": "whisper",
        "count": 2,
        "group": 3
      },
      {
        "word": "who",
        "count": 1,
        "group": 4
      },
      {
        "word": "why",
        "count": 1,
        "group": 5
      },
      {
        "word": "will",
        "count": 1,
        "group": 6
      },
      {
        "word": "wind",
        "count": 1,
        "group": 7
      },
      {
        "word": "with",
        "count": 1,
        "group": 1
      },
      {
        "word": "with",
        "count": 1,
        "group": 2
      },
      {
        "word": "woman",
        "count": 2,
        "group": 3
      },
      {
        "word": "worship",
        "count": 2,
        "group": 4
      },
      {
        "word": "y",
        "count": 1,
        "group": 5
      },
      {
        "word": "y",
        "count": 1,
        "group": 6
      },
      {
        "word": "y",
        "count": 1,
        "group": 7
      },
      {
        "word": "y",
        "count": 1,
        "group": 1
      },
      {
        "word": "yet",
        "count": 1,
        "group": 2
      },
      {
        "word": "you",
        "count": 1,
        "group": 3
      },
      {
        "word": "you",
        "count": 1,
        "group": 4
      },
      {
        "word": "you",
        "count": 1,
        "group": 5
      },
      {
        "word": "you",
        "count": 1,
        "group": 6
      }
    ]

  }, computed: {
    string1ok: function () {
      var count = 0;
      console.log(this.wordList1)
      this.wordList1.forEach(function (item) {
        count += item.count;
      });
      return count == 5
    }, string2ok: function () {
      var count = 0;
      this.wordList2.forEach(function (item) {
        count += item.count;
      });
      return count == 7
    }, string3ok: function () {
      var count = 0;
      this.wordList3.forEach(function (item) {
        count += item.count;
      });
      return count == 5
    }
  }, watch: {
    string1ok: function (newValue) {
      this.watchCompleteness(newValue)
    }, string2ok: function (newValue) {
      this.watchCompleteness(newValue)
    }, string3ok: function (newValue) {
      this.watchCompleteness(newValue)
    }
  }, created() {
    /*
    this.$http.get('words.json', function (data) {
      console.log('fch')
      //this.$set('post_data', JSON.parse(data)

    })
    /*
    var self = this
   /* $.getJSON('words.json')
      .done(function (data) {
        self.wordList = data;
        self.wordList.forEach(function (item, i) {
          item.key = i
        })
      });*/
    this.wordList.forEach(function (item, i) {
      item.key = i
    })
    const $service = this.$dragula.$service
    $service.options('main', {
      direction: 'horizontal'
    });

    $service.eventBus.$on('drop', function (args) {
      if (args.container.className == "pool") {
        vm.$refs.wordIn.play();
      } else {
        vm.$refs.wordOut.play();
      }
    })
  }, methods: {
    watchCompleteness: function (isComplete) {
      if (isComplete) {
        this.completedLines++;
        switch (this.completedLines) {
          case 1:
          case 2:
            vm.$refs.lines1Completed.play();
            break;
          case 3:
            vm.$refs.lines3Completed.play();
            break;
        }
      } else {
        vm.$refs.lineBroken.play();
        this.completedLines--;
      }
    }, moreWords: function () {
      if (this.screenNum < this.maxScreenNum) {
        this.screenNum++
      } else {
        this.screenNum = 1
      }
    }, speakFromMyHeart: function () {

//      var synth = window.speechSynthesis;
      var msgTxt = this.glueText(this.wordList1) + "<break time='1s'/>" + this.glueText(this.wordList2) + "<break time='1s'/>" + this.glueText(this.wordList3)
      var awsCredentials = new AWS.Credentials("", "");
      var settings = {
        awsCredentials: awsCredentials,
        awsRegion: "eu-west-1",
        pollyVoiceId: "Joey",
        cacheSpeech: true
      }
      var kathy = ChattyKathy(settings);
      if(this.music) {
        document.getElementById('music-player').pause();
        this.music = false
      }
      kathy.Speak("<prosody rate='x-slow'>"+msgTxt+"</prosody>");

      if (kathy.IsSpeaking()) {
        kathy.ShutUp();
      }
     // kathy.ForgetCachedSpeech();
      /*var msg = new SpeechSynthesisUtterance(msgTxt);
      msg.rate = 1
      msg.pitch = 0.8
      //voices = synth.getVoices();
      //console.log(voices)
      // msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0];
      synth.speak(msg);*/
    },
    glueText: function(words) {
      var msgTxt = "";
      words.forEach(function(item) {
        if (item.word != "s") {
          msgTxt += " "
        }
        msgTxt += item.word
      })
      return msgTxt
    },
    toggleMusic: function () {
      if(this.music) {
        document.getElementById('music-player').pause();
        this.music = false
      } else {
        document.getElementById('music-player').play();
        this.music = true
      }
    },
    toggleSound: function () {
      
    }
  }
})
