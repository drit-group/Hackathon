<template>
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
    class="text-white h-[1500px] lg:h-[1000px]"
  >
    <h1 class="about text-3xl text-center lg:translate-y-24 lg:text-7xl">
      انجمن Dr-It
    </h1>
    <p
      class="w-8/12 text-right text-md leading-7 translate-y-10 -translate-x-40 select-none max-sm:-translate-x-20 lg:translate-y-40 lg:-translate-x-64"
    >
      انجمن برنامه نویسان نوجوان دکتر آی تی، انجمنی پویا و فعال است که با هدف
      افزایش سطح علمی و توسعه کارگروهی در بین نوجوانان علاقه مند در زمینه علوم
      کامپیوتر، فناوری اطلاعات، شبکه و برنامه نویسی و ایجاد هم افزایی جمعی در
      تاریخ ۳۱ تیر ۱۳۹۹ تاسیس گردید و تاکنون افتخارات متعددی کسب نموده است. این
      انجمن تا کنون بیش از ۱۲۵ جلسه هفتگی به منظور بحث و بررسی مباحث روز مرتبط و
      اشتراک گذاری دانش و تجارب و همچنین ارتقای سطح تخصصی اعضا، برگزار نموده
      است. از دیگر افتخارات انجمن می‌توان به برگزاری اولین همایش برنامه نویسان
      شهرستان نجف آباد به مناسبت روز برنامه نویس در شهریور ماه سال 1400 اشاره
      کرد. این همایش با حضور فعالان، اساتید و علاقه‌مندان به علوم کامپیوتر و
      برنامه‌نویسی شهرستان، به منظور ارتقای فرصت‌های شغلی و توانمندی‌های
      نوجوانان در این حوزه برگزار گردید. همچنین، انجمن دکتر آی تی برگزار کننده
      اولین هکاتون شهرستان نجف آباد با هدف ایجاد تعامل و همکاری در گروه‌های تیمی
      و پیاده‌سازی پروژه‌های مبتنی بر فناوری بود که توانست محیطی را برای
      نوجوانان علاقه‌مند به توسعه نرم‌افزار، استارت اپ و ایده‌های نوآورانه فراهم
      آورد و می‌توان این رویداد را شروعی برای اهداف بالاتر انجمن به حساب آورد.
      این انجمن با فعالیت‌های خود توانسته است جمعیت نوجوانان علاقه‌مند به
      فناوری‌های اطلاعات و شبکه را به یکدیگر نزدیکتر نموده و به رشد و پیشرفت
      اعضا در این حوزه کمک شایانی کند.
    </p>

    <video
      id="my-player"
      class="video-js absolute translate-y-20 rounded w-9/12 lg:right-[23%] mb-28 lg:w-6/12 max-sm:right-[12%] md:right-[12%] lg:translate-y-52"
      controls
      preload="auto"
      poster="/image/drit_cover.jpg"
      data-setup="{}"
      width="480"
      height="264"
    >
      <source src="/Video/Drit.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
    background: linear-gradient(
        to right,
        #7953cd 20%,
        #00affa 30%,
        #0190cd 70%,
        #764ada 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 3s ease-in-out infinite alternate;
}
@keyframes textShine {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
</style>
