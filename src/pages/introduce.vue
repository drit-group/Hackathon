<template>
  <div>
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      class="text-center pt-44 select-none"
    >
      <h1 class="text-white text-4xl">هکاتون چیه؟</h1>

      <h4 class="text-white text-xl mt-10 leading-10 w-10/12 mx-auto">
        رویداد هکاتون یک رویداد ایده محور است که در زمینه های مختلفی برگزار
        میشود. هدف هکاتون در اصل رفع یک مشکل در یک سازمان، شهر، انجمن و... می
        باشد که می تواند با یک خروجی نیز همراه باشد. همچنین هکاتون محل پرورش،
        رشد و پیاده سازی ایده های متفاوت است که این رویداد زمینه های مورد نیاز
        برای این موارد را فراهم می سازد. رویه هکاتون ها به این صورت است که در
        ابتدا یک چالش مطرح می شود و شرکت کنندگان در این رویداد به صورت انفرادی
        یا تیمی ( که معمولا به صورت تیمی شرکت می کنند ) به صورت فشرده روی چالش
        کار می کنند و برای حل این چالش راهکار ارئه می کنند. راهکار ها در قالب
        خروجی های مختلف ارائه می شود و توسط هیئت داوری، داوری می شود و در نهایت
        راهکار برتر قبول و استفاده می شود.
      </h4>
    </div>
    <div class="flex justify-center pt-3">
      <video
        id="my-player"
        class="video-js p-5 rounded-md"
        controls
        preload="auto"
        poster="/image/cover.png"
        data-setup="{}"
        width="640"
        height="264"
      >
        <source src="/Video/intro.mp4" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
