<template>
  <Foo>
    <template v-slot:newSyntax>
      <p class="new-example">text not rendered</p>
    </template>
    <template slot="oldSyntax">
      <p class="old-example">text rendered</p>
    </template>
  </Foo>
</template>

<script>
import Foo from "./Foo";

export default {
  components: { Foo }
};
</script>
