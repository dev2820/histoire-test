<script lang="ts">
import FancyListBase from "./FancyListBase.vue";

export type Item<T = {}> = {
  id: string;
} & T;

interface Props<T> {
  list: Item<T>[];
}

type FancyList = new <T = {}>(props: Props<T>) => {
  $props: Props<T>;
};

export default FancyListBase as FancyList;
</script>
