<template>
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
    class="text-white h-[1400px] select-none"
  >
    <div>
      <video
        id="my-player1"
        class="video-js absolute top-28 rounded-xl max-sm:top-10 max-sm:w-72 max-sm:mr-11 max-sm:-translate-y-20 lg:-translate-x-5 md:-translate-x-40"
        controls
        preload="auto"
        poster="/image/Team1-cover.jpg"
        data-setup="{}"
        width="480"
        height="264"
        controlsList="nodownload"
      >
        <source src="/Video/Team1.mp4" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>

      <div
        class="absolute top-1/3 text-center w-8/12 mr-14 max-sm:-translate-y-80 lg:-translate-x-96 lg:mr-28 lg:w-7/12 lg:-translate-y-96 lg:mt-12 md:-translate-y-10 md:-translate-x-24 md:mt-7"
      >
        <h1 class="text-3xl">تیم بادوم جون</h1>
        <p class="text-right mb-10 lg:mr-10 lg:mb-5 leading-7">
          تیم بادوم جون تیم اول و برنده رویداد بود که با ارائه ای قدرتمند و
          همچنین پروتوتایپ کامل و جذاب توانست توجه داوران را به خود جلب کند.
          ایده ای که این تیم برای حل چالش ارائه کردن بر پایه گیمیفیکیشن بود و
          اپلیکیشنی به این جهت ارائه شد. که کار های روزمره را در قالب بازی ارائه
          می داد و باعث بهره وری بهتر از انرژی، پاکی محیط زیست و اشتغال زایی می
          شد.
        </p>
      </div>
    </div>

    <div class="translate-y-[850px]">
      <video
        id="my-player2"
        class="video-js absolute top-3/4 rounded-xl lg:left-[1%] sm:left-[18%] max-sm:w-72 max-sm:mr-11 max-sm:translate-y-0 lg:mr-96 lg:-translate-y-80 md:translate-x-10"
        controls
        preload="auto"
        poster="/image/Team2-cover.jpg"
        data-setup="{}"
        width="480"
        height="264"
        controlsList="nodownload"
      >
        <source src="/Video/Team2.mp4" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>

      <div
        class="absolute top-1/3 mt-52 text-center w-7/12 mr-14 lg:-mr-[32px] max-sm:-translate-y-10 lg:mt-24 lg:w-7/12 lg:-translate-y-96 right-[1%] md:translate-y-32 md:-translate-x-24"
      >
        <h1 class="text-3xl">تیم CIS</h1>
        <p class="text-right mb-10 lg:mb-5 leading-7">
          تیم CIS موفق به کسب مقام دوم در این رویداد شد، در شروع ارئه با نمایش
          انیمیشن ساخته شده توسط تیم باعث جلب توجه داوران شد و یکی از نقاط قوت
          این تیم شناخته شد. راهکار این تیم برای حل چالش ساخت و ورود هوش مصنوعی
          ایرانی به این عرصه بود که با پرسش و پاسخ از آن بهترین راه حل ها و پاسخ
          ها را ارئه می داد و همینطور اکثر اپلیکیشن های کاربردی و مورد نیاز را
          در یک اپ ارائه می کرد.
        </p>
      </div>
    </div>

    <div class="translate-y-[1550px] lg:translate-y-[800px] lg:mr-10">
      <video
        id="my-player3"
        class="video-js absolute top-28 rounded-xl max-sm:w-72 max-sm:mr-11 max-sm:translate-y-36 lg:translate-x-5 md:-translate-x-40"
        controls
        preload="auto"
        poster="/image/Team3-cover.jpg"
        data-setup="{}"
        width="480"
        height="264"
        controlsList="nodownload"
      >
        <source src="/Video/Team3.mp4" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>

      <div
        class="absolute mt-80 text-center w-8/12 mr-14 lg:-translate-x-96 lg:mr-28 lg:-translate-y-44 lg:mb-36 lg:w-7/12 max-sm:translate-y-32 md:translate-y-36 md:-translate-x-24"
      >
        <h1 class="text-3xl">تیم XP PLUS</h1>
        <p class="text-right mb-10 leading-7">
          تیم ایکس پی پلاس در این رویداد دست به ایده ی متفاوت زد و برای ایده آل
          سازی شهر دست به تکنولوژی روز نزد و هدف این تیم تشخیص و بهتر کردن احساسات افراد برای بهتر کردن جامعه به صورت کامل وجزئی بود که همچین ایده ای کم سابقه بود و همچنین خیلی هم استقبال شد و توانست رتبه سوم مسابقه رو بدست بیاورد.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      const videoContainers = document.querySelectorAll('.video-container');
      for (let i = 0; i < videoContainers.length; i++) {
        const downloadButtons = videoContainers[i].querySelectorAll('.video-js .vjs-download-control');
        for (let j = 0; j < downloadButtons.length; j++) {
          downloadButtons[j].style.display = 'none';
        }
      }
    });
  },
};
</script>


