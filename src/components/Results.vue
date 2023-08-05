<script setup>
	import { defineProps } from "vue";
	const props = defineProps(["message"]);
</script>
<template>
	<p class="message">
		{{ message }}
	</p>
</template>
