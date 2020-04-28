<template>
  <div class="count-down">
    <canvas ref="countDown" :width="timerWidth" :height="timerHeight"></canvas>
  </div>
</template>

<script>
export default {
  name: 'count-donw',
  props: {
    time: {
      type: Number,
      default: 5,
    },
    width: {
      type: String,
      default: '50',
    },
    height: {
      type: String,
      default: '50',
    }
  },
  computed: {
    countdownTime() {
      return this.time * this.hz;
    },
    timerWidth() {
      return parseInt(this.width);
    },
    timerHeight() {
      return parseInt(this.height);
    }
  },
  data() {
    return {
      hz: 60, // 大部分屏幕是60Hz，需要优化
      animationFrame: null,
      count: 0,
      reverse: false,
    }
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    active() {
      const speed = 1;
      const x = 25;
      const y = 25;
      const radius = 20;
      const startAngle = 0;
      const canvas = this.$refs.countDown;
      const ctx = canvas.getContext('2d');
      const draw = () => {
        this.count += speed;
        if (this.count >= this.countdownTime) {
          this.count = 1; // 为零会导致重新画一个圆，从而使计时器闪烁
          this.reverse = !this.reverse;
          this.$emit('finish');
        }
        const endAngle = Math.PI * (this.count / (this.countdownTime / 2));

        ctx.clearRect(0, 0, this.timerWidth, this.timerHeight);

        ctx.strokeStyle = '#2d8cf0';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = '1.2rem Yahei';
        ctx.fillText(Math.ceil((this.countdownTime - this.count) / this.hz), x, y)

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, this.reverse)
        ctx.stroke();

        this.animationFrame = requestAnimationFrame(draw)
      }
      console.log('active')
      draw();
    },
    pause() {
      // cancelAnimationFrame(this.animationFrame)
      this.$nextTick(() => cancelAnimationFrame(this.animationFrame));
      // this.setTimeout(() => cancelAnimationFrame(this.animationFrame));
    },
    stop() {
      this.count = 0;
      this.reverse = false;
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
</script>

<style scoped>
.count-down {
  display: inline-block;
}
</style>
