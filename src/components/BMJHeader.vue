<script setup>
  import logo from '@img/bmj-logo.png';
</script>
<template>
	<header class="bg-[#2563B2] relative z-30" data-xp="header">
		<div class="container mx-auto flex md:items-center">
			<div class="px-4 py-10 md:px-12 lg:px-32 w-3/5">
				<a href="http://www.bmj.com/thebmj" target="_blank">
					<img :src="logo" alt="BMJ Logo" />
					<span class="text-[#fff]">Hosted Content</span>
				</a>
			</div>
		</div>
	</header>
</template>
