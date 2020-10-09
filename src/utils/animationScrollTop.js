 /**
  * 滚动动画过度
  * @param {Object} position 定位（只支持Y轴）
  * */
 class AnimationScrollTop {
     constructor(position, target, delay = 200, speed = 10) {
         this.target = target || window;
         this.position = position
         this.delay = delay
         this.speed = speed;
         this.step = this.delay / this.speed;
         this.scrollTop = undefined;
         // 初始化
         this.init()
     }
     isWindow(obj) {
         return obj != null && obj == obj.window;
     }
     init() {
         if (!window.requestAnimationFrame) {
             window.requestAnimationFrame = (callback, element) => {
                 return setTimeout(callback, this.step);
             };
         }
         if (this.isWindow(this.target)) {
             this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         } else {
             this.scrollTop = this.target.scrollTop;
         }
         // 滚动step方法
         var step = () => {
             // 距离目标滚动距离
             var distance = this.position.y - this.scrollTop;
             // 目标滚动位置
             this.scrollTop = this.scrollTop + distance / 5;
             if (Math.abs(distance) < 1) {
                 window.scrollTo(0, this.position.y);
             } else {
                 window.scrollTo(0, this.scrollTop);
                 requestAnimationFrame(step);
             }
         };
         step();
     }
 }
 export default AnimationScrollTop