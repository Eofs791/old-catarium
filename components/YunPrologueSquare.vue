<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useThemeConfig } from 'valaxy-theme-yun/composables/config.ts'

const themeConfig = useThemeConfig()

const showContent = ref(false)

const intro = ['欢迎造访我的小箱庭~', 'In Solitude, Where We Are Least Alone'],
  dynamicIntro = ref(''),
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 900

let introIndex = 0,
  charIndex = 0,
  isDeleting = false

function typingEffect() {
  const currentIntro = intro[introIndex]

  if (!isDeleting) {
    dynamicIntro.value = currentIntro.substring(0, charIndex + 1)
    charIndex++

    if (charIndex == currentIntro.length) {
      setTimeout(() => {
        isDeleting = true
        typingEffect()
      }, pauseTime)
      return
    }
  } else {
    dynamicIntro.value = currentIntro.substring(0, charIndex + 1)
    charIndex--

    if (charIndex == 0) {
      isDeleting = false
      introIndex = (introIndex + 1) % intro.length
    }
  }

  setTimeout(typingEffect, isDeleting ? deletingSpeed : typingSpeed)
}

onMounted(() => {
  setTimeout(() => {
    typingEffect()
  }, 1300) 
})

</script>

<template>
  <div flex="~ col" class="yun-square-container items-center justify-center text-center max-w-2xl">
    <slot />

    <div flex="~ col center" class="info-with-avatar relative duration-800 transition-cubic-bezier-ease-in" :class="{
      show: showContent,
    }">
      <Transition enter-from-class="enter-from" enter-to-class="enter-to" appear @after-appear="showContent = true">
        <div flex="~ col" class="yun-square square-rotate z-1 bg-white/80">
          <LineBurstEffects class="absolute top-0 left-0 right-0 bottom-0 size-full scale-200" :delay="200"
            :duration="400" />
          <Transition enter-from-class="op-0" enter-to-class="op-100" enter-active-class="transition-400 delay-400"
            appear>
            <YunAuthorAvatar />
          </Transition>
        </div>
      </Transition>

      <div class="info" :class="{
        show: showContent,
      }">
        <YunAuthorName class="mt-3" />
        <div class="site-author-intro" m="t-0 b-4">
          {{ dynamicIntro }}
        </div>

        <div class="py-4 md:py-5 lg:pt-6">
          <YunAnimLineDraw />
        </div>
        <div flex="~ col" class="gap-2 items-center justify-center">
          <YunSiteTitle />
        </div>
        <div class="scale-x--100 py-4 md:py-5 lg:pb-6">
          <YunAnimLineDraw />
        </div>

        <YunSocialLinks />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// use scoped for css injection
@use 'sass:map';
@use 'valaxy-theme-yun/styles/vars.scss' as *;

.yun-square {
  transition: all 0.8s map.get($cubic-bezier, 'ease-in');
  border-radius: 50%;
  transform: rotate(0deg) translateY(0%);
  width: var(--avatar-size);
  height: var(--avatar-size);
  box-shadow: 0 5px 100px rgb(0 0 0 / 0.15);

  &.enter-from {
    border-radius: 0%;
    // width: var(--total-char-height);
    // height: var(--total-char-height);
    transform: rotate(135deg) translateY(0%);
    box-shadow: none;
  }
}

.yun-square-container {
  --avatar-size: 100px;

  .info-with-avatar {
    position: relative;

    &.show {
      // transform: translateY(-50%);
    }
  }

  .info {
    position: relative;
    opacity: 0;
    transform: translateY(0);
    transition: all 0.8s map.get($cubic-bezier, 'ease-in');

    &.show {
      opacity: 1;
      // transform: translateY(calc(50% + var(--avatar-size) / 2));
    }
  }
}

.site-author-intro::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

</style>