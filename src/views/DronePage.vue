<template>
  <div class="drone-object" ref="droneWrapper">
    <div
      class="drone"
      ref="droneElement"
      :style="{ marginTop: getYPostion, marginLeft: getXPostion }"
    >
      <div class="camera">
        <img
          src="https://i.postimg.cc/j2Bgzqyt/drone-right.png"
          class="wing-left"
        />
        <img
          src="https://i.postimg.cc/j2Bgzqyt/drone-right.png"
          class="wing-right"
        />
        <div class="click-left"></div>
        <div class="click-right"></div>
        <div class="flash"></div>
        <div class="lens">
          <div class="innerLens"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DronePage",
  data() {
    return {
      windowHeight: 1,
      windowWidth: 1,
      droneLeft: 200,
      droneTop: 200,
    };
  },
  computed: {
    getXPostion() {
      return `${this.droneLeft}px`;
    },
    getYPostion() {
      return `${this.droneTop}px`;
    },
    isSuccess() {
      return (
        this.droneLeft > 0 &&
        this.droneLeft < this.windowWidth &&
        this.droneTop > 0 &&
        this.droneTop < this.windowHeight
      );
    },
  },
  created() {
    document.addEventListener("keydown", (e) => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      if (this.isSuccess) {
        switch (e.key) {
          case "ArrowRight":
            this.droneLeft = this.droneLeft + 1;
            break;
          case "ArrowLeft":
            this.droneLeft = this.droneLeft - 1;
            break;
          case "ArrowDown":
            this.droneTop = this.droneTop + 1;
            break;
          case "ArrowUp":
            this.droneTop = this.droneTop - 1;
            break;
          default:
            this.droneLeft = 200;
            this.droneTop = 200;
        }
      }
    });
  },
};
</script>

<style lang="css" scoped>
.drone-object {
  position: absolute;
  inset: 0;
  background-color: gray;
}
.drone {
  position: relative;
}

.wing-left {
  width: 90px;
  top: -45px;
  left: -12px;
  position: absolute;
  animation: rotation 0.1s linear infinite;
}
.wing-right {
  width: 90px;
  top: -45px;
  right: -19px;
  position: absolute;
  animation: rotation 0.1s linear infinite;
}
@keyframes rotation {
  100% {
    transform: rotateY(360deg);
  }
}
.camera {
  position: relative;
  width: 160px;
  height: 100px;
  background: #fff;
  border-radius: 15px;
  position: relative;
}
.click-left {
  background: #fff;
  width: 10px;
  height: 30px;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: -28px;
  left: 30px;
}
.click-right {
  background: #fff;
  width: 10px;
  height: 30px;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: -28px;
  right: 20px;
}
.flash {
  background: gray;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 12px;
}
.lens {
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid gray;
  margin: 0 auto;
  position: absolute;
  inset: 15px 0 0 0;
}
.innerLens {
  background: gray;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin: 10px;
}
</style>
