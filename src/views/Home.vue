<script setup>
	import Results from "../components/Results.vue";
	import { ref } from "vue";

	const generatedNumber = parseInt(Math.random() * 11);
	console.log(generatedNumber);

	const tryNumber = ref(null);
	const message = ref("");
	const showPrize = ref(false);

	const tryGuess = () => {
		if (generatedNumber == tryNumber.value) {
			message.value = "YOU WON!";
			showPrize.value = true;
		} else if (generatedNumber > tryNumber.value) {
			message.value = "Your number is lower, try again";
		} else {
			message.value = "Your number is higher, try again";
		}
	};
	const playAudio = () => {
		document.getElementById("prize-audio").play();
	};
</script>

<template>
	<h1>Harry Potter</h1>
	<h2>
		Guess the number <br />
		Show your spectacular guessing skills
	</h2>

	<input type="text" class="guess" v-model="tryNumber" />
	<button @click="tryGuess" class="button">Try!!</button>
	<Results :message="message"></Results>
	<img
		src="../../public/prize.png"
		alt="prize"
		v-show="showPrize"
		class="prize-img"
		@click="playAudio"
	/>
	<audio src="../../public/prize.wav" id="prize-audio"></audio>
</template>

<style></style>
