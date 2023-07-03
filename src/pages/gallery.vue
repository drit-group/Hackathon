<template>
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
    class="max-sm:w-9/12"
  >
    <div v-if="format == 'image'">
      <img
        :src="source"
        class="absolute rounded-2xl max-sm:w-11/12 lg:mr-3 h-[180%] w-5/12 right-1/4 -translate-x-[50px] translate-y-[100px] max-sm:right-[5%]"
      />
    </div>
    <video
      v-else
      id="my-player"
      class="video-js p-5 absolute mr-24 translate-y-20 max-sm:translate-x-10 right-[21%] max-sm:w-full max-sm:h-56 w-5/12 max-sm:right-0"
      controls
      preload="auto"
      data-setup="{}"
      width="640"
      height="264"
    >
      <source :src="source" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>

    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      dir="Rtl"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '0': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper absolute top-[250px] translate-y-full lg:translate-y-60 max-sm:-translate-x-14 max-sm:w-full select-none"
    >
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[0].src"
          @click="ShowModal(items[0].type, items[0].src)"
      /></swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[1].src"
          @click="ShowModal(items[1].type, items[1].src)"
      /></swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[2].src"
          @click="ShowModal(items[2].type, items[2].src)"
      /></swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[3].src"
          @click="ShowModal(items[3].type, items[3].src)"
      /></swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[4].src"
          @click="ShowModal(items[4].type, items[4].src)"
      /></swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[5].src"
          @click="ShowModal(items[5].type, items[5].src)"
      /></swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[6].src"
          @click="ShowModal(items[6].type, items[6].src)"
      /></swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[7].src"
          @click="ShowModal(items[7].type, items[7].src)"
        />
      </swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[8].src"
          @click="ShowModal(items[8].type, items[8].src)"
        />
      </swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[9].src"
          @click="ShowModal(items[9].type, items[9].src)"
        />
      </swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[10].src"
          @click="ShowModal(items[10].type, items[10].src)"
        />
      </swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[11].src"
          @click="ShowModal(items[11].type, items[11].src)"
        />
      </swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[12].src"
          @click="ShowModal(items[12].type, items[12].src)"
        />
      </swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[13].src"
          @click="ShowModal(items[13].type, items[13].src)"
        />
      </swiper-slide>
      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[14].src"
          @click="ShowModal(items[14].type, items[14].src)"
        />
      </swiper-slide>

      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[15].poster"
          @click="ShowModal(items[15].type, items[15].src)"
        />
      </swiper-slide>

      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[16].poster"
          @click="ShowModal(items[16].type, items[16].src)"
        />
      </swiper-slide>

      <swiper-slide
        ><img
        class="lg:h-48 lg:w-full"
          :src="items[17].poster"
          @click="ShowModal(items[17].type, items[17].src)"
        />
      </swiper-slide>
    </swiper>
</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
register();
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";

const items = reactive([
  { id: 1, src: "/image/(1).jpg", type: "image" },
  { id: 2, src: "/image/(2).jpg", type: "image" },
  { id: 3, src: "/image/(9).jpg", type: "image" },
  { id: 4, src: "/image/(3).jpg", type: "image" },
  { id: 5, src: "/image/(4).jpg", type: "image" },
  { id: 6, src: "/image/(5).jpg", type: "image" },
  { id: 7, src: "/image/(6).jpg", type: "image" },
  { id: 8, src: "/image/(7).jpg", type: "image" },
  { id: 9, src: "/image/(13).jpg", type: "image" },
  { id: 10, src: "/image/(14).jpg", type: "image" },
  { id: 11, src: "/image/(15).jpg", type: "image" },
  { id: 12, src: "/image/(16).jpg", type: "image" },
  { id: 13, src: "/image/(17).jpg", type: "image" },
  { id: 14, src: "/image/(18).jpg", type: "image" },
  { id: 15, src: "/image/(19).jpg", type: "image" },
  {
    id: 16,
    src: "/Video/eTeam.mp4",
    poster: "/image/eTeam_cover.jpg",
    type: "video",
  },
  {
    id: 17,
    src: "/Video/begin.mp4",
    poster: "/image/begin_cover.jpg",
    type: "video",
  },
  {
    id: 18,
    src: "/Video/ending.mp4",
    poster: "/image/ending_cover.jpg",
    type: "video",
  },
  {
    id: 19,
    src: "/Video/Interview.mp4",
    poster: "/image/interview_cover.jpg",
    type: "video",
  },
]);

const source = ref("/image/(1).jpg");
const format = ref("image");

const ShowModal = (type, src) => {
  source.value = src;
  format.value = type;
  console.log(src + " " + type);
};
</script>

<style></style>
