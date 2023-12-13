<template>
  <!-- <div class="flex justify-center items-center h-12 bg-stone-100 py-3">
    <a href="https://t.me/denisqb">denisqb</a>
  </div> -->
  <div class="flex justify-between px-2 py-6 bg-stone-200">
    <div class="flex flex-col gap-4">
      <div>
        <a href="https://www.instagram.com/3dalmatyntsi_store/"
          ><img
            class="w-8 cursor-pointer"
            src="../assets/img/socialMedias/instagram.png"
            alt="instagram"
        /></a>
      </div>
      <div>
        <a href="https://t.me/denisqb"
          ><img
            class="w-8 cursor-pointer"
            src="../assets/img/socialMedias/telegram.png"
            alt="telegram"
        /></a>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <router-link to="Delievery">
        <div class="cursor-pointer">Доставка і оплата</div>
      </router-link>
      <router-link to="About">
        <div class="cursor-pointer">Про нас</div>
      </router-link>
      <router-link to="Faq">
        <div class="cursor-pointer">Часті запитання</div>
      </router-link>
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <a class="cursor-pointer" href="mailto:3dalmatintsy.store@gmail.com"
          >3dalmatintsy.store@gmail.com</a
        >
      </div>
      <div class="cursor-pointer"><a href="tel:0668044000">+38 066 804 4005</a></div>
    </div>
  </div>
</template>
