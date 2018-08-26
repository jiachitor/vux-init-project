<template>
<div>
    <keep-alive>
      tee
        <demo-list></demo-list>
    </keep-alive>
</div>
</template>

<script>
import DemoList from './DemoList'

export default {
    components: {
        DemoList
    }
}
</script>
