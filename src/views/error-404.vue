<template>
  <a-result status="404" title="404" sub-title="Sorry, 该页面离家出走了～～～">
    <template #extra>
      <a-button type="primary" @click="$router.replace('/')">返回首页</a-button>
    </template>
  </a-result>
</template>