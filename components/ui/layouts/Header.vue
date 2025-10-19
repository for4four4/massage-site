<template>
  <header id="header">
    <div class="header page-width">
      <NuxtLink class="header-logo" to="/">
        <img class="header-logo_image" src="/mainlogo.svg" alt=""/>
        <span class="header-logo_title">Студия <br>аппаратного <br>и ручного <br>массажа</span>
      </NuxtLink>
      <nav class="header-navbar" itemscope itemtype="http://schema.org/SiteNavigationElement">
        <a href="#services" itemprop="url" class="header-navbar_item" style="color:darkorange;font-size: 24px;">Акция</a>
        <a href="#categories" itemprop="url" class="header-navbar_item">Категории услуг</a>
        <a href="#services" itemprop="url" class="header-navbar_item">Услуги</a>
        <a href="#footer" itemprop="url" class="header-navbar_item">Контакты</a>
      </nav>
      <div class="header-small-menu">
        <div class="header-small-menu_hrefs">
          <a href="#services" class="header-navbar_item header-navbar_item__small" style="color:darkorange;font-size: 16px;">Акция</a>
          <a href="#services" class="header-navbar_item header-navbar_item__small">Услуги</a>
          <a href="#footer" class="header-navbar_item header-navbar_item__small">Контакты</a>
        </div>
        <a class="enroll-button enroll-button__small ms_booking">Записаться</a>
      </div>
      <a class="enroll-button ms_booking">Записаться</a>
    </div>
  </header>
</template>

<script setup>
// Логика хедера если нужна
</script>

<style scoped>
/* Стили уже в SCSS файлах */
</style>
