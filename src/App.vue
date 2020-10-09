<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  width: 100vw;
  height: 100vh;
  color: #333;
  font-size: 62.5%;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
}
#app {
  width: 100vw;
  height: 100vh;
}
// 修改系统滚动条样式
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  border-radius: 8px;
}
::-webkit-scrollbar-track-piece {
  border-radius: 2px 2px 0 0;
}
::-webkit-scrollbar-thumb {
  background: rgba(144, 147, 153, 0.5);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(144, 147, 153, 0.5);
}
::-webkit-scrollbar-corner {
  background: rgba(144, 147, 153, 0.5);
}
</style>
